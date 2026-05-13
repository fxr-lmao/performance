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
            <div style="font-size:24px;font-weight:700;color:var(--green)">${App.t('passed')}</div>
            <div style="font-size:14px;color:var(--text2);margin-top:8px">Time: ${elapsed}s</div>
            <button class="btn btn-ghost" style="margin-top:16px" onclick="Tactical.initMath()">${App.t('retry')}</button>
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

  _digitSequence: '',
  startDigitSpan() {
    this._digitSequence = Array.from({length: 6}, () => Math.floor(Math.random() * 10)).join('');
    document.getElementById('digit-container').innerHTML = `
      <div style="font-size:48px;font-weight:900;letter-spacing:8px;text-align:center;color:var(--accent)">${this._digitSequence}</div>
      <div style="text-align:center;color:var(--text3);margin-top:16px">${App._lang === 'fr' ? 'Mémorisez cette séquence (2.5s)' : 'Memorize this sequence (2.5s)'}</div>
    `;
    setTimeout(() => {
      document.getElementById('digit-container').innerHTML = `
        <div style="font-size:18px;font-weight:700;margin-bottom:16px;text-align:center">${App._lang === 'fr' ? 'Entrez la séquence' : 'Enter the sequence'}</div>
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
          <div style="font-size:24px;font-weight:700;color:var(--green)">${App.t('perfect_recall')}</div>
          <button class="btn btn-ghost" style="margin-top:16px" onclick="Tactical.startDigitSpan()">${App.t('retry')}</button>
        </div>
      `;
      DB.push('digit_history', { date: DB.today(), passed: 1, length: this._digitSequence.length, timestamp: Date.now() });
      DB.addXP(75, 'Memory Drill');
    } else {
      document.getElementById('digit-input').style.borderColor = 'var(--red)';
      App.toast(App._lang === 'fr' ? `Échoué. La séquence était : ${this._digitSequence}` : `Failed. Sequence was: ${this._digitSequence}`, 'error');
      setTimeout(() => { this.startDigitSpan(); }, 2000);
      DB.push('digit_history', { date: DB.today(), passed: 0, length: this._digitSequence.length, timestamp: Date.now() });
    }
  },

  rollSOP() {
    const sop = this.SOP_LIST[Math.floor(Math.random() * this.SOP_LIST.length)];
    document.getElementById('sop-display').innerHTML = `
      <div style="font-size:18px;font-weight:700;color:var(--accent);margin-bottom:16px;text-align:center">${sop}</div>
      <div style="display:flex;gap:12px;justify-content:center">
        <button class="btn btn-primary" onclick="Tactical.logSOP('${sop}', 'pass')">${App._lang === 'fr' ? 'Passé' : 'Passed'}</button>
        <button class="btn btn-danger" onclick="Tactical.logSOP('${sop}', 'fail')">${App._lang === 'fr' ? 'Échoué' : 'Failed'}</button>
      </div>
    `;
  },
  
  logSOP(sop, result) {
    DB.push('sop_history', { date: DB.today(), sop, result, timestamp: Date.now() });
    if (result === 'pass') DB.addXP(20, 'SOP Mastery');
    App.toast(`SOP Recall: ${result.toUpperCase()}`, result === 'pass' ? 'success' : 'error');
    document.getElementById('sop-display').innerHTML = `
      <div style="text-align:center;color:var(--text3);font-size:13px">${App.t('log_recorded')} ${App.t('roll_again')}</div>
      <button class="btn btn-ghost btn-full" style="margin-top:16px" onclick="Tactical.rollSOP()">🎲 ${App.t('random_recall')}</button>
    `;
  },

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
        ${App._lang === 'fr' ? 'Cap Actuel' : 'Flying Heading'} <span style="color:var(--accent);font-size:24px">${q.h.toString().padStart(3, '0')}°</span>
      </div>
      <div style="font-size:18px;font-weight:700;margin-bottom:16px;text-align:center;color:var(--text2)">
        ${App._lang === 'fr' ? 'Cible à' : 'Target at'} <span style="color:var(--orange);font-size:24px">${q.clock} ${App._lang === 'fr' ? 'heures' : "o'clock"}</span>
      </div>
      <div style="font-size:14px;font-weight:600;margin-bottom:12px;text-align:center">${App._lang === 'fr' ? 'Quel est le gisement de la cible ?' : 'What is the Target Heading?'}</div>
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
    if (parseInt(input) === q.ans) {
      this._currentSpatialIndex++;
      if (this._currentSpatialIndex >= 5) {
        clearInterval(this._spatialTimer);
        const elapsed = ((Date.now() - this._spatialStartTime) / 1000).toFixed(1);
        document.getElementById('spatial-container').innerHTML = `
          <div style="text-align:center">
            <div style="font-size:48px;margin-bottom:8px">🧭</div>
            <div style="font-size:24px;font-weight:700;color:var(--green)">${App.t('target_locked')}</div>
            <div style="font-size:14px;color:var(--text2);margin-top:8px">Time: ${elapsed}s</div>
            <button class="btn btn-ghost" style="margin-top:16px" onclick="Tactical.initSpatial()">${App.t('retry')}</button>
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
    const btn = document.getElementById(`${type}-btn-${value}`);
    if (btn) btn.classList.add('active');
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
    DB.push('distraction_history', { date: DB.today(), blocks: count });
    DB.addXP(40, 'Deep Work Block');
    const el = document.getElementById('distraction-count');
    if (el) el.textContent = count;
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
    const isFR = App._lang === 'fr';
    const noFly = DB.get(`nofly_${DB.today()}`, {});
    const items = isFR 
        ? ['Pas de sucre', 'Pas d\'écran après 21h', 'Pas de bouton "Snooze"']
        : ['No sugar', 'No scrolling after 9 PM', 'No snoozing alarm'];
    
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
    const isFR = App._lang === 'fr';
    const gear = DB.get(`gear_${DB.today()}`, {});
    const items = isFR
        ? ['Uniforme Propre et Repassé', 'Bottes Cirées', 'Sac de Cadet Prêt', 'Eau et Rations Préparées']
        : ['Uniform Clean & Ironed', 'Boots Polished', 'Cadet/School Bag Staged', 'Water & Rations Prepped'];
        
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
    if (el) el.innerHTML = html || `<div style="color:var(--text3);font-size:12px">${App._lang === 'fr' ? 'Aucun manuel suivi.' : 'No manuals tracked yet.'}</div>`;
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
    if (el) el.innerHTML = html || `<div style="color:var(--text3);font-size:12px">${App._lang === 'fr' ? 'Aucune décision.' : 'No decisions logged.'}</div>`;
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
      if (el) el.innerHTML = `<span style="font-size:32px;font-weight:900;color:var(--green)">${latest}</span> <span style="color:var(--text3)">${App._lang === 'fr' ? 'Jours de Survie' : 'Survival Days'}</span>`;
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
    const isFR = App._lang === 'fr';
    const tree = DB.get('skill_tree', {});
    const skills = isFR
        ? ['Dynamique de Vol de Base', 'Navigation VFR', 'IFR Avancé', 'Opérations Nocturnes', 'Manœuvres de Combat']
        : ['Basic Flight Dynamics', 'VFR Navigation', 'Advanced IFR', 'Night Ops', 'Combat Maneuvers'];
        
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
    const isFR = App._lang === 'fr';
    return `
    <div class="page-header">
      <div class="page-title">${App.t('operator_hub')}</div>
      <div class="page-sub">${isFR ? 'Avantage Cognitif et Technique · Collecte de Données à Haut Signal' : 'Cognitive & Technical Edge · High-Signal Data Logging'}</div>
    </div>
    
    <!-- COGNITIVE & TECHNICAL EDGE -->
    <div class="grid-2" style="gap:24px;align-items:start">
      <div style="display:flex;flex-direction:column;gap:24px">
        <div class="card">
          <div class="card-title">${App.t('mental_math')}</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">${isFR ? '5 calculs rapides. Vitesse et précision sous pression.' : '5 rapid-fire calculations. Speed and accuracy under pressure.'}</div>
          <div id="math-container" style="background:var(--bg2);padding:24px;border-radius:8px;border:1px solid var(--border)">
            <button class="btn btn-primary btn-full" onclick="Tactical.initMath()">${App.t('start_drill')}</button>
          </div>
        </div>

        <div class="card">
          <div class="card-title">${App.t('digit_span')}</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">${isFR ? 'Test de mémoire de travail. 6 chiffres pendant 2.5s.' : 'Test working memory. Flash 6 digits for 2.5s and recall.'}</div>
          <div id="digit-container" style="background:var(--bg2);padding:24px;border-radius:8px;border:1px solid var(--border)">
            <button class="btn btn-ghost btn-full" onclick="Tactical.startDigitSpan()">${isFR ? 'Démarrer Flash Mémoire' : 'Start Memory Flash'}</button>
          </div>
        </div>

        <div class="card">
          <div class="card-title">${App.t('sop_mastery')}</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">${isFR ? 'Si vous ne pouvez pas le réciter à 3h du matin, vous ne le savez pas.' : "If you can't recite it at 3 AM, you don't know it."}</div>
          <div id="sop-display" style="background:var(--bg2);padding:24px;border-radius:8px;border:1px solid var(--border)">
            <button class="btn btn-ghost btn-full" onclick="Tactical.rollSOP()">🎲 ${App.t('random_recall')}</button>
          </div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:24px">
        <div class="card">
          <div class="card-title">${App.t('spatial_awareness')}</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">${isFR ? 'Convertissez la position horloge en cap magnétique.' : 'Convert clock position to magnetic heading. 5 rapid targets.'}</div>
          <div id="spatial-container" style="background:var(--bg2);padding:24px;border-radius:8px;border:1px solid var(--border)">
            <button class="btn btn-primary btn-full" onclick="Tactical.initSpatial()">${isFR ? 'Démarrer Exercice Gisement' : 'Start Bearing Drill'}</button>
          </div>
        </div>

        <div class="card">
          <div class="card-title">${App.t('comms_clarity')}</div>
          <div style="font-size:13px;color:var(--text2);margin-bottom:16px">${isFR ? 'Règle des Cinq Mots : Notez votre brièveté aujourd\'hui.' : 'Five-Word Rule: Rate your radio/verbal brevity today.'}</div>
          <div style="display:flex;gap:8px">
            ${[1,2,3,4,5].map(i => `<button id="comm-btn-${i}" class="btn btn-ghost rating-btn comm-btn" style="flex:1;padding:12px 0" onclick="Tactical.saveComms(${i})">${i}</button>`).join('')}
          </div>
        </div>

        <div class="card" style="border-color:rgba(124,92,252,.3)">
          <div class="card-title">${isFR ? 'Temps de Réaction Baseline' : 'Reaction Time Baseline'}</div>
          <button class="btn btn-ghost btn-full" style="color:var(--accent2);border-color:var(--accent2)" onclick="App.navigate('pvt')">⚡ ${isFR ? 'Lancer PVT Diagnostics' : 'Run PVT Diagnostics'}</button>
        </div>
      </div>
    </div>

    <div class="divider" style="margin:40px 0"></div>
    <div style="font-size:18px;font-weight:800;margin-bottom:20px">${App.t('subj_biometrics')}</div>
    
    <div class="grid-2" style="gap:24px;align-items:start">
      <div style="display:flex;flex-direction:column;gap:24px">
        <div class="card">
          <div class="card-title">${App.t('workout_rpe')}</div>
          <div style="display:flex;gap:12px;align-items:center">
            <input type="range" id="rpe-input" min="1" max="10" value="5" style="flex:1" oninput="document.getElementById('rpe-val').textContent=this.value">
            <div id="rpe-val" style="font-weight:800;font-size:18px;width:24px;text-align:center">5</div>
            <button class="btn btn-primary" onclick="Tactical.saveRPE()">${App.t('log')}</button>
          </div>
        </div>

        <div class="card">
          <div class="card-title">${App.t('sleep_quality')}</div>
          <div style="display:flex;gap:8px">
            <button id="sleep-btn-ready" class="btn btn-ghost rating-btn sleep-btn" style="flex:1" onclick="Tactical.saveSubjective('sleep', 'ready')">${isFR ? 'Prêt à Partir' : 'Ready to Go'}</button>
            <button id="sleep-btn-fight" class="btn btn-ghost rating-btn sleep-btn" style="flex:1" onclick="Tactical.saveSubjective('sleep', 'fight')">${isFR ? 'Lutte Alarme' : 'Fought Alarm'}</button>
          </div>
        </div>
        
        <div class="card">
          <div class="card-title">${App.t('ready_to_operate')}</div>
          <div style="display:flex;gap:8px">
            <button id="readyToggle-btn-yes" class="btn btn-ghost rating-btn readyToggle-btn" style="flex:1" onclick="Tactical.saveSubjective('readyToggle', 'yes')">${isFR ? 'Oui, Apte' : 'Yes, Fit'}</button>
            <button id="readyToggle-btn-no" class="btn btn-ghost rating-btn readyToggle-btn" style="flex:1" onclick="Tactical.saveSubjective('readyToggle', 'no')">${isFR ? 'Non, Stand Down' : 'No, Stand Down'}</button>
          </div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:24px">
        <div class="card">
          <div class="card-title">${App.t('cog_load')}</div>
          <div style="display:flex;gap:8px">
            ${[1,2,3,4,5].map(i => `<button id="cogLoad-btn-${i}" class="btn btn-ghost rating-btn cogLoad-btn" style="flex:1;padding:12px 0" onclick="Tactical.saveSubjective('cogLoad', ${i})">${i}</button>`).join('')}
          </div>
        </div>

        <div class="card">
          <div class="card-title">${App.t('visual_acuity')}</div>
          <div style="display:flex;gap:8px">
            ${[1,2,3,4,5].map(i => `<button id="visualAcuity-btn-${i}" class="btn btn-ghost rating-btn visualAcuity-btn" style="flex:1;padding:12px 0" onclick="Tactical.saveSubjective('visualAcuity', ${i})">${i}</button>`).join('')}
          </div>
        </div>
      </div>
    </div>

    <div class="divider" style="margin:40px 0"></div>
    <div style="font-size:18px;font-weight:800;margin-bottom:20px">${App.t('discipline_habits')}</div>
    
    <div class="grid-2" style="gap:24px;align-items:start">
      <div style="display:flex;flex-direction:column;gap:24px">
        <div class="card">
          <div class="card-title">${App.t('aar')}</div>
          <div class="form-group" style="margin-bottom:12px">
            <input type="text" id="aar-obj" class="form-input" placeholder="${isFR ? 'Objectif (Que vouliez-vous faire ?)' : 'Objective (What did you intend to do?)'}">
          </div>
          <div class="form-group" style="margin-bottom:12px">
            <input type="text" id="aar-out" class="form-input" placeholder="${isFR ? 'Résultat (Que s\'est-il passé ?)' : 'Outcome (What actually happened?)'}">
          </div>
          <div class="form-group" style="margin-bottom:16px">
            <input type="text" id="aar-adj" class="form-input" placeholder="${isFR ? 'Ajustement (Que changerez-vous ?)' : 'Adjustment (What will you change?)'}">
          </div>
          <button class="btn btn-primary btn-full" onclick="Tactical.saveAAR()">${App.t('log')} AAR</button>
        </div>

        <div class="card">
          <div class="card-title">${App.t('zero_distraction')}</div>
          <div style="display:flex;align-items:center;justify-content:space-between">
            <div style="font-size:48px;font-weight:900;color:var(--accent)" id="distraction-count">0</div>
            <button class="btn btn-ghost" onclick="Tactical.incrementDistractionFree()">+1 Block</button>
          </div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:24px">
        <div class="card">
          <div class="card-title">${App.t('cold_exposure')}</div>
          <div style="display:flex;gap:12px;align-items:center">
            <input type="number" id="cold-input" class="form-input" placeholder="Seconds..." style="flex:1">
            <button class="btn btn-primary" onclick="Tactical.saveColdExposure()">${App.t('log')}</button>
          </div>
          <div style="font-size:12px;color:var(--text3);margin-top:12px" id="cold-total">0s today</div>
        </div>

        <div class="card">
          <div class="card-title">${App.t('nofly_list')}</div>
          <div id="nofly-list"></div>
        </div>

        <div class="card">
          <div class="card-title">${App.t('gear_readiness')}</div>
          <div id="gear-list"></div>
        </div>
      </div>
    </div>

    <div class="divider" style="margin:40px 0"></div>
    <div style="font-size:18px;font-weight:800;margin-bottom:20px">${App.t('strat_infra')}</div>
    
    <div class="grid-2" style="gap:24px;align-items:start;margin-bottom:60px">
      <div style="display:flex;flex-direction:column;gap:24px">
        <div class="card">
          <div class="card-title">${App.t('knowledge_bank')}</div>
          <div id="know-list" style="margin-bottom:16px"></div>
          <div style="display:flex;gap:8px">
            <input type="text" id="know-book" class="form-input" placeholder="${isFR ? 'Titre Manuel...' : 'Book / Manual Title...'}" style="flex:2">
            <input type="number" id="know-pct" class="form-input" placeholder="%" style="flex:1" min="0" max="100">
            <button class="btn btn-primary" onclick="Tactical.saveKnowledge()">Save</button>
          </div>
        </div>

        <div class="card">
          <div class="card-title">${App.t('decision_journal')}</div>
          <div id="dec-list" style="margin-bottom:16px"></div>
          <div style="display:flex;gap:8px;align-items:center">
            <input type="text" id="dec-text" class="form-input" placeholder="${isFR ? 'Qu\'avez-vous décidé aujourd\'hui ?' : 'What did you decide today?'}">
            <button class="btn btn-primary" onclick="Tactical.saveDecision()">Log</button>
          </div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:24px">
        <div class="card">
          <div class="card-title">${App.t('financial_runway')}</div>
          <div id="runway-display" style="margin-bottom:12px">
            <span style="font-size:32px;font-weight:900;color:var(--text3)">0</span> <span style="color:var(--text3)">${isFR ? 'Jours de Survie' : 'Survival Days'}</span>
          </div>
          <div style="display:flex;gap:8px">
            <input type="number" id="runway-days" class="form-input" placeholder="${isFR ? 'Recalculer jours...' : 'Recalculate days...'}">
            <button class="btn btn-primary" onclick="Tactical.saveRunway()">Update</button>
          </div>
        </div>

        <div class="card">
          <div class="card-title">${App.t('skill_tree_prog')}</div>
          <div id="skill-list"></div>
        </div>

        <div class="card">
          <div class="card-title">${App.t('env_quality')}</div>
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

    const dCount = DB.get('distraction_history', []).find(h => h.date === today)?.blocks || parseInt(DB.get(`streak_${today}`, 0)) || 0;
    const countEl = document.getElementById('distraction-count');
    if (countEl) countEl.textContent = dCount;

    this._refreshColdTotal();
    this._refreshNoFly();
    this._refreshGear();
    this._refreshKnowledge();
    this._refreshDecisions();
    this._refreshRunway();
    this._refreshSkills();
  }
};
