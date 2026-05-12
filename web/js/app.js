// app.js — Main orchestrator: routing, nav, briefing screen

const App = {
  _current: null,
  _briefingData: {},

  init() {
    if (!Account.isSetup()) {
      document.getElementById('app').innerHTML = Account.renderOnboarding();
      return;
    }
    this._playBootSequence(() => {
      this._buildShell();
      this.navigate('briefing');
    });
  },

  _playBootSequence(cb) {
    if (sessionStorage.getItem('booted')) { cb(); return; }
    sessionStorage.setItem('booted', '1');
    
    document.getElementById('app').innerHTML = `
      <div class="boot-screen">
        <div class="boot-scanline"></div>
        <div class="boot-content" id="boot-text"></div>
      </div>
    `;
    
    const lines = [
      "INITIALIZING PERFORMANCE OS [v2.4.1]",
      "KERNEL: RCAF_CANDIDATE_OPTIMIZATION_MODULE",
      "MOUNTING ENCRYPTED FILE SYSTEM... OK",
      "ESTABLISHING BIOMETRIC UPLINK... STANDBY",
      "UPLINK SECURED. DECRYPTING DAILY DIRECTIVES...",
      "WELCOME, VICTOR COUTU."
    ];
    let html = "";
    let i = 0;
    const textEl = document.getElementById('boot-text');
    const interval = setInterval(() => {
      if (i < lines.length) {
        html += `<div class="boot-line">${lines[i]}</div>`;
        textEl.innerHTML = html;
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          document.querySelector('.boot-screen').style.opacity = 0;
          setTimeout(cb, 500);
        }, 800);
      }
    }, 250);
  },

  _buildShell() {
    const p = Account.get() || {};
    document.getElementById('app').innerHTML = `
    <nav class="sidebar">
      <div class="sidebar-logo">
        <div class="logo-icon">✈️</div>
        <div>
          <div class="logo-text">Performance OS</div>
          <div class="logo-sub">RCAF Pipeline</div>
        </div>
      </div>

      <div class="nav-section">Daily Protocol</div>
      <button class="nav-item active" id="nav-briefing" onclick="App.navigate('briefing')">
        <span class="nav-icon">🌅</span><span>Morning Briefing</span>
      </button>
      <button class="nav-item" id="nav-pvt" onclick="App.navigate('pvt')">
        <span class="nav-icon">⚡</span><span>PVT Test</span>
      </button>
      <button class="nav-item" id="nav-deepwork" onclick="App.navigate('deepwork')">
        <span class="nav-icon">🧠</span><span>Deep Work</span>
      </button>
      <button class="nav-item" id="nav-tasks" onclick="App.navigate('tasks')">
        <span class="nav-icon">📋</span><span>Task Stack</span>
      </button>

      <div class="nav-section" style="margin-top:16px">Analytics</div>
      <button class="nav-item" id="nav-dashboard" onclick="App.navigate('dashboard')">
        <span class="nav-icon">📊</span><span>Pilot Log</span>
      </button>

      <div class="nav-section" style="margin-top:16px">System</div>
      <button class="nav-item" id="nav-settings" onclick="App.navigate('settings')">
        <span class="nav-icon">⚙️</span><span>Settings</span>
      </button>

      <div class="sidebar-spacer"></div>
      <div class="sidebar-profile" onclick="App.navigate('settings')">
        <div class="profile-name">${p.name || 'Pilot'}</div>
        <div class="profile-meta">RCAF Target: ${p.rcafYear || 2031}</div>
      </div>
    </nav>
    <main class="main">
      <div class="screen active" id="screen-content"></div>
    </main>
    <div class="toast" id="toast"></div>`;
  },

  navigate(screen, params = {}) {
    // Cleanup timers from previous screen
    if (this._current === 'deepwork' && DeepWork._interval) {
      clearInterval(DeepWork._interval);
      DeepWork._running = false;
    }
    if (this._current === 'pvt') PVT.reset();

    this._current = screen;
    this._briefingData = { ...this._briefingData, ...params };

    // Update nav
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const navEl = document.getElementById(`nav-${screen}`);
    if (navEl) navEl.classList.add('active');

    // Render screen
    const content = document.getElementById('screen-content');
    if (!content) return;
    content.innerHTML = this._renderScreen(screen);

    // After-render hooks
    if (screen === 'pvt') PVT.afterRender();
    if (screen === 'deepwork') DeepWork.afterRender();
    if (screen === 'dashboard') Dashboard.afterRender();
  },

  _renderScreen(screen) {
    switch (screen) {
      case 'briefing': return this._renderBriefing();
      case 'pvt': return PVT.render();
      case 'deepwork': return DeepWork.render();
      case 'tasks': return Tasks.render();
      case 'dashboard': return Dashboard.render();
      case 'settings': return Account.renderSettings();
      default: return '<div style="padding:40px;color:var(--text3)">Screen not found</div>';
    }
  },

  _renderBriefing() {
    const pvt = this._briefingData.pvtResult;
    const profile = Account.get() || {};
    const today = DB.today();
    const now = new Date();
    const hour = now.getHours();
    const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening';

    if (!pvt) {
      // Pre-PVT state
      const schedule = [
        { time: '06:00', title: 'Wake-Up', sub: 'Advanced target: 06:30' },
        { time: '06:10', title: 'PVT + Morning Brief', sub: 'CNS diagnostic + Readiness score' },
        { time: '06:10 – 09:00', title: 'Deep Work Block', sub: 'CÉGEP · Cadet Theory · Chess' },
        { time: '09:20 – 16:15', title: 'Enriched Academic', sub: 'Sciences de la nature' },
        { time: '16:30 – 18:30', title: 'Training Window', sub: 'Runna / Strength / Neck' },
        { time: '18:30 – 21:30', title: 'Study Block 2 + Recovery', sub: 'Dinner & debrief' },
        { time: '22:00', title: 'Sleep Protocol', sub: '8h — Non-negotiable' },
      ];
      return `
      <div class="page-header">
        <div class="page-title">${greeting}, <span>${(profile.name || 'Pilot').split(' ')[0]}</span></div>
        <div class="page-sub">${today} · RCAF Pipeline Active · Target: ${profile.rcafYear || 2031}</div>
      </div>

      <div class="grid-2" style="gap:24px;margin-bottom:28px;align-items:start">
        <div>
          <div class="card" style="margin-bottom:20px;background:linear-gradient(135deg,rgba(79,142,247,.1),rgba(124,92,252,.08));border-color:rgba(79,142,247,.25)">
            <div style="font-size:15px;font-weight:700;margin-bottom:8px">🚨 System Status: PENDING</div>
            <div style="font-size:13px;color:var(--text2);margin-bottom:20px">PVT test not completed. Readiness score unavailable. Complete your morning diagnostic to unlock today's directives.</div>
            <button class="btn btn-primary btn-full" onclick="App.navigate('pvt')">⚡ Initiate PVT Test</button>
          </div>
          <div class="card">
            <div class="card-title">Biometric Checklist</div>
            ${['Garmin Sync', 'Sleep Analysis', 'TSB Calculation', 'PVT Test'].map((item, i) =>
              `<div style="display:flex;align-items:center;gap:12px;padding:10px 0;${i<3?'border-bottom:1px solid var(--border)':''}">
                <span style="color:${i < 3 ? 'var(--green)' : 'var(--text3)'}">●</span>
                <span style="font-family:var(--mono);font-size:13px;color:${i < 3 ? 'var(--text)' : 'var(--text3)'}">${item}</span>
                <span style="margin-left:auto;font-size:11px;color:${i < 3 ? 'var(--green)' : 'var(--yellow)'};font-weight:700">${i < 3 ? 'OK' : 'PENDING'}</span>
              </div>`).join('')}
          </div>
        </div>

        <div class="card">
          <div class="card-title">Sacred Schedule</div>
          ${schedule.map(s => `
          <div class="timeline-item">
            <div class="timeline-time">${s.time}</div>
            <div class="timeline-content">
              <div class="timeline-title">${s.title}</div>
              <div class="timeline-sub">${s.sub}</div>
            </div>
          </div>`).join('')}
        </div>
      </div>`;
    }

    // Post-PVT — show readiness result
    const pvtScore = Readiness.pvtToScore(pvt.avgMs);
    const profile2 = Account.get() || {};
    const inputs = {
      hrvDelta: 80,         // placeholder (no Garmin)
      sleepScore: 85,       // placeholder
      tsbNorm: 75,          // placeholder
      pvtDelta: pvtScore,
      rpeInv: 80            // placeholder
    };
    const result = Readiness.calculate(inputs);
    // Save to history
    const existingToday = (DB.get('readiness_history', [])).some(r => r.date === today);
    if (!existingToday) {
      DB.push('readiness_history', { date: today, ...result, pvtMs: pvt.avgMs, timestamp: Date.now() });
    }
    const color = Readiness.stateColor(result.state);
    const directive = Readiness.directive(result.state);

    // SVG arc for score
    const r = 68, circ = 2 * Math.PI * r;
    const arc = circ * (result.score / 100);
    const offset = circ - arc;

    return `
    <div class="page-header">
      <div class="page-title">System <span>Readiness</span></div>
      <div class="page-sub">${today} · Diagnostic Complete</div>
    </div>
    <div class="grid-2" style="gap:24px;align-items:start">
      <div style="display:flex;flex-direction:column;gap:20px">
        <!-- Score ring -->
        <div class="card" style="text-align:center">
          <div style="position:relative;width:160px;height:160px;margin:0 auto 16px">
            <svg width="160" height="160" viewBox="0 0 160 160" style="transform:rotate(-90deg)">
              <circle cx="80" cy="80" r="68" fill="none" stroke="var(--bg3)" stroke-width="8"/>
              <circle cx="80" cy="80" r="68" fill="none" stroke="${color}" stroke-width="8"
                stroke-dasharray="${circ.toFixed(1)}" stroke-dashoffset="${offset.toFixed(1)}"
                stroke-linecap="round" style="transition:stroke-dashoffset 1s ease"/>
            </svg>
            <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center">
              <div style="font-size:52px;font-weight:900;color:${color}">${result.score}</div>
              <div style="font-size:10px;color:var(--text3);letter-spacing:1px;text-transform:uppercase">Score</div>
            </div>
          </div>
          <div style="font-size:22px;font-weight:800;letter-spacing:2px;color:${color}">${result.state.toUpperCase()}</div>
          <div style="font-size:13px;color:var(--text2);margin-top:6px">Today's operational state</div>
        </div>

        <!-- PVT Diagnostics -->
        <div class="card">
          <div class="card-title">PVT Diagnostics</div>
          <div class="grid-3" style="gap:10px">
            <div class="stat-box"><div class="stat-label">Avg RT</div><div class="stat-value" style="font-size:24px">${pvt.avgMs}</div><div class="stat-unit">ms</div></div>
            <div class="stat-box"><div class="stat-label">Lapses</div><div class="stat-value" style="font-size:24px;color:${pvt.lapses > 2 ? 'var(--red)' : 'var(--text)'}">${pvt.lapses}</div><div class="stat-unit">>500ms</div></div>
            <div class="stat-box"><div class="stat-label">False</div><div class="stat-value" style="font-size:24px">${pvt.falseStarts}</div><div class="stat-unit">starts</div></div>
          </div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:20px">
        <!-- Directives -->
        <div class="card">
          <div class="card-title">Today's Directives</div>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div style="background:var(--bg2);border-radius:8px;padding:14px;border-left:3px solid ${color}">
              <div style="font-size:11px;color:var(--text3);letter-spacing:1px;text-transform:uppercase;margin-bottom:4px">Training</div>
              <div style="font-size:15px;font-weight:600">${directive.training}</div>
            </div>
            <div style="background:var(--bg2);border-radius:8px;padding:14px;border-left:3px solid var(--accent2)">
              <div style="font-size:11px;color:var(--text3);letter-spacing:1px;text-transform:uppercase;margin-bottom:4px">Academic</div>
              <div style="font-size:15px;font-weight:600">${directive.academic}</div>
            </div>
          </div>
        </div>

        <!-- Signal Breakdown -->
        <div class="card">
          <div class="card-title">Signal Weights</div>
          ${[
            { label: 'HRV (28%)', value: inputs.hrvDelta, color: '#10b981' },
            { label: 'Sleep (25%)', value: inputs.sleepScore, color: '#4f8ef7' },
            { label: 'TSB (20%)', value: inputs.tsbNorm, color: '#7c5cfc' },
            { label: 'PVT (15%)', value: pvtScore, color: '#f59e0b' },
            { label: 'RPE (12%)', value: inputs.rpeInv, color: '#f97316' },
          ].map(s => `
          <div style="margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
              <span style="color:var(--text2)">${s.label}</span>
              <span style="color:${s.color};font-weight:700">${s.value}</span>
            </div>
            <div class="progress-bar-bg"><div style="height:100%;border-radius:99px;background:${s.color};width:${s.value}%;transition:width .8s ease"></div></div>
          </div>`).join('')}
        </div>

        <button class="btn btn-primary btn-full btn-lg" onclick="App.navigate('deepwork')">
          🧠 Acknowledge & Begin Deep Work
        </button>
      </div>
    </div>`;
  },

  toast(msg, type = 'info') {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.className = `toast ${type} show`;
    setTimeout(() => el.classList.remove('show'), 3000);
  }
};

// Boot
window.addEventListener('DOMContentLoaded', () => App.init());
