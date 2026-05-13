// dashboard.js — Pilot Log Dashboard with 6 Charts

const Dashboard = {
  render() {
    const profile = Account.get() || {};
    const pvtHistory = DB.get('pvt_history', []);
    const readinessHistory = DB.get('readiness_history', []);
    const dwLog = DB.get('deepwork_log', []);
    const taskCompletions = DB.get('task_completions', []);
    const tasks = DB.get('tasks', []);
    const mathHist = DB.get('math_history', []);
    const rpeHist = DB.get('subj_rpe_history', []);
    const today = DB.today();

    // Stats
    const avgPVT = pvtHistory.length ? Math.round(pvtHistory.reduce((a,b) => a+b.avgMs, 0) / pvtHistory.length) : '—';
    const totalDWHours = Math.round(dwLog.reduce((a,b) => a+(b.durationMin||0), 0) / 60);
    const targetYear = profile.rcafYear || 2031;
    const yearsLeft = targetYear - new Date().getFullYear();
    const lastReady = readinessHistory[readinessHistory.length - 1];
    const streak = this._calcStreak(pvtHistory);

    // Weekly deep work (last 7 days)
    const weekDW = this._last7Days().map(d => {
      const entry = dwLog.find(l => l.date === d);
      return { date: d, minutes: entry ? (entry.durationMin || 0) : 0 };
    });

    // Task completion by priority
    const byPriority = ['P0','P1','P2','P3','P4','P5'].map(p => ({
      p, count: taskCompletions.filter(c => c.priority === p).length
    }));

    // Weekly compliance (days with readiness logged)
    const weekReady = this._last7Days().map(d => ({
      date: d,
      score: (readinessHistory.find(r => r.date === d) || {}).score || 0,
      state: (readinessHistory.find(r => r.date === d) || {}).state || null,
    }));

    return `
    <div class="page-header">
      <div class="page-title">Pilot <span>Log</span></div>
      <div class="page-sub">Long-term performance database · RCAF dossier export</div>
    </div>

    <!-- KPI Row -->
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-bottom:28px">
      ${[
        { label: 'Avg PVT RT', value: avgPVT, unit: 'ms', color: avgPVT !== '—' && avgPVT < 250 ? 'var(--green)' : 'var(--text)' },
        { label: 'Deep Work Hours', value: totalDWHours, unit: 'total' },
        { label: 'PVT Streak', value: streak, unit: 'days' },
        { label: 'Tasks Done', value: taskCompletions.filter(c => c.date === today).length, unit: 'today' },
        { label: 'RCAF ETA', value: yearsLeft > 0 ? yearsLeft : '—', unit: `yr → ${targetYear}` },
      ].map(s => `
      <div class="stat-box">
        <div class="stat-label">${s.label}</div>
        <div class="stat-value" style="color:${s.color || 'var(--text)'};font-size:28px">${s.value}</div>
        <div class="stat-unit">${s.unit}</div>
      </div>`).join('')}
    </div>

    <!-- Charts row 1 -->
    <div class="grid-2" style="gap:24px;margin-bottom:24px">
      <div class="card">
        <div class="card-title">PVT Reaction Time (last 20 sessions)</div>
        <canvas id="chart-pvt" height="160"></canvas>
        ${pvtHistory.length === 0 ? this._empty('No PVT sessions yet') : ''}
      </div>
      <div class="card">
        <div class="card-title">Readiness Score Trend</div>
        <canvas id="chart-readiness" height="160"></canvas>
        ${readinessHistory.length === 0 ? this._empty('No readiness data yet') : ''}
      </div>
    </div>

    <!-- Charts row 2 -->
    <div class="grid-2" style="gap:24px;margin-bottom:24px">
      <div class="card">
        <div class="card-title">Weekly Deep Work (minutes/day)</div>
        <canvas id="chart-dw" height="160"></canvas>
        ${weekDW.every(d => d.minutes === 0) ? this._empty('No deep work logged this week') : ''}
      </div>
      <div class="card">
        <div class="card-title">Weekly Readiness Compliance</div>
        <canvas id="chart-compliance" height="160"></canvas>
        ${weekReady.every(d => !d.state) ? this._empty('Complete morning briefings to populate') : ''}
      </div>
    </div>

    <!-- Charts row 3 -->
    <div class="grid-2" style="gap:24px;margin-bottom:28px">
      <div class="card">
        <div class="card-title">PVT Lapse Rate History</div>
        <canvas id="chart-lapses" height="140"></canvas>
        ${pvtHistory.length === 0 ? this._empty('No data yet') : ''}
      </div>
      <div class="card">
        <div class="card-title">Time Spent by Priority (hours)</div>
        <canvas id="chart-priority" height="140"></canvas>
        ${tasks.every(t => !t.timeSpentSeconds) ? this._empty('Start task timers to see time breakdown') : ''}
      </div>
    </div>

    <!-- Charts row 4 (Tactical & Subjective Data) -->
    <div class="grid-2" style="gap:24px;margin-bottom:28px">
      <div class="card">
        <div class="card-title">Math Drill Speed (seconds)</div>
        <canvas id="chart-math" height="140"></canvas>
        ${mathHist.length === 0 ? this._empty('No math drills logged yet') : ''}
      </div>
      <div class="card">
        <div class="card-title">Subjective RPE Trend (1-10)</div>
        <canvas id="chart-rpe" height="140"></canvas>
        ${rpeHist.length === 0 ? this._empty('No RPE logged yet') : ''}
      </div>
    </div>

    <!-- History tables -->
    <div class="grid-2" style="gap:24px;margin-bottom:28px">
      <div class="card">
        <div class="card-title">Recent PVT Sessions</div>
        ${pvtHistory.length === 0
          ? `<div style="color:var(--text3);font-size:13px">No sessions yet.</div>`
          : pvtHistory.slice(-8).reverse().map(s => `
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border)">
            <div>
              <div style="font-size:13px;font-weight:600">${s.date}</div>
              <div style="font-size:11px;color:var(--text3);margin-top:2px">Lapses: ${s.lapses} · False starts: ${s.falseStarts}</div>
            </div>
            <div style="font-size:22px;font-weight:900;color:${s.avgMs<250?'var(--green)':s.avgMs<350?'var(--yellow)':'var(--red)'}">${s.avgMs}ms</div>
          </div>`).join('')}
      </div>
      <div class="card">
        <div class="card-title">Readiness State Log</div>
        ${readinessHistory.length === 0
          ? `<div style="color:var(--text3);font-size:13px">No logs yet.</div>`
          : readinessHistory.slice(-8).reverse().map(r => `
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border)">
            <div>
              <div style="font-size:13px;font-weight:600">${r.date}</div>
              <div style="font-size:11px;color:var(--text3);margin-top:2px">${Readiness.directive(r.state).training}</div>
            </div>
            <div style="text-align:right">
              <span class="badge badge-${r.state.toLowerCase()}">${r.state}</span>
              <div style="font-size:20px;font-weight:900;margin-top:4px">${r.score}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>

    <!-- Export -->
    <div class="card" style="background:linear-gradient(135deg,rgba(79,142,247,.08),rgba(124,92,252,.08));border-color:rgba(79,142,247,.3)">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px">
        <div>
          <div style="font-size:18px;font-weight:800;margin-bottom:4px">RCAF Application Dossier</div>
          <div style="font-size:13px;color:var(--text2)">Complete performance report for your ${targetYear} RCAF application</div>
        </div>
        <button class="btn btn-primary" onclick="Dashboard._exportDossier()">📄 Generate PDF Report</button>
      </div>
    </div>`;
  },

  afterRender() {
    const pvt = DB.get('pvt_history', []);
    const ready = DB.get('readiness_history', []);
    const dw = DB.get('deepwork_log', []);
    const tasks = DB.get('tasks', []);
    const math = DB.get('math_history', []);
    const rpe = DB.get('subj_rpe_history', []);

    if (pvt.length) { this._drawLineChart('chart-pvt', pvt.slice(-20), p => p.avgMs, '#4f8ef7', 'ms', { min: 150, max: 500 }); }
    if (ready.length) { this._drawReadinessChart(ready); }
    this._drawBarChart('chart-dw', this._last7Days().map(d => {
      const e = dw.find(l => l.date === d);
      return { label: d.slice(5), value: e ? (e.durationMin||0) : 0 };
    }), '#7c5cfc');
    this._drawComplianceChart(ready);
    if (pvt.length) { this._drawLineChart('chart-lapses', pvt.slice(-20), p => p.lapses, '#ef4444', 'lapses', { min: 0, max: 10 }); }
    this._drawPriorityChart(tasks);
    if (math.length) { this._drawLineChart('chart-math', math.slice(-20), p => parseFloat(p.time), '#10b981', 's', { min: 0 }); }
    if (rpe.length) { this._drawLineChart('chart-rpe', rpe.slice(-20), p => parseInt(p.value), '#f97316', 'RPE', { min: 0, max: 10 }); }
  },

  _empty(msg) {
    return `<div style="text-align:center;color:var(--text3);font-size:12px;padding:30px 0">${msg}</div>`;
  },

  _last7Days() {
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(); d.setDate(d.getDate() - (6 - i));
      return d.toISOString().slice(0, 10);
    });
  },

  _calcStreak(pvtHistory) {
    if (!pvtHistory.length) return 0;
    const dates = [...new Set(pvtHistory.map(p => p.date))].sort().reverse();
    let streak = 0, cur = new Date();
    for (const d of dates) {
      const expected = new Date(cur); expected.setDate(expected.getDate() - (streak > 0 ? 1 : 0));
      if (d === expected.toISOString().slice(0, 10)) streak++;
      else break;
    }
    return streak;
  },

  // ── Chart Renderers ──
  _ctx(id, h = 160) {
    const canvas = document.getElementById(id);
    if (!canvas) return null;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return { ctx, W: canvas.offsetWidth, H: h };
  },

  _drawLineChart(id, data, accessor, color, unit, bounds = {}) {
    const c = this._ctx(id); if (!c) return;
    const { ctx, W, H } = c;
    const values = data.map(accessor);
    const minV = bounds.min !== undefined ? bounds.min : Math.min(...values) - 10;
    const maxV = bounds.max !== undefined ? bounds.max : Math.max(...values) + 10;
    const xStep = W / Math.max(data.length - 1, 1);
    const toY = v => H - 20 - ((v - minV) / (maxV - minV || 1)) * (H - 40);
    ctx.clearRect(0, 0, W, H);
    // Grid
    ctx.strokeStyle = '#1a1a24'; ctx.lineWidth = 1;
    [0, .25, .5, .75, 1].forEach(t => { const y = 20 + t * (H - 40); ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); });
    // Labels
    ctx.fillStyle = '#5a5a70'; ctx.font = '10px Inter';
    ctx.fillText(Math.round(maxV), 4, 18);
    ctx.fillText(Math.round(minV), 4, H - 6);
    // Gradient fill
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, color + '44'); grad.addColorStop(1, color + '00');
    ctx.beginPath();
    data.forEach((p, i) => { i === 0 ? ctx.moveTo(0, toY(accessor(p))) : ctx.lineTo(i * xStep, toY(accessor(p))); });
    ctx.lineTo((data.length - 1) * xStep, H); ctx.lineTo(0, H); ctx.closePath();
    ctx.fillStyle = grad; ctx.fill();
    // Line
    ctx.beginPath(); ctx.strokeStyle = color; ctx.lineWidth = 2;
    data.forEach((p, i) => { i === 0 ? ctx.moveTo(0, toY(accessor(p))) : ctx.lineTo(i * xStep, toY(accessor(p))); });
    ctx.stroke();
    // Dots
    ctx.fillStyle = color;
    data.forEach((p, i) => { ctx.beginPath(); ctx.arc(i * xStep, toY(accessor(p)), 3, 0, Math.PI*2); ctx.fill(); });
  },

  _drawReadinessChart(data) {
    const c = this._ctx('chart-readiness'); if (!c) return;
    const { ctx, W, H } = c;
    const pts = data.slice(-20);
    const xStep = W / Math.max(pts.length - 1, 1);
    const toY = v => H - 20 - (v / 100) * (H - 40);
    ctx.clearRect(0, 0, W, H);
    // Zone fills
    [{ y0: 0, y1: 40, c: 'rgba(239,68,68,.07)' }, { y0: 40, y1: 55, c: 'rgba(249,115,22,.07)' },
     { y0: 55, y1: 70, c: 'rgba(245,158,11,.07)' }, { y0: 70, y1: 85, c: 'rgba(79,142,247,.07)' },
     { y0: 85, y1: 100, c: 'rgba(16,185,129,.07)' }].forEach(z => {
      ctx.fillStyle = z.c;
      ctx.fillRect(0, toY(z.y1), W, toY(z.y0) - toY(z.y1));
    });
    // Zone lines
    [40, 55, 70, 85].forEach(lvl => {
      ctx.strokeStyle = '#1a1a24'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, toY(lvl)); ctx.lineTo(W, toY(lvl)); ctx.stroke();
    });
    // Labels
    ctx.fillStyle = '#5a5a70'; ctx.font = '10px Inter';
    ['Rest', 'Caution', 'Build', 'Good', 'Peak'].forEach((lbl, i) => {
      const lvls = [20, 47, 62, 77, 92];
      ctx.fillText(lbl, 4, toY(lvls[i]));
    });
    // Colored line segments
    pts.forEach((p, i) => {
      if (i === 0) return;
      ctx.beginPath(); ctx.strokeStyle = Readiness.stateColor(p.state); ctx.lineWidth = 2.5;
      ctx.moveTo((i-1)*xStep, toY(pts[i-1].score)); ctx.lineTo(i*xStep, toY(p.score)); ctx.stroke();
    });
    pts.forEach((p, i) => {
      ctx.beginPath(); ctx.fillStyle = Readiness.stateColor(p.state);
      ctx.arc(i*xStep, toY(p.score), 4, 0, Math.PI*2); ctx.fill();
    });
  },

  _drawBarChart(id, data, color, h = 160) {
    const c = this._ctx(id, h); if (!c) return;
    const { ctx, W, H } = c;
    const values = data.map(d => d.value);
    const maxV = Math.max(...values, 1);
    const barW = (W / data.length) * 0.6;
    const gap = (W / data.length) * 0.4;
    ctx.clearRect(0, 0, W, H);
    // Grid
    ctx.strokeStyle = '#1a1a24'; ctx.lineWidth = 1;
    [.25,.5,.75,1].forEach(t => { const y = 20 + (1-t)*(H-40); ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); });
    data.forEach((d, i) => {
      const x = i * (barW + gap) + gap / 2;
      const barH = (d.value / maxV) * (H - 50);
      // Bar
      const grad = ctx.createLinearGradient(0, H - 20 - barH, 0, H - 20);
      grad.addColorStop(0, color); grad.addColorStop(1, color + '66');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(x, H - 20 - barH, barW, barH, [4, 4, 0, 0]);
      ctx.fill();
      // Label
      ctx.fillStyle = '#5a5a70'; ctx.font = '10px Inter'; ctx.textAlign = 'center';
      ctx.fillText(d.label, x + barW/2, H - 4);
      if (d.value > 0) {
        ctx.fillStyle = '#ffffff'; ctx.font = '10px Inter';
        ctx.fillText(d.value, x + barW/2, H - 24 - barH);
      }
    });
    ctx.textAlign = 'left';
  },

  _drawComplianceChart(readinessHistory) {
    const days = this._last7Days();
    const data = days.map(d => {
      const r = readinessHistory.find(x => x.date === d);
      return { label: d.slice(5), value: r ? r.score : 0, state: r ? r.state : null };
    });
    const c = this._ctx('chart-compliance'); if (!c) return;
    const { ctx, W, H } = c;
    const barW = (W / data.length) * 0.55;
    const gap = (W / data.length) * 0.45;
    ctx.clearRect(0, 0, W, H);
    ctx.strokeStyle = '#1a1a24'; ctx.lineWidth = 1;
    [40, 55, 70, 85, 100].forEach(lvl => {
      const y = H - 20 - (lvl / 100) * (H - 40);
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    });
    data.forEach((d, i) => {
      const x = i * (barW + gap) + gap / 2;
      const barH = d.value > 0 ? (d.value / 100) * (H - 50) : 0;
      const color = d.state ? Readiness.stateColor(d.state) : '#252535';
      if (barH > 0) {
        const grad = ctx.createLinearGradient(0, H-20-barH, 0, H-20);
        grad.addColorStop(0, color); grad.addColorStop(1, color + '55');
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.roundRect(x, H-20-barH, barW, barH, [4,4,0,0]); ctx.fill();
        ctx.fillStyle = '#fff'; ctx.font = '10px Inter'; ctx.textAlign = 'center';
        ctx.fillText(d.value, x+barW/2, H-24-barH);
      } else {
        ctx.fillStyle = '#1a1a24';
        ctx.fillRect(x, H-24, barW, 4);
      }
      ctx.fillStyle = '#5a5a70'; ctx.font = '10px Inter'; ctx.textAlign = 'center';
      ctx.fillText(d.label, x+barW/2, H-4);
    });
    ctx.textAlign = 'left';
  },

  _drawPriorityChart(tasks) {
    // Use actual hours spent per priority, not completion count
    const priorities = ['P0','P1','P2','P3','P4','P5'];
    const colors = ['#ef4444','#f97316','#f59e0b','#10b981','#4f8ef7','#7c5cfc'];
    const data = priorities.map((p, i) => {
      const secs = tasks.filter(t => t.priority === p).reduce((s, t) => s + (t.timeSpentSeconds || 0), 0);
      const hrs = parseFloat((secs / 3600).toFixed(1));
      return { label: p, value: hrs, color: colors[i] };
    });
    const c = this._ctx('chart-priority', 140); if (!c) return;
    const { ctx, W, H } = c;
    const maxV = Math.max(...data.map(d => d.value), 0.5);
    const barW = (W / data.length) * 0.6;
    const gap  = (W / data.length) * 0.4;
    ctx.clearRect(0, 0, W, H);
    // Grid lines
    ctx.strokeStyle = '#1a1a24'; ctx.lineWidth = 1;
    [0.5, 1].forEach(t => {
      const y = 20 + (1 - t) * (H - 40);
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    });
    // Max label
    ctx.fillStyle = '#5a5a70'; ctx.font = '10px Inter'; ctx.textAlign = 'left';
    ctx.fillText(`${maxV}h`, 2, 16);
    data.forEach((d, i) => {
      const x = i * (barW + gap) + gap / 2;
      const barH = d.value > 0 ? Math.max((d.value / maxV) * (H - 50), 4) : 0;
      if (barH > 0) {
        const grad = ctx.createLinearGradient(0, H - 20 - barH, 0, H - 20);
        grad.addColorStop(0, d.color); grad.addColorStop(1, d.color + '55');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, H - 20 - barH, barW, barH, [4, 4, 0, 0]);
        ctx.fill();
        // Value label above bar
        ctx.fillStyle = '#fff'; ctx.font = '9px Inter'; ctx.textAlign = 'center';
        const label = d.value >= 1 ? `${d.value}h` : `${Math.round(d.value * 60)}m`;
        ctx.fillText(label, x + barW / 2, H - 23 - barH);
      } else {
        ctx.fillStyle = '#1a1a24';
        ctx.fillRect(x, H - 24, barW, 4);
      }
      ctx.fillStyle = '#5a5a70'; ctx.font = '10px Inter'; ctx.textAlign = 'center';
      ctx.fillText(d.label, x + barW / 2, H - 4);
    });
    ctx.textAlign = 'left';
  },

  _exportDossier() {
    const profile = Account.get() || {};
    const pvtHistory = DB.get('pvt_history', []);
    const readinessHistory = DB.get('readiness_history', []);
    const tasks = DB.get('tasks', []);
    const avgPVT = pvtHistory.length ? Math.round(pvtHistory.reduce((a,b) => a+b.avgMs,0)/pvtHistory.length) : 'N/A';
    const peakDays = readinessHistory.filter(r => r.state === 'Peak').length;
    const html = `<!DOCTYPE html><html><head><title>RCAF Performance Dossier — ${profile.name||'Candidate'}</title>
