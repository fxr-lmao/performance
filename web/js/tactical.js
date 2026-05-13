// tactical.js — Tactical OS & Cognitive Edge

const Tactical = {
  SOP_LIST: [
    "Engine Failure on Takeoff",
    "Radio Comms Loss",
    "In-Flight Fire Protocol",
    "Unanticipated IMC (Instrument Meteorological Conditions)",
    "Spin Recovery (PARE)",
    "Emergency Descent Protocol",
    "Bird Strike on Final"
  ],
  
  _mathTimer: null,
  _mathStartTime: null,
  _mathQuestions: [],
  _currentMathIndex: 0,
  
  initMath() {
    this._mathQuestions = [];
    for (let i = 0; i < 5; i++) {
      const isMult = Math.random() > 0.5;
      if (isMult) {
        const a = Math.floor(Math.random() * 8) + 2;
        const b = Math.floor(Math.random() * 89) + 10;
        this._mathQuestions.push({ q: `${a} × ${b}`, a: a * b });
      } else {
        const a = Math.floor(Math.random() * 899) + 100;
        const b = Math.floor(Math.random() * 899) + 100;
        const op = Math.random() > 0.5 ? '+' : '-';
        if (op === '+') {
          this._mathQuestions.push({ q: `${a} + ${b}`, a: a + b });
        } else {
          const max = Math.max(a, b);
          const min = Math.min(a, b);
          this._mathQuestions.push({ q: `${max} - ${min}`, a: max - min });
        }
      }
    }
    this._currentMathIndex = 0;
    this._mathStartTime = Date.now();
    this._renderMathQ();
    this._mathTimer = setInterval(() => {
      const elapsed = ((Date.now() - this._mathStartTime) / 1000).toFixed(1);
      const el = document.getElementById('math-timer');
      if (el) el.textContent = `${elapsed}s`;
    }, 100);
  },

  _renderMathQ() {
    const q = this._mathQuestions[this._currentMathIndex];
    const html = `
      <div style="font-size:32px;font-weight:800;margin-bottom:16px;text-align:center">${q.q} = ?</div>
      <input type="number" id="math-input" class="form-input" style="font-size:24px;text-align:center" autofocus onkeyup="if(event.key==='Enter') Tactical._checkMath()">
      <div style="display:flex;justify-content:space-between;margin-top:16px">
        <span style="font-size:12px;color:var(--text3)">Q: ${this._currentMathIndex + 1} / 5</span>
        <span style="font-size:12px;color:var(--text3)" id="math-timer">0.0s</span>
      </div>
    `;
    document.getElementById('math-container').innerHTML = html;
    setTimeout(() => document.getElementById('math-input')?.focus(), 50);
  },

  _checkMath() {
    const input = document.getElementById('math-input').value;
    if (!input) return;
    const q = this._mathQuestions[this._currentMathIndex];
    if (parseInt(input) === q.a) {
      this._currentMathIndex++;
      if (this._currentMathIndex >= 5) {
        clearInterval(this._mathTimer);
        const elapsed = ((Date.now() - this._mathStartTime) / 1000).toFixed(1);
        document.getElementById('math-container').innerHTML = `
          <div style="text-align:center">
            <div style="font-size:48px;margin-bottom:8px">🧠</div>
            <div style="font-size:24px;font-weight:700;color:var(--green)">Passed!</div>
            <div style="font-size:14px;color:var(--text2);margin-top:8px">Time: ${elapsed}s</div>
            <button class="btn btn-ghost" style="margin-top:16px" onclick="Tactical.initMath()">Retry</button>
          </div>
        `;
        DB.push('math_history', { date: DB.today(), time: parseFloat(elapsed), timestamp: Date.now() });
        DB.addXP(50, 'Math Drill');
      } else {
        this._renderMathQ();
      }
    } else {
      document.getElementById('math-input').style.borderColor = 'var(--red)';
      setTimeout(() => { if (document.getElementById('math-input')) document.getElementById('math-input').style.borderColor = 'var(--border)'; }, 300);
    }
  },

  // NEW TEST: Digit Span Recall
  _digitSequence: '',
  startDigitSpan() {
    this._digitSequence = Array.from({length: 6}, () => Math.floor(Math.random() * 10)).join('');
    document.getElementById('digit-container').innerHTML = `
      <div style="font-size:48px;font-weight:900;letter-spacing:8px;text-align:center;color:var(--accent)">${this._digitSequence}</div>
      <div style="text-align:center;color:var(--text3);margin-top:16px">Memorize this sequence (2.5s)</div>
    `;
    setTimeout(() => {
      document.getElementById('digit-container').innerHTML = `
        <div style="font-size:18px;font-weight:700;margin-bottom:16px;text-align:center">Enter the sequence</div>
        <input type="number" id="digit-input" class="form-input" style="font-size:24px;letter-spacing:8px;text-align:center" autofocus onkeyup="if(event.key==='Enter') Tactical.checkDigitSpan()">
      `;
      setTimeout(() => document.getElementById('digit-input')?.focus(), 50);
    }, 2500);
  },

  checkDigitSpan() {
    const input = document.getElementById('digit-input').value;
    if (input === this._digitSequence) {
      document.getElementById('digit-container').innerHTML = `
        <div style="text-align:center">
          <div style="font-size:48px;margin-bottom:8px">👁️</div>
          <div style="font-size:24px;font-weight:700;color:var(--green)">Perfect Recall!</div>
          <button class="btn btn-ghost" style="margin-top:16px" onclick="Tactical.startDigitSpan()">Retry</button>
        </div>
      `;
      DB.push('digit_history', { date: DB.today(), passed: 1, length: this._digitSequence.length, timestamp: Date.now() });
      DB.addXP(75, 'Memory Drill');
    } else {
      document.getElementById('digit-input').style.borderColor = 'var(--red)';
      App.toast(`Failed. Sequence was: ${this._digitSequence}`, 'error');
      setTimeout(() => { this.startDigitSpan(); }, 2000);
      DB.push('digit_history', { date: DB.today(), passed: 0, length: this._digitSequence.length, timestamp: Date.now() });
    }
  },

  rollSOP() {
    const sop = this.SOP_LIST[Math.floor(Math.random() * this.SOP_LIST.length)];
    document.getElementById('sop-display').innerHTML = `
      <div style="font-size:18px;font-weight:700;color:var(--accent);margin-bottom:16px;text-align:center">${sop}</div>
      <div style="display:flex;gap:12px;justify-content:center">
        <button class="btn btn-primary" onclick="Tactical.logSOP('${sop}', 'pass')">Passed</button>
        <button class="btn btn-danger" onclick="Tactical.logSOP('${sop}', 'fail')">Failed</button>
      </div>
    `;
  },
  
  logSOP(sop, result) {
    DB.push('sop_history', { date: DB.today(), sop, result, timestamp: Date.now() });
    if (result === 'pass') DB.addXP(20, 'SOP Mastery');
    App.toast(`SOP Recall: ${result.toUpperCase()}`, result === 'pass' ? 'success' : 'error');
    document.getElementById('sop-display').innerHTML = `
      <div style="text-align:center;color:var(--text3);font-size:13px">Log recorded. Roll again?</div>
      <button class="btn btn-ghost btn-full" style="margin-top:16px" onclick="Tactical.rollSOP()">🎲 Random Recall</button>
    `;
  },

  // NEW TEST: Spatial Bearing Drill
  _spatialTimer: null,
  _spatialStartTime: null,
  _spatialQuestions: [],
  _currentSpatialIndex: 0,

  initSpatial() {
    this._spatialQuestions = [];
    const headings = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];
    for (let i = 0; i < 5; i++) {
      const h = headings[Math.floor(Math.random() * headings.length)];
      const clock = Math.floor(Math.random() * 12) + 1;
      let ans = h + (clock * 30);
      if (ans >= 360) ans -= 360;
      this._spatialQuestions.push({ h, clock, ans });
    }
    this._currentSpatialIndex = 0;
    this._spatialStartTime = Date.now();
    this._renderSpatialQ();
    this._spatialTimer = setInterval(() => {
      const elapsed = ((Date.now() - this._spatialStartTime) / 1000).toFixed(1);
      const el = document.getElementById('spatial-timer');
      if (el) el.textContent = `${elapsed}s`;
    }, 100);
  },

  _renderSpatialQ() {
    const q = this._spatialQuestions[this._currentSpatialIndex];
    const html = `
      <div style="font-size:18px;font-weight:700;margin-bottom:12px;text-align:center;color:var(--text2)">
        Flying Heading <span style="color:var(--accent);font-size:24px">${q.h.toString().padStart(3, '0')}°</span>
      </div>
      <div style="font-size:18px;font-weight:700;margin-bottom:16px;text-align:center;color:var(--text2)">
        Target at <span style="color:var(--orange);font-size:24px">${q.clock} o'clock</span>
      </div>
      <div style="font-size:14px;font-weight:600;margin-bottom:12px;text-align:center">What is the Target Heading?</div>
      <input type="number" id="spatial-input" class="form-input" style="font-size:24px;text-align:center" autofocus onkeyup="if(event.key==='Enter') Tactical._checkSpatial()">
      <div style="display:flex;justify-content:space-between;margin-top:16px">
        <span style="font-size:12px;color:var(--text3)">Q: ${this._currentSpatialIndex + 1} / 5</span>
        <span style="font-size:12px;color:var(--text3)" id="spatial-timer">0.0s</span>
      </div>
    `;
    document.getElementById('spatial-container').innerHTML = html;
    setTimeout(() => document.getElementById('spatial-input')?.focus(), 50);
  },

  _checkSpatial() {
    const input = document.getElementById('spatial-input').value;
    if (!input) return;
    const q = this._spatialQuestions[this._currentSpatialIndex];
    // Allow inputs with leading zeros like "090" but parseInt handles that natively
    if (parseInt(input) === q.ans) {
      this._currentSpatialIndex++;
      if (this._currentSpatialIndex >= 5) {
        clearInterval(this._spatialTimer);
        const elapsed = ((Date.now() - this._spatialStartTime) / 1000).toFixed(1);
        document.getElementById('spatial-container').innerHTML = `
          <div style="text-align:center">
            <div style="font-size:48px;margin-bottom:8px">🧭</div>
            <div style="font-size:24px;font-weight:700;color:var(--green)">Target Locked!</div>
            <div style="font-size:14px;color:var(--text2);margin-top:8px">Time: ${elapsed}s</div>
            <button class="btn btn-ghost" style="margin-top:16px" onclick="Tactical.initSpatial()">Retry</button>
          </div>
        `;
        DB.push('spatial_history', { date: DB.today(), score: parseFloat(elapsed), timestamp: Date.now() });
        DB.addXP(50, 'Spatial Drill');
        App.toast('Spatial drill score logged', 'success');
      } else {
        this._renderSpatialQ();
      }
    } else {
      document.getElementById('spatial-input').style.borderColor = 'var(--red)';
      setTimeout(() => { if (document.getElementById('spatial-input')) document.getElementById('spatial-input').style.borderColor = 'var(--border)'; }, 300);
    }
  },

  saveComms(rating) {
    DB.push('comms_history', { date: DB.today(), rating, timestamp: Date.now() });
    document.querySelectorAll('.comm-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`comm-btn-${rating}`).classList.add('active');
    App.toast('Comms clarity logged', 'success');
  },

  saveSubjective(type, value) {
    DB.push(`subj_${type}_history`, { date: DB.today(), value, timestamp: Date.now() });
    App.toast('Logged successfully', 'success');
    document.querySelectorAll(`.${type}-btn`).forEach(b => b.classList.remove('active'));
    document.getElementById(`${type}-btn-${value}`).classList.add('active');
  },
  
  saveRPE() {
    const rpe = parseInt(document.getElementById('rpe-input').value);
    DB.push('subj_rpe_history', { date: DB.today(), value: rpe, timestamp: Date.now() });
    App.toast(`RPE ${rpe}/10 logged`, 'success');
  },

  saveAAR() {
    const obj = document.getElementById('aar-obj').value.trim();
    const out = document.getElementById('aar-out').value.trim();
    const adj = document.getElementById('aar-adj').value.trim();
    if (!obj || !out || !adj) { App.toast('All AAR fields required', 'error'); return; }
    DB.push('aar_history', { date: DB.today(), objective: obj, outcome: out, adjustment: adj, timestamp: Date.now() });
    DB.addXP(30, 'AAR Debrief');
    App.toast('AAR Logged', 'success');
    document.getElementById('aar-obj').value = '';
    document.getElementById('aar-out').value = '';
    document.getElementById('aar-adj').value = '';
  },

  incrementDistractionFree() {
    let count = parseInt(DB.get(`streak_${DB.today()}`, 0)) || 0;
    count++;
    DB.set(`streak_${DB.today()}`, count);
    DB.push('distraction_history', { date: DB.today(), blocks: count }); // For graphing
    DB.addXP(40, 'Deep Work Block');
    document.getElementById('distraction-count').textContent = count;
    App.toast('+1 Distraction-Free Block', 'success');
  },

  saveColdExposure() {
    const secs = parseInt(document.getElementById('cold-input').value) || 0;
    if (secs <= 0) return;
    const history = DB.get('cold_history', []);
    const existing = history.find(h => h.date === DB.today());
    if (existing) {
      existing.seconds += secs;
    } else {
      history.push({ date: DB.today(), seconds: secs, timestamp: Date.now() });
    }
    DB.set('cold_history', history);
    DB.addXP(Math.floor(secs / 2), 'Resilience Training');
    document.getElementById('cold-input').value = '';
    App.toast(`${secs}s of Discomfort Logged`, 'success');
    this._refreshColdTotal();
  },

  _refreshColdTotal() {
    const history = DB.get('cold_history', []);
    const today = history.find(h => h.date === DB.today());
    const el = document.getElementById('cold-total');
    if (el) el.textContent = today ? `${today.seconds}s today` : '0s today';
  },

  toggleNoFly(idx) {
    let noFly = DB.get(`nofly_${DB.today()}`, {});
    noFly[idx] = !noFly[idx];
    DB.set(`nofly_${DB.today()}`, noFly);
    this._refreshNoFly();
  },

  _refreshNoFly() {
    const noFly = DB.get(`nofly_${DB.today()}`, {});
    const items = ['No sugar', 'No scrolling after 9 PM', 'No snoozing alarm'];
    const html = items.map((item, idx) => `
      <div style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid var(--border)">
        <div style="width:20px;height:20px;border-radius:4px;border:2px solid var(--border);display:flex;align-items:center;justify-content:center;cursor:pointer;background:${noFly[idx] ? 'var(--green)' : 'transparent'};border-color:${noFly[idx] ? 'var(--green)' : 'var(--border)'}" onclick="Tactical.toggleNoFly(${idx})">
          ${noFly[idx] ? '<span style="color:#fff;font-size:12px">✓</span>' : ''}
        </div>
        <span style="${noFly[idx] ? 'text-decoration:line-through;color:var(--text3)' : 'color:var(--text)'}">${item}</span>
      </div>
    `).join('');
    const el = document.getElementById('nofly-list');
    if (el) el.innerHTML = html;
  },

  toggleGear(idx) {
    let gear = DB.get(`gear_${DB.today()}`, {});
    gear[idx] = !gear[idx];
    DB.set(`gear_${DB.today()}`, gear);
    this._refreshGear();
  },

  _refreshGear() {
    const gear = DB.get(`gear_${DB.today()}`, {});
    const items = ['Uniform Clean & Ironed', 'Boots Polished', 'Cadet/School Bag Staged', 'Water & Rations Prepped'];
    const html = items.map((item, idx) => `
      <div style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid var(--border)">
        <div style="width:20px;height:20px;border-radius:50%;border:2px solid var(--border);display:flex;align-items:center;justify-content:center;cursor:pointer;background:${gear[idx] ? 'var(--accent)' : 'transparent'};border-color:${gear[idx] ? 'var(--accent)' : 'var(--border)'}" onclick="Tactical.toggleGear(${idx})">
          ${gear[idx] ? '<span style="color:#fff;font-size:12px">✓</span>' : ''}
        </div>
        <span style="${gear[idx] ? 'text-decoration:line-through;color:var(--text3)' : 'color:var(--text)'}">${item}</span>
      </div>
    `).join('');
    const el = document.getElementById('gear-list');
    if (el) el.innerHTML = html;
  },

  // ── Section 4: Strategic Infrastructure ──

  saveKnowledge() {
    const book = document.getElementById('know-book').value.trim();
    const pct = parseInt(document.getElementById('know-pct').value) || 0;
    if (!book) return;
    let bank = DB.get('knowledge_bank', {});
    bank[book] = pct;
    DB.set('knowledge_bank', bank);
    this._refreshKnowledge();
    App.toast('Knowledge Bank Updated', 'success');
  },
  _refreshKnowledge() {
    const bank = DB.get('knowledge_bank', {});
    const html = Object.entries(bank).map(([book, pct]) => `
      <div style="margin-bottom:12px">
        <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
          <span>${book}</span><span>${pct}%</span>
        </div>
        <div class="progress-bar-bg"><div style="height:100%;border-radius:99px;background:var(--accent);width:${pct}%"></div></div>
      </div>
    `).join('');
    const el = document.getElementById('know-list');
    if (el) el.innerHTML = html || '<div style="color:var(--text3);font-size:12px">No manuals tracked yet.</div>';
  },

  saveDecision() {
    const dec = document.getElementById('dec-text').value.trim();
    if (!dec) return;
    const review = new Date(Date.now() + 30*24*60*60*1000).toISOString().slice(0,10);
    DB.push('decision_journal', { date: DB.today(), text: dec, reviewDate: review });
    document.getElementById('dec-text').value = '';
    this._refreshDecisions();
    App.toast('Decision logged for review in 30 days', 'success');
  },
  _refreshDecisions() {
    const decs = DB.get('decision_journal', []).slice(-3).reverse();
    const html = decs.map(d => `
      <div style="padding:10px;background:var(--bg3);border-radius:6px;margin-bottom:8px;font-size:12px">
        <div style="color:var(--text3);margin-bottom:4px">Logged: ${d.date} • Review: ${d.reviewDate}</div>
        <div>${d.text}</div>
      </div>
    `).join('');
    const el = document.getElementById('dec-list');
    if (el) el.innerHTML = html || '<div style="color:var(--text3);font-size:12px">No decisions logged.</div>';
  },

  saveRunway() {
    const days = parseInt(document.getElementById('runway-days').value) || 0;
    if (days <= 0) return;
    DB.push('runway_history', { date: DB.today(), days, timestamp: Date.now() });
    this._refreshRunway();
    App.toast('Financial Runway Updated', 'success');
  },
  _refreshRunway() {
    const hist = DB.get('runway_history', []);
    if (hist.length > 0) {
      const latest = hist[hist.length-1].days;
      const el = document.getElementById('runway-display');
      if (el) el.innerHTML = `<span style="font-size:32px;font-weight:900;color:var(--green)">${latest}</span> <span style="color:var(--text3)">Survival Days</span>`;
    }
  },

  toggleSkill(skill) {
    let tree = DB.get('skill_tree', {});
    tree[skill] = !tree[skill];
    DB.set('skill_tree', tree);
    this._refreshSkills();
  },
  _hasSkill(s) { return DB.get('skill_tree', {})[s]; },
  _refreshSkills() {
    const tree = DB.get('skill_tree', {});
    const skills = ['Basic Flight Dynamics', 'VFR Navigation', 'Advanced IFR', 'Night Ops', 'Combat Maneuvers'];
    const html = skills.map((s, i) => `
      <div style="display:flex;align-items:center;gap:10px;padding:6px 0;opacity:${i > 0 && !this._hasSkill(skills[i-1]) ? 0.4 : 1}">
        <div style="width:16px;height:16px;border:2px solid var(--accent);border-radius:4px;cursor:pointer;background:${tree[s] ? 'var(--accent)' : 'transparent'};display:flex;align-items:center;justify-content:center" onclick="if(${i===0} || Tactical._hasSkill('${skills[i-1]}')) Tactical.toggleSkill('${s}')">
          ${tree[s] ? '<span style="color:#fff;font-size:10px">✓</span>' : ''}
        </div>
        <span style="font-size:13px">${s}</span>
      </div>
    `).join('');
    const el = document.getElementById('skill-list');
    if (el) el.innerHTML = html;
  },

  render() {
    return `
    <div class="page-header">
      <div class="page-title">Operator <span>Hub</span></div>
      <div class="page-sub">Cognitive & Technical Edge · High-Signal Data Logging</div>
    </div>
    
    <!-- COGNITIVE & TECHNICAL EDGE -->
    <div class="grid-2" style="gap:24px;align-items:start">
      <div style="display:flex;flex-direction:column;gap:24px">
        <!-- Mental Math -->
        <div class="card">
          <div class="card-title">Mental Math Performance</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">5 rapid-fire calculations. Speed and accuracy under pressure.</div>
          <div id="math-container" style="background:var(--bg2);padding:24px;border-radius:var(--radius-sm);border:1px solid var(--border)">
            <button class="btn btn-primary btn-full" onclick="Tactical.initMath()">Start Drill</button>
          </div>
        </div>

        <!-- Digit Span Recall -->
        <div class="card">
          <div class="card-title">Memory Digit Span</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">Test working memory. Flash 6 digits for 2.5s and recall.</div>
          <div id="digit-container" style="background:var(--bg2);padding:24px;border-radius:var(--radius-sm);border:1px solid var(--border)">
            <button class="btn btn-ghost btn-full" onclick="Tactical.startDigitSpan()">Start Memory Flash</button>
          </div>
        </div>

        <!-- SOP Mastery -->
        <div class="card">
          <div class="card-title">SOP Mastery</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">If you can't recite it at 3 AM, you don't know it.</div>
          <div id="sop-display" style="background:var(--bg2);padding:24px;border-radius:var(--radius-sm);border:1px solid var(--border)">
            <button class="btn btn-ghost btn-full" onclick="Tactical.rollSOP()">🎲 Random Recall</button>
          </div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:24px">
        <!-- Spatial Awareness -->
        <div class="card">
          <div class="card-title">Spatial Awareness: Relative Bearing</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">Convert clock position to magnetic heading. 5 rapid targets.</div>
          <div id="spatial-container" style="background:var(--bg2);padding:24px;border-radius:var(--radius-sm);border:1px solid var(--border)">
            <button class="btn btn-primary btn-full" onclick="Tactical.initSpatial()">Start Bearing Drill</button>
          </div>
        </div>

        <!-- Communication Clarity -->
        <div class="card">
          <div class="card-title">Communication Clarity Log</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">Five-Word Rule: Rate your radio/verbal brevity today.</div>
          <div style="display:flex;gap:8px">
            ${[1,2,3,4,5].map(i => `<button id="comm-btn-${i}" class="btn btn-ghost rating-btn comm-btn" style="flex:1;padding:12px 0" onclick="Tactical.saveComms(${i})">${i}</button>`).join('')}
          </div>
        </div>

        <!-- Reaction Time Baseline -->
        <div class="card" style="border-color:rgba(124,92,252,.3)">
          <div class="card-title">Reaction Time Baseline</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">Plot daily MS to see if you're "on" or just caffeinated.</div>
          <button class="btn btn-ghost btn-full" style="color:var(--accent2);border-color:var(--accent2)" onclick="App.navigate('pvt')">⚡ Run PVT Diagnostics</button>
        </div>
      </div>
    </div>

    <!-- SUBJECTIVE BIOMETRICS -->
    <div class="divider" style="margin:40px 0"></div>
    <div style="font-size:18px;font-weight:800;margin-bottom:20px">Subjective Biometrics</div>
    
    <div class="grid-2" style="gap:24px;align-items:start">
      <div style="display:flex;flex-direction:column;gap:24px">
        <!-- RPE -->
        <div class="card">
          <div class="card-title">Workout RPE (1-10)</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">Rate of Perceived Exertion. 1 = Rest, 10 = Max Effort.</div>
          <div style="display:flex;gap:12px;align-items:center">
            <input type="range" id="rpe-input" min="1" max="10" value="5" style="flex:1" oninput="document.getElementById('rpe-val').textContent=this.value">
            <div id="rpe-val" style="font-weight:800;font-size:18px;width:24px;text-align:center">5</div>
            <button class="btn btn-primary" onclick="Tactical.saveRPE()">Log</button>
          </div>
        </div>

        <!-- Sleep Quality -->
        <div class="card">
          <div class="card-title">Sleep Quality ("The Feel Factor")</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">Did you wake up ready to go, or want to fight your alarm?</div>
          <div style="display:flex;gap:8px">
            <button id="sleep-btn-ready" class="btn btn-ghost rating-btn sleep-btn" style="flex:1" onclick="Tactical.saveSubjective('sleep', 'ready')">Ready to Go</button>
            <button id="sleep-btn-fight" class="btn btn-ghost rating-btn sleep-btn" style="flex:1" onclick="Tactical.saveSubjective('sleep', 'fight')">Fought Alarm</button>
          </div>
        </div>
        
        <!-- Ready-to-Operate -->
        <div class="card">
          <div class="card-title">Ready-to-Operate Toggle</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">If today was a mission-critical day, would you be fit to handle it?</div>
          <div style="display:flex;gap:8px">
            <button id="readyToggle-btn-yes" class="btn btn-ghost rating-btn readyToggle-btn" style="flex:1" onclick="Tactical.saveSubjective('readyToggle', 'yes')">Yes, Fit to Operate</button>
            <button id="readyToggle-btn-no" class="btn btn-ghost rating-btn readyToggle-btn" style="flex:1" onclick="Tactical.saveSubjective('readyToggle', 'no')">No, Stand Down</button>
          </div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:24px">
        <!-- Cognitive Load -->
        <div class="card">
          <div class="card-title">Cognitive Load (1-5)</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">How "fried" your brain feels. 1 = Fresh, 5 = Completely Fried.</div>
          <div style="display:flex;gap:8px">
            ${[1,2,3,4,5].map(i => `<button id="cogLoad-btn-${i}" class="btn btn-ghost rating-btn cogLoad-btn" style="flex:1;padding:12px 0" onclick="Tactical.saveSubjective('cogLoad', ${i})">${i}</button>`).join('')}
          </div>
        </div>

        <!-- Visual Acuity -->
        <div class="card">
          <div class="card-title">Visual Acuity Check (1-5)</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">Rate eye strain/focus speed. 1 = Perfect, 5 = Severe Strain.</div>
          <div style="display:flex;gap:8px">
            ${[1,2,3,4,5].map(i => `<button id="visualAcuity-btn-${i}" class="btn btn-ghost rating-btn visualAcuity-btn" style="flex:1;padding:12px 0" onclick="Tactical.saveSubjective('visualAcuity', ${i})">${i}</button>`).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- DISCIPLINE & TACTICAL HABITS -->
    <div class="divider" style="margin:40px 0"></div>
    <div style="font-size:18px;font-weight:800;margin-bottom:20px">Discipline & Tactical Habits</div>
    
    <div class="grid-2" style="gap:24px;align-items:start">
      <div style="display:flex;flex-direction:column;gap:24px">
        <!-- AAR -->
        <div class="card">
          <div class="card-title">After-Action Review (AAR)</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">Debrief after every major task or study session.</div>
          <div class="form-group" style="margin-bottom:12px">
            <input type="text" id="aar-obj" class="form-input" placeholder="Objective (What did you intend to do?)">
          </div>
          <div class="form-group" style="margin-bottom:12px">
            <input type="text" id="aar-out" class="form-input" placeholder="Outcome (What actually happened?)">
          </div>
          <div class="form-group" style="margin-bottom:16px">
            <input type="text" id="aar-adj" class="form-input" placeholder="Adjustment (What will you change?)">
          </div>
          <button class="btn btn-primary btn-full" onclick="Tactical.saveAAR()">Log AAR</button>
        </div>

        <!-- Zero-Distraction Streaks -->
        <div class="card">
          <div class="card-title">Zero-Distraction Streaks</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">Completed 90-minute blocks with phone in another room.</div>
          <div style="display:flex;align-items:center;justify-content:space-between">
            <div style="font-size:48px;font-weight:900;color:var(--accent)" id="distraction-count">0</div>
            <button class="btn btn-ghost" onclick="Tactical.incrementDistractionFree()">+1 Block</button>
          </div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:24px">
        <!-- Cold Exposure -->
        <div class="card">
          <div class="card-title">Cold Exposure / Discomfort Log</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">Resilience is a muscle. Track seconds in cold or discomfort.</div>
          <div style="display:flex;gap:12px;align-items:center">
            <input type="number" id="cold-input" class="form-input" placeholder="Seconds..." style="flex:1">
            <button class="btn btn-primary" onclick="Tactical.saveColdExposure()">Log</button>
          </div>
          <div style="font-size:12px;color:var(--text3);margin-top:12px" id="cold-total">0s today</div>
        </div>

        <!-- No-Fly List -->
        <div class="card">
          <div class="card-title">The "No-Fly" List</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">Banned habits checklist for today.</div>
          <div id="nofly-list"></div>
        </div>

        <!-- Gear Readiness -->
        <div class="card">
          <div class="card-title">Uniform & Gear Readiness</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">Is everything prepped and staged for tomorrow?</div>
          <div id="gear-list"></div>
        </div>
      </div>
    </div>

    <!-- STRATEGIC INFRASTRUCTURE -->
    <div class="divider" style="margin:40px 0"></div>
    <div style="font-size:18px;font-weight:800;margin-bottom:20px">Strategic Infrastructure</div>
    
    <div class="grid-2" style="gap:24px;align-items:start;margin-bottom:60px">
      <div style="display:flex;flex-direction:column;gap:24px">
        <!-- Knowledge Bank -->
        <div class="card">
          <div class="card-title">Knowledge Bank ("Second Brain")</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">Track progress of technical manuals you are currently downloading.</div>
          <div id="know-list" style="margin-bottom:16px"></div>
          <div style="display:flex;gap:8px">
            <input type="text" id="know-book" class="form-input" placeholder="Book / Manual Title..." style="flex:2">
            <input type="number" id="know-pct" class="form-input" placeholder="%" style="flex:1" min="0" max="100">
            <button class="btn btn-primary" onclick="Tactical.saveKnowledge()">Save</button>
          </div>
        </div>

        <!-- Decision Journal -->
        <div class="card">
          <div class="card-title">Decision Journal</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">Log "Big Decisions" to review logic vs emotion 30 days later.</div>
          <div id="dec-list" style="margin-bottom:16px"></div>
          <div style="display:flex;gap:8px;align-items:center">
            <input type="text" id="dec-text" class="form-input" placeholder="What did you decide today?">
            <button class="btn btn-primary" onclick="Tactical.saveDecision()">Log</button>
          </div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:24px">
        <!-- Financial Runway -->
        <div class="card">
          <div class="card-title">Financial Runway</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">Track your "Survival Days" if everything stops.</div>
          <div id="runway-display" style="margin-bottom:12px">
            <span style="font-size:32px;font-weight:900;color:var(--text3)">0</span> <span style="color:var(--text3)">Survival Days</span>
          </div>
          <div style="display:flex;gap:8px">
            <input type="number" id="runway-days" class="form-input" placeholder="Recalculate days...">
            <button class="btn btn-primary" onclick="Tactical.saveRunway()">Update</button>
          </div>
        </div>

        <!-- Skill Tree Progression -->
        <div class="card">
          <div class="card-title">Skill Tree Progression</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">Visualize pipeline goals as an unlocking skill tree.</div>
          <div id="skill-list"></div>
        </div>

        <!-- Environmental Quality Log -->
        <div class="card">
          <div class="card-title">Environmental Quality Log</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">Rate workspace (1-5). Fix environment to fix performance.</div>
          <div style="display:flex;gap:8px">
            ${[1,2,3,4,5].map(i => `<button id="env-btn-${i}" class="btn btn-ghost rating-btn env-btn" style="flex:1;padding:12px 0" onclick="Tactical.saveSubjective('env', ${i})">${i}</button>`).join('')}
          </div>
        </div>
      </div>
    </div>
    
    <style>
      .rating-btn.active { background: var(--accent); color: #fff; border-color: var(--accent); }
    </style>
    `;
  },
  
  afterRender() {
    clearInterval(this._mathTimer);
    clearInterval(this._spatialTimer);
    
    // Hydrate today's data if it exists
    const today = DB.today();
    
    const commLog = DB.get('comms_history', []).find(c => c.date === today);
    if (commLog) document.getElementById(`comm-btn-${commLog.rating}`)?.classList.add('active');
    
    const cogLog = DB.get('subj_cogLoad_history', []).find(c => c.date === today);
    if (cogLog) document.getElementById(`cogLoad-btn-${cogLog.value}`)?.classList.add('active');
    
    const visLog = DB.get('subj_visualAcuity_history', []).find(c => c.date === today);
    if (visLog) document.getElementById(`visualAcuity-btn-${visLog.value}`)?.classList.add('active');
    
    const sleepLog = DB.get('subj_sleep_history', []).find(c => c.date === today);
    if (sleepLog) document.getElementById(`sleep-btn-${sleepLog.value}`)?.classList.add('active');
    
    const readyLog = DB.get('subj_readyToggle_history', []).find(c => c.date === today);
    if (readyLog) document.getElementById(`readyToggle-btn-${readyLog.value}`)?.classList.add('active');

    const envLog = DB.get('subj_env_history', []).find(c => c.date === today);
    if (envLog) document.getElementById(`env-btn-${envLog.value}`)?.classList.add('active');

    // Section 3 init
    const dCount = DB.get('distraction_history', []).find(h => h.date === today)?.blocks || parseInt(DB.get(`streak_${today}`, 0)) || 0;
    document.getElementById('distraction-count').textContent = dCount;
    this._refreshColdTotal();
    this._refreshNoFly();
    this._refreshGear();

    // Section 4 init
    this._refreshKnowledge();
    this._refreshDecisions();
    this._refreshRunway();
    this._refreshSkills();
  }
};
