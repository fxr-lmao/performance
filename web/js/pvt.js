// pvt.js — Psychomotor Vigilance Test

const PVT = {
  _state: 'idle',     // idle | countdown | waiting | ready | result | done
  _trials: [],
  _lapses: 0,
  _falseStarts: 0,
  _stimulusTimer: null,
  _stimulusStart: null,
  _countdownTimer: null,
  _testTimer: null,
  _maxTrials: 10,
  _waitMin: 2000,
  _waitMax: 8000,
  mode: 'visual',
  _audioCtx: null,

  reset() {
    clearTimeout(this._stimulusTimer);
    clearTimeout(this._countdownTimer);
    clearTimeout(this._testTimer);
    this._state = 'idle';
    this._trials = [];
    this._lapses = 0;
    this._falseStarts = 0;
    this._stimulusStart = null;
  },

  setMode(m) {
    if (this._state !== 'idle') return;
    this.mode = m;
    const isFR = App._lang === 'fr';
    const vBtn = document.getElementById('mode-visual');
    const aBtn = document.getElementById('mode-audio');
    if (vBtn && aBtn) {
      vBtn.className = m === 'visual' ? 'btn btn-primary' : 'btn btn-ghost';
      aBtn.className = m === 'audio' ? 'btn btn-primary' : 'btn btn-ghost';
    }
    const sub = document.getElementById('pvt-circle-sub');
    if (sub) sub.textContent = m === 'visual' 
      ? (isFR ? 'Appuyez quand le cercle devient vert' : 'Tap when the circle turns green') 
      : (isFR ? 'Appuyez quand vous entendez le bip' : 'Tap when you hear the beep');
  },

  _playBeep() {
    if (!this._audioCtx) this._audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (this._audioCtx.state === 'suspended') this._audioCtx.resume();
    const osc = this._audioCtx.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(800, this._audioCtx.currentTime);
    osc.connect(this._audioCtx.destination);
    osc.start();
    setTimeout(() => osc.stop(), 100);
  },

  render() {
    const isFR = App._lang === 'fr';
    return `
    <div class="page-header">
      <div class="page-title">${App.t('pvt_test')}</div>
      <div class="page-sub">${isFR ? 'Test de vigilance psychomotrice · Diagnostic SNC 10 essais' : 'Psychomotor Vigilance Test · 10-trial CNS diagnostic'}</div>
    </div>
    
    <div style="display:flex;gap:12px;margin-bottom:24px;justify-content:center">
      <button id="mode-visual" class="btn btn-primary" onclick="PVT.setMode('visual')">👁️ ${isFR ? 'Test Visuel' : 'Visual Test'}</button>
      <button id="mode-audio" class="btn btn-ghost" onclick="PVT.setMode('audio')">🎧 ${isFR ? 'Test Auditif' : 'Auditory Test'}</button>
    </div>

    <div class="pvt-arena">
      <div class="pvt-circle waiting" id="pvt-circle" onclick="PVT._tap()">
        <div class="pvt-circle-text" id="pvt-circle-text">${isFR ? 'TAPPER POUR COMMENCER' : 'TAP TO BEGIN'}</div>
        <div class="pvt-circle-sub" id="pvt-circle-sub">${isFR ? 'Appuyez quand le cercle devient vert' : 'Tap when the circle turns green'}</div>
      </div>

      <div style="width:100%">
        <div class="card-title">${isFR ? 'Progression des Essais' : 'Trial Progress'}</div>
        <div class="progress-bar-bg"><div class="progress-bar-fill" id="pvt-progress" style="width:0%"></div></div>
        <div style="display:flex;justify-content:space-between;margin-top:8px">
          <span style="font-size:12px;color:var(--text3)" id="pvt-trial-count">0 / 10 ${isFR ? 'essais' : 'trials'}</span>
          <span style="font-size:12px;color:var(--text3)" id="pvt-last-rt">—</span>
        </div>
      </div>

      <div class="pvt-results-grid" id="pvt-results-grid" style="display:none">
        <div class="stat-box"><div class="stat-label">${App.t('avg_rt')}</div><div class="stat-value" id="pvt-avg">—</div><div class="stat-unit">ms</div></div>
        <div class="stat-box"><div class="stat-label">${App.t('lapses')}</div><div class="stat-value" id="pvt-lapses">—</div><div class="stat-unit">&gt;500ms</div></div>
        <div class="stat-box"><div class="stat-label">${App.t('false_starts')}</div><div class="stat-value" id="pvt-false">—</div><div class="stat-unit">${isFR ? 'prématuré' : 'premature'}</div></div>
      </div>

      <button class="btn btn-primary" id="pvt-next-btn" style="display:none" onclick="PVT._finish()">
        ${isFR ? 'Calculer l\'État →' : 'Calculate Readiness →'}
      </button>
    </div>`;
  },

  afterRender() {
    this.reset();
    this.setMode(this.mode);
  },

  _tap() {
    if (this._state === 'idle') { this._startTest(); return; }
    if (this._state === 'waiting') { this._falseStart(); return; }
    if (this._state === 'ready') { this._recordRT(); return; }
    if (this._state === 'result') { this._nextTrial(); return; }
  },

  _startTest() {
    this._state = 'countdown';
    let c = 3;
    const isFR = App._lang === 'fr';
    this._setCircle('waiting', `${c}`, isFR ? 'Préparez-vous…' : 'Get ready…');
    this._countdownTimer = setInterval(() => {
      c--;
      if (c <= 0) {
        clearInterval(this._countdownTimer);
        this._nextTrial();
      } else {
        this._setCircle('waiting', `${c}`, isFR ? 'Préparez-vous…' : 'Get ready…');
      }
    }, 1000);
  },

  _nextTrial() {
    if (this._trials.length >= this._maxTrials) { this._showFinalResults(); return; }
    this._state = 'waiting';
    const isFR = App._lang === 'fr';
    this._setCircle('waiting', isFR ? 'ATTENDEZ' : 'WAIT', isFR ? 'Ne tappez pas encore…' : 'Do not tap yet…');
    const delay = this._waitMin + Math.random() * (this._waitMax - this._waitMin);
    this._stimulusTimer = setTimeout(() => {
      if (this._state !== 'waiting') return;
      this._state = 'ready';
      this._stimulusStart = performance.now();
      if (this.mode === 'visual') {
        this._setCircle('ready', isFR ? 'TAP!' : 'TAP!', isFR ? 'Tappez maintenant!' : 'Tap now!');
      } else {
        this._setCircle('ready', 'BEEP!', isFR ? 'Tappez maintenant!' : 'Tap now!');
        document.getElementById('pvt-circle').style.borderColor = 'var(--accent)';
        this._playBeep();
      }
      this._testTimer = setTimeout(() => {
        if (this._state === 'ready') { this._recordLapse(); }
      }, 2000);
    }, delay);
  },

  _falseStart() {
    this._falseStarts++;
    clearTimeout(this._stimulusTimer);
    this._state = 'result';
    const isFR = App._lang === 'fr';
    this._setCircle('too-early', isFR ? '⚡ Tôt!' : '⚡ Early!', isFR ? 'Attendez le vert' : 'Wait for green');
    setTimeout(() => this._nextTrial(), 1200);
  },

  _recordRT() {
    clearTimeout(this._testTimer);
    const rt = Math.round(performance.now() - this._stimulusStart);
    this._trials.push(rt);
    const isFR = App._lang === 'fr';
    if (rt > 500) this._lapses++;
    this._state = 'result';
    const color = rt < 250 ? 'var(--green)' : rt < 350 ? 'var(--yellow)' : 'var(--red)';
    const el = document.getElementById('pvt-circle');
    el.className = 'pvt-circle result';
    el.style.borderColor = color;
    document.getElementById('pvt-circle-text').innerHTML = `<span style="font-size:48px;font-weight:900;color:${color}">${rt}</span>`;
    document.getElementById('pvt-circle-sub').textContent = isFR ? 'ms · tapper pour continuer' : 'ms · tap to continue';
    document.getElementById('pvt-last-rt').textContent = `${isFR ? 'Dernier' : 'Last'}: ${rt} ms`;
    const n = this._trials.length;
    document.getElementById('pvt-trial-count').textContent = `${n} / ${this._maxTrials} ${isFR ? 'essais' : 'trials'}`;
    document.getElementById('pvt-progress').style.width = `${(n / this._maxTrials) * 100}%`;
    if (n >= this._maxTrials) {
      setTimeout(() => this._showFinalResults(), 800);
    }
  },

  _recordLapse() {
    this._lapses++;
    this._trials.push(500);
    this._state = 'result';
    this._setCircle('too-early', 'LAPSE', '> 500ms');
    setTimeout(() => this._nextTrial(), 1000);
  },

  _showFinalResults() {
    this._state = 'done';
    const avg = Math.round(this._trials.reduce((a, b) => a + b, 0) / this._trials.length);
    const isFR = App._lang === 'fr';
    this._setCircle('ready', `${avg}ms`, isFR ? 'Temps de réaction moyen' : 'Avg Reaction Time');
    document.getElementById('pvt-results-grid').style.display = 'grid';
    document.getElementById('pvt-avg').textContent = avg;
    document.getElementById('pvt-lapses').textContent = this._lapses;
    document.getElementById('pvt-false').textContent = this._falseStarts;
    document.getElementById('pvt-next-btn').style.display = 'inline-flex';
    this._lastResult = { avgMs: avg, lapses: this._lapses, falseStarts: this._falseStarts };
  },

  _finish() {
    const r = this._lastResult;
    if (!r) return;
    DB.push('pvt_history', { date: DB.today(), mode: this.mode, ...r, timestamp: Date.now() });
    DB.addXP(100, `PVT Diagnostic (${this.mode})`);
    App.navigate('briefing', { pvtResult: r });
  },

  _setCircle(cls, text, sub) {
    const el = document.getElementById('pvt-circle');
    if (!el) return;
    el.className = `pvt-circle ${cls}`;
    el.style.borderColor = '';
    document.getElementById('pvt-circle-text').textContent = text;
    document.getElementById('pvt-circle-sub').textContent = sub;
  }
};
