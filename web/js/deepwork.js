// deepwork.js — Deep Work Timer (configurable duration + custom blocks)

const DeepWork = {
  get TOTAL() { return this._getConfig().totalSeconds; },

  _running: false,
  _remaining: null,
  _interval: null,

  // Audio state
  _audioCtx: null,
  _noiseNode: null,
  _gainNode: null,
  _noiseType: 'brown',
  _noisePlaying: false,
  _volume: 0.5,

  _getConfig() {
    const cfg = DB.get('deepwork_config', {
      totalMinutes: 170,
      blocks: [
        { name: 'CÉGEP – Sciences', duration: 90, color: '#4f8ef7' },
        { name: 'Cadet Theory', duration: 50, color: '#7c5cfc' },
        { name: 'Chess Calculation', duration: 30, color: '#10b981' },
      ]
    });
    cfg.totalSeconds = cfg.totalMinutes * 60;
    return cfg;
  },

  _persistConfig(cfg) {
    const { totalSeconds, ...toSave } = cfg;
    DB.set('deepwork_config', toSave);
  },

  reset() {
    clearInterval(this._interval);
    this._remaining = null;
    this._running = false;
  },

  render() {
    const cfg = this._getConfig();
    if (this._remaining === null) this._remaining = cfg.totalSeconds;
    const blocks = cfg.blocks;
    const h = Math.floor(cfg.totalMinutes / 60);
    const m = cfg.totalMinutes % 60;
    const timeLabel = `${h > 0 ? h + 'h ' : ''}${m > 0 ? m + 'm' : ''}`;

    return `
    <div class="page-header" style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px">
      <div>
        <div class="page-title">Deep <span>Work</span></div>
        <div class="page-sub">${timeLabel} focus block · ${blocks.length} phases</div>
      </div>
      <button class="btn btn-ghost" onclick="DeepWork._openConfig()">⚙️ Configure</button>
    </div>

    <div style="display:flex;gap:40px;flex-wrap:wrap;align-items:flex-start">
      <!-- Timer -->
      <div style="flex:0 0 320px;display:flex;flex-direction:column;align-items:center;gap:24px">
        <div class="timer-display" id="dw-timer-wrap" style="position:relative;width:300px;height:300px;display:flex;align-items:center;justify-content:center">
          <svg width="300" height="300" viewBox="0 0 300 300" style="position:absolute;top:0;left:0;transform:rotate(-90deg)">
            <circle cx="150" cy="150" r="136" fill="none" stroke="var(--bg3)" stroke-width="8"/>
            <circle id="dw-ring" cx="150" cy="150" r="136" fill="none"
              stroke="url(#dwGrad)" stroke-width="8" stroke-linecap="round"
              stroke-dasharray="854.5" stroke-dashoffset="0"
              style="transition:stroke-dashoffset .5s linear"/>
            <defs>
              <linearGradient id="dwGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#4f8ef7"/>
                <stop offset="100%" stop-color="#7c5cfc"/>
              </linearGradient>
            </defs>
          </svg>
          <div style="text-align:center;z-index:1">
            <div class="timer-time" id="dw-time">--:--:--</div>
            <div class="timer-task" id="dw-task" style="font-size:12px;letter-spacing:2px;color:var(--accent);text-transform:uppercase;margin-top:6px">Ready</div>
          </div>
        </div>

        <div style="display:flex;gap:12px">
          <button class="btn btn-primary btn-lg" id="dw-toggle-btn" onclick="DeepWork._toggle()">ENGAGE</button>
          <button class="btn btn-ghost" onclick="DeepWork.reset();DeepWork._remaining=DeepWork._getConfig().totalSeconds;DeepWork._render()" title="Reset">↺</button>
        </div>

        <div style="width:100%">
          <div class="progress-bar-bg"><div class="progress-bar-fill" id="dw-progress" style="width:0%"></div></div>
          <div style="display:flex;justify-content:space-between;margin-top:6px">
            <span style="font-size:11px;color:var(--text3)" id="dw-pct">0% complete</span>
            <span style="font-size:11px;color:var(--text3)" id="dw-elapsed">0:00 elapsed</span>
          </div>
        </div>
      </div>

      <!-- Blocks + Log -->
      <div style="flex:1;min-width:260px;display:flex;flex-direction:column;gap:16px">
        <div>
          <div class="card-title">Phase Blocks</div>
          ${blocks.map((b, i) => `
          <div class="task-block" id="dw-block-${i}" style="margin-bottom:8px">
            <div class="task-block-dot" style="background:${b.color}"></div>
            <div style="flex:1">
              <div class="task-block-name">${b.name}</div>
              <div style="font-size:12px;color:var(--text3);margin-top:2px">${b.duration} min</div>
            </div>
            <div class="task-block-dur">${b.duration}m</div>
          </div>`).join('')}
        </div>

        <div class="card">
          <div class="card-title">Session Log</div>
          <div id="dw-log" style="font-family:var(--mono);font-size:12px;color:var(--text3);line-height:2;max-height:160px;overflow-y:auto">
            <span>» Ready. Press ENGAGE to start your session.</span>
          </div>
        </div>
        
        <!-- Audio Panel -->
        <div class="audio-panel">
          <div class="audio-header">
            <div class="audio-title"><span style="display:${DeepWork._noisePlaying ? 'inline-block' : 'none'}" id="audio-pulse"></span> Cognitive Audio</div>
            <button class="btn btn-ghost" style="padding:4px 8px;font-size:11px" onclick="DeepWork.toggleNoise()" id="noise-toggle-btn">
              ${DeepWork._noisePlaying ? '■ STOP' : '▶ START'}
            </button>
          </div>
          <div class="audio-controls">
            <div style="display:flex;gap:4px">
              <button class="noise-btn ${DeepWork._noiseType==='white'?'active':''}" onclick="DeepWork.setNoiseType('white')" id="nb-white">White</button>
              <button class="noise-btn ${DeepWork._noiseType==='pink'?'active':''}" onclick="DeepWork.setNoiseType('pink')" id="nb-pink">Pink</button>
              <button class="noise-btn ${DeepWork._noiseType==='brown'?'active':''}" onclick="DeepWork.setNoiseType('brown')" id="nb-brown">Brown</button>
            </div>
            <div style="flex:1;display:flex;align-items:center;gap:8px;justify-content:flex-end">
              <span style="font-size:12px;color:var(--text3)">Vol</span>
              <input type="range" class="vol-slider" min="0" max="100" value="${DeepWork._volume * 100}" oninput="DeepWork.setVolume(this.value)" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Config Modal -->
    <div id="dw-config-modal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:200;align-items:center;justify-content:center">
      <div style="background:var(--bg1);border:1px solid var(--border);border-radius:16px;padding:32px;width:100%;max-width:520px;max-height:90vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px">
          <div style="font-size:18px;font-weight:800">Configure Session</div>
          <button onclick="DeepWork._closeConfig()" style="background:none;border:none;color:var(--text3);font-size:20px;cursor:pointer">✕</button>
        </div>

        <div class="form-group">
          <label class="form-label">Total Session Duration (minutes)</label>
          <input id="cfg-total" class="form-input" type="number" min="10" max="480" placeholder="170" />
        </div>

        <div class="divider"></div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
          <div class="card-title" style="margin:0">Phase Blocks</div>
          <button class="btn btn-ghost" style="padding:6px 12px;font-size:12px" onclick="DeepWork._addBlock()">+ Add Block</button>
        </div>
        <div id="cfg-blocks-list"></div>

        <div style="display:flex;gap:10px;margin-top:20px">
          <button class="btn btn-primary" style="flex:1" onclick="DeepWork._saveConfig()">Save Configuration</button>
          <button class="btn btn-ghost" onclick="DeepWork._closeConfig()">Cancel</button>
        </div>
      </div>
    </div>`;
  },

  afterRender() {
    if (this._remaining === null) this._remaining = this._getConfig().totalSeconds;
    this._render();
  },

  _toggle() {
    this._running = !this._running;
    const btn = document.getElementById('dw-toggle-btn');
    btn.textContent = this._running ? 'PAUSE' : 'RESUME';
    btn.className = `btn btn-lg ${this._running ? 'btn-danger' : 'btn-primary'}`;
    if (this._running) {
      this._log('Session started.');
      this._interval = setInterval(() => {
        this._remaining = Math.max(0, this._remaining - 1);
        this._render();
        if (this._remaining === 0) this._complete();
      }, 1000);
    } else {
      clearInterval(this._interval);
      this._log('Paused.');
    }
  },

  _render() {
    const cfg = this._getConfig();
    const elapsed = cfg.totalSeconds - this._remaining;
    const m = Math.floor(this._remaining / 60);
    const s = this._remaining % 60;
    const h = Math.floor(m / 60);
    document.getElementById('dw-time').textContent =
      `${String(h).padStart(2,'0')}:${String(m%60).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

    const circumference = 854.5;
    const ring = document.getElementById('dw-ring');
    if (ring) ring.setAttribute('stroke-dashoffset', (circumference * (this._remaining / cfg.totalSeconds)).toFixed(1));

    const pct = Math.round((elapsed / cfg.totalSeconds) * 100);
    const pbar = document.getElementById('dw-progress');
    if (pbar) pbar.style.width = `${pct}%`;
    document.getElementById('dw-pct').textContent = `${pct}% complete`;
    const eMin = Math.floor(elapsed / 60);
    document.getElementById('dw-elapsed').textContent = `${Math.floor(eMin/60)}h ${eMin%60}m elapsed`;

    // Active block
    const elapsedMin = Math.floor(elapsed / 60);
    let activeIdx = 0, cum = 0;
    for (let i = 0; i < cfg.blocks.length; i++) {
      if (elapsedMin < cum + cfg.blocks[i].duration) { activeIdx = i; break; }
      cum += cfg.blocks[i].duration;
      activeIdx = i;
    }
    const taskEl = document.getElementById('dw-task');
    if (taskEl) taskEl.textContent = elapsed > 0 ? cfg.blocks[activeIdx].name : 'Ready';
    cfg.blocks.forEach((_, i) => {
      const el = document.getElementById(`dw-block-${i}`);
      if (el) el.className = `task-block${i === activeIdx && elapsed > 0 ? ' active-block' : ''}`;
    });
  },

  _log(msg) {
    const log = document.getElementById('dw-log');
    if (!log) return;
    const now = new Date().toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit' });
    log.innerHTML += `<br/><span style="color:var(--accent)">[${now}]</span> ${msg}`;
    log.scrollTop = log.scrollHeight;
  },

  _complete() {
    clearInterval(this._interval);
    this._running = false;
    const cfg = this._getConfig();
    if (cfg.totalMinutes > 0) {
      const mins = cfg.totalMinutes;
      DB.push('deepwork_log', { date: DB.today(), minutes: mins, timestamp: Date.now() });
      DB.addXP(mins * 2, `Deep Work (${mins}m)`);
      App.toast(`Logged ${mins} minutes of Deep Work`, 'success');
    }
    const btn = document.getElementById('dw-toggle-btn');
    btn.textContent = 'VIEW PILOT LOG';
    btn.className = 'btn btn-primary btn-lg';
    btn.onclick = () => App.navigate('dashboard');
    App.toast('Deep Work session complete!', 'success');
  },

  // ── Audio Generator ──
  toggleNoise() {
    if (this._noisePlaying) this.stopNoise();
    else this.startNoise();
  },

  startNoise() {
    if (!this._audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this._audioCtx = new AudioContext();
    }
    if (this._audioCtx.state === 'suspended') this._audioCtx.resume();
    
    this.stopNoise(); // clean up if existing
    
    const bufferSize = 2 * this._audioCtx.sampleRate;
    const noiseBuffer = this._audioCtx.createBuffer(1, bufferSize, this._audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    
    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      let white = Math.random() * 2 - 1;
      if (this._noiseType === 'brown') {
        output[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5; 
      } else if (this._noiseType === 'pink') {
        output[i] = white * 0.1; // simplified pink-ish (low-pass approximation in full would be more complex, but standard white is fine)
        // using simple 1-pole filter
        output[i] = (lastOut * 0.9) + (white * 0.1);
        lastOut = output[i];
        output[i] *= 2.5;
      } else {
        output[i] = white * 0.2; // white
      }
    }

    this._noiseNode = this._audioCtx.createBufferSource();
    this._noiseNode.buffer = noiseBuffer;
    this._noiseNode.loop = true;

    this._gainNode = this._audioCtx.createGain();
    this._gainNode.gain.value = this._volume;

    this._noiseNode.connect(this._gainNode);
    this._gainNode.connect(this._audioCtx.destination);
    this._noiseNode.start(0);
    this._noisePlaying = true;
    this._updateAudioUI();
  },

  stopNoise() {
    if (this._noiseNode) {
      this._noiseNode.stop();
      this._noiseNode.disconnect();
      this._noiseNode = null;
    }
    this._noisePlaying = false;
    this._updateAudioUI();
  },

  setNoiseType(type) {
    this._noiseType = type;
    ['white','pink','brown'].forEach(t => {
      const el = document.getElementById('nb-' + t);
      if (el) el.className = `noise-btn ${t === type ? 'active' : ''}`;
    });
    if (this._noisePlaying) this.startNoise();
  },

  setVolume(val) {
    this._volume = val / 100;
    if (this._gainNode) {
      this._gainNode.gain.setValueAtTime(this._volume, this._audioCtx.currentTime);
    }
  },

  _updateAudioUI() {
    const btn = document.getElementById('noise-toggle-btn');
    if (btn) btn.textContent = this._noisePlaying ? '■ STOP' : '▶ START';
    const pulse = document.getElementById('audio-pulse');
    if (pulse) pulse.style.display = this._noisePlaying ? 'inline-block' : 'none';
  },

  // ── Config Modal ──
  _openConfig() {
    const cfg = this._getConfig();
    document.getElementById('cfg-total').value = cfg.totalMinutes;
    this._renderBlocksList(cfg.blocks);
    document.getElementById('dw-config-modal').style.display = 'flex';
  },

  _closeConfig() {
    document.getElementById('dw-config-modal').style.display = 'none';
  },

  _renderBlocksList(blocks) {
    const container = document.getElementById('cfg-blocks-list');
    container.innerHTML = blocks.map((b, i) => `
    <div style="display:flex;gap:8px;margin-bottom:8px;align-items:center" id="cfg-block-${i}">
      <input class="form-input" placeholder="Block name" value="${b.name}" id="cfgbn-${i}" style="flex:2" />
      <input class="form-input" type="number" placeholder="min" value="${b.duration}" id="cfgbd-${i}" style="flex:0 0 70px" min="5" max="300" />
      <input type="color" value="${b.color}" id="cfgbc-${i}" style="width:40px;height:40px;border:none;border-radius:6px;background:none;cursor:pointer;padding:0" />
      <button onclick="DeepWork._removeBlock(${i})" style="background:none;border:none;color:var(--red);cursor:pointer;font-size:18px;padding:4px">×</button>
    </div>`).join('');
    this._currentBlocks = blocks.map(b => ({ ...b }));
  },

  _addBlock() {
    const cfg = this._getConfig();
    const blocks = [...cfg.blocks, { name: 'New Block', duration: 30, color: '#10b981' }];
    this._renderBlocksList(blocks);
    this._currentBlocks = blocks;
  },

  _removeBlock(idx) {
    this._currentBlocks.splice(idx, 1);
    this._renderBlocksList(this._currentBlocks);
  },

  _saveConfig() {
    const totalMinutes = parseInt(document.getElementById('cfg-total').value);
    if (!totalMinutes || totalMinutes < 10) { App.toast('Invalid duration', 'error'); return; }
    const blocks = [];
    let i = 0;
    while (document.getElementById(`cfgbn-${i}`)) {
      blocks.push({
        name: document.getElementById(`cfgbn-${i}`).value || 'Block',
        duration: parseInt(document.getElementById(`cfgbd-${i}`).value) || 30,
        color: document.getElementById(`cfgbc-${i}`).value,
      });
      i++;
    }
    if (blocks.length === 0) { App.toast('At least one block required', 'error'); return; }
    this._persistConfig({ totalMinutes, blocks });
    this._remaining = totalMinutes * 60;
    this._closeConfig();
    App.toast('Session configured', 'success');
    App.navigate('deepwork');
  }
};