<style>body{font-family:Georgia,serif;max-width:720px;margin:40px auto;padding:0 20px;color:#111}
h1{font-size:28px;border-bottom:3px solid #000;padding-bottom:12px}
h2{font-size:18px;margin-top:32px;border-bottom:1px solid #ccc;padding-bottom:8px}
table{width:100%;border-collapse:collapse;margin:16px 0}td,th{border:1px solid #ddd;padding:10px;font-size:14px}
th{background:#f5f5f5;font-weight:bold}.footer{margin-top:48px;font-size:12px;color:#888;border-top:1px solid #eee;padding-top:12px}
</style></head><body>
<h1>✈️ RCAF Application Performance Dossier</h1>
<p><strong>Candidate:</strong> ${profile.name||'—'} &nbsp; <strong>Location:</strong> ${profile.location||'—'} &nbsp; <strong>Age:</strong> ${profile.age||'—'}</p>
<p><strong>Target:</strong> RCAF ${profile.rcafYear||2031} &nbsp; <strong>Generated:</strong> ${new Date().toLocaleDateString()}</p>
<h2>CNS Performance — PVT Longitudinal Data</h2>
<table><tr><th>Date</th><th>Avg RT (ms)</th><th>Lapses</th><th>False Starts</th></tr>
${pvtHistory.map(s=>`<tr><td>${s.date}</td><td>${s.avgMs}</td><td>${s.lapses}</td><td>${s.falseStarts}</td></tr>`).join('')||'<tr><td colspan="4">No data</td></tr>'}
</table><p><strong>Overall Avg RT:</strong> ${avgPVT} ms</p>
<h2>Readiness Score Log</h2>
<table><tr><th>Date</th><th>Score</th><th>State</th><th>Directive</th></tr>
${readinessHistory.map(r=>`<tr><td>${r.date}</td><td>${r.score}</td><td>${r.state}</td><td>${Readiness.directive(r.state).training}</td></tr>`).join('')||'<tr><td colspan="4">No data</td></tr>'}
</table><p><strong>Peak Performance Days:</strong> ${peakDays}</p>
<h2>Task Stack (All Tasks)</h2>
<table><tr><th>Task</th><th>Priority</th><th>Category</th><th>Aimed Time</th><th>Due</th></tr>
${tasks.map(t=>`<tr><td>${t.name}</td><td>${t.priority}</td><td>${t.category||'—'}</td><td>${t.aimedMinutes?t.aimedMinutes+'m':'—'}</td><td>${t.dueDate||'—'}</td></tr>`).join('')||'<tr><td colspan="5">No tasks</td></tr>'}
</table>
<div class="footer">Generated by Performance OS · ${profile.name||'Candidate'} · All data collected locally on personal device.</div>
</body></html>`;
    const win = window.open('', '_blank');
    win.document.write(html); win.document.close(); win.print();
    App.toast('Dossier opened for printing / PDF save', 'success');
  }
};
