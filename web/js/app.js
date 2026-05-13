// app.js — Main orchestrator: routing, nav, briefing screen

const App = {
  _current: null,
  _briefingData: {},
  _lang: 'en',

  STRINGS: {
    en: {
      morning_briefing: "Morning Briefing",
      pvt_test: "PVT Test",
      deep_work: "Deep Work",
      task_stack: "Task Stack",
      operator_hub: "Operator Hub",
      the_crucible: "The Crucible",
      skill_tree: "Skill Tree",
      mission_command: "Mission Command",
      intel_archives: "Intel Archives",
      pilot_log: "Pilot Log",
      settings: "Settings",
      protocol: "Daily Protocol",
      tactical: "Tactical",
      analytics: "Analytics",
      system: "System",
      system_status: "System Status",
      pending: "PENDING",
      readiness_score: "Readiness Score",
      biometric_checklist: "Biometric Checklist",
      sacred_schedule: "Sacred Schedule",
      diagnostic_complete: "Diagnostic Complete",
      operational_state: "Operational State",
      directives: "Daily Directives",
      signal_weights: "Signal Weights",
      pvt_diagnostics: "PVT Diagnostics",
      avg_rt: "Avg RT",
      lapses: "Lapses",
      false_starts: "False Starts",
      acknowledge_begin: "Acknowledge & Begin Deep Work",
      initiate_pvt: "Initiate PVT Test",
      good_morning: "Good Morning",
      good_afternoon: "Good Afternoon",
      good_evening: "Good Evening",
      pilot: "Pilot",
      rcaf_pipeline: "RCAF Pipeline Active",
      target: "Target",
      ok: "OK",
      training: "Training",
      academic: "Academic",
      execute_mission: "EXECUTE MISSION",
      objectives_incomplete: "OBJECTIVES INCOMPLETE",
      mission_accomplished: "MISSION ACCOMPLISHED",
      requirement_breakdown: "Requirement Breakdown",
      click_to_show: "Click to show requirements ▼",
      click_to_collapse: "Click to collapse details ▲",
      mastered: "MASTERED",
      ready: "READY",
      locked: "LOCKED",
      ingested: "INGESTED",
      mark_memorized: "MARK AS MEMORIZED",
      start_quiz: "START PROFICIENCY QUIZ",
      abort: "ABORT",
      submit_verification: "SUBMIT VERIFICATION",
      question: "Question",
      of: "of",
      enter_terminology: "Enter exact protocol terminology...",
      proficiency_verification: "Proficiency Verification",
      proficiency_verified: "PROFICIENCY VERIFIED",
      start_test: "START TEST",
      pvt_desc: "Wait for the RED box to turn GREEN, then click as fast as possible.",
      test_in_progress: "TEST IN PROGRESS",
      click_now: "CLICK NOW!",
      wait: "WAIT...",
      too_fast: "TOO FAST!",
      results: "RESULTS",
      save_results: "SAVE RESULTS",
      deep_work_desc: "Eliminate all distractions. Focus on a single high-value task.",
      start_session: "START SESSION",
      end_session: "END SESSION",
      minutes: "Minutes",
      add_task: "Add Task",
      task_placeholder: "What needs to be done?",
      low: "Low",
      med: "Med",
      high: "High",
      crit: "Crit",
      no_tasks: "No tasks in the stack. Add one above.",
      crucible_desc: "Extreme physiological and psychological challenges to forge elite resilience.",
      start_challenge: "START CHALLENGE",
      challenge_complete: "CHALLENGE COMPLETE",
      unlocked: "UNLOCKED",
      search_skills: "Search 500+ skills...",
      expected_time: "Expected Time",
      requirements_needed: "Requirements",
      cost_warning: "💰 Warning: Requires financial investment",
      learn_skill: "LEARN SKILL",
      skill_learned: "SKILL LEARNED",
      language: "Language",
      save_settings: "Save Settings",
      profile_updated: "Profile updated",
      onboarding_welcome: "Welcome, Pilot",
      onboarding_desc: "Initialize your tactical performance environment.",
      enter_name: "Enter Full Name",
      enter_age: "Enter Age",
      enter_location: "Enter Location (e.g. Gatineau, QC)",
      target_year: "Target RCAF Year",
      complete_onboarding: "Complete Onboarding",
      cognitive_edge: "Cognitive & Technical Edge",
      mental_math: "Mental Math Performance",
      digit_span: "Memory Digit Span",
      sop_mastery: "SOP Mastery",
      spatial_awareness: "Spatial Awareness: Relative Bearing",
      comms_clarity: "Communication Clarity Log",
      subj_biometrics: "Subjective Biometrics",
      workout_rpe: "Workout RPE (1-10)",
      sleep_quality: "Sleep Quality",
      ready_to_operate: "Ready-to-Operate Toggle",
      cog_load: "Cognitive Load (1-5)",
      visual_acuity: "Visual Acuity Check (1-5)",
      discipline_habits: "Discipline & Tactical Habits",
      aar: "After-Action Review (AAR)",
      zero_distraction: "Zero-Distraction Streaks",
      cold_exposure: "Cold Exposure / Discomfort Log",
      nofly_list: "The 'No-Fly' List",
      gear_readiness: "Uniform & Gear Readiness",
      strat_infra: "Strategic Infrastructure",
      knowledge_bank: "Knowledge Bank",
      decision_journal: "Decision Journal",
      financial_runway: "Financial Runway",
      skill_tree_prog: "Skill Tree Progression",
      env_quality: "Environmental Quality Log",
      start_drill: "Start Drill",
      retry: "Retry",
      passed: "Passed!",
      perfect_recall: "Perfect Recall!",
      target_locked: "Target Locked!",
      log_recorded: "Log recorded.",
      roll_again: "Roll again?",
      random_recall: "Random Recall",
      log: "Log"
    },
    fr: {
      morning_briefing: "Briefing Matinal",
      pvt_test: "Test PVT",
      deep_work: "Travail Profond",
      task_stack: "Pile de Tâches",
      operator_hub: "Centre Opérationnel",
      the_crucible: "Le Creuset",
      skill_tree: "Arbre de Compétences",
      mission_command: "Commandement de Mission",
      intel_archives: "Archives Intel",
      pilot_log: "Journal de Bord",
      settings: "Paramètres",
      protocol: "Protocole Quotidien",
      tactical: "Tactique",
      analytics: "Analytiques",
      system: "Système",
      system_status: "Statut Système",
      pending: "EN ATTENTE",
      readiness_score: "Score d'État",
      biometric_checklist: "Liste Biométrique",
      sacred_schedule: "Horaire Sacré",
      diagnostic_complete: "Diagnostic Terminé",
      operational_state: "État Opérationnel",
      directives: "Directives du Jour",
      signal_weights: "Poids des Signaux",
      pvt_diagnostics: "Diagnostics PVT",
      avg_rt: "Temps Moyen",
      lapses: "Lapses",
      false_starts: "Faux Départs",
      acknowledge_begin: "Confirmer & Commencer",
      initiate_pvt: "Lancer le Test PVT",
      good_morning: "Bon Matin",
      good_afternoon: "Bon Après-midi",
      good_evening: "Bonsoir",
      pilot: "Pilote",
      rcaf_pipeline: "Pipeline RCAF Actif",
      target: "Objectif",
      ok: "OK",
      training: "Entraînement",
      academic: "Académique",
      execute_mission: "EXÉCUTER LA MISSION",
      objectives_incomplete: "OBJECTIFS INCOMPLETS",
      mission_accomplished: "MISSION ACCOMPLIE",
      requirement_breakdown: "Détails des Prérequis",
      click_to_show: "Cliquer pour voir les prérequis ▼",
      click_to_collapse: "Cliquer pour masquer ▲",
      mastered: "MAÎTRISÉ",
      ready: "PRÊT",
      locked: "VERROUILLÉ",
      ingested: "INGÉRÉ",
      mark_memorized: "MARQUER COMME MÉMORISÉ",
      start_quiz: "LANCER LE QUIZ DE MAÎTRISE",
      abort: "ANNULER",
      submit_verification: "SOUMETTRE VÉRIFICATION",
      question: "Question",
      of: "sur",
      enter_terminology: "Entrez la terminologie exacte...",
      proficiency_verification: "Vérification de Maîtrise",
      proficiency_verified: "MAÎTRISE VÉRIFIÉE",
      start_test: "COMMENCER LE TEST",
      pvt_desc: "Attendez que la boîte ROUGE devienne VERTE, puis cliquez le plus vite possible.",
      test_in_progress: "TEST EN COURS",
      click_now: "CLIQUEZ !",
      wait: "ATTENDEZ...",
      too_fast: "TROP VITE !",
      results: "RÉSULTATS",
      save_results: "ENREGISTRER",
      deep_work_desc: "Éliminez toute distraction. Concentrez-vous sur une seule tâche.",
      start_session: "DÉMARRER LA SESSION",
      end_session: "TERMINER LA SESSION",
      minutes: "Minutes",
      add_task: "Ajouter Tâche",
      task_placeholder: "Que faut-il faire ?",
      low: "Bas",
      med: "Moy",
      high: "Haut",
      crit: "Crit",
      no_tasks: "Aucune tâche. Ajoutez-en une.",
      crucible_desc: "Défis extrêmes pour forger une résilience d'élite.",
      start_challenge: "COMMENCER LE DÉFI",
      challenge_complete: "DÉFI COMPLÉTÉ",
      unlocked: "DÉVERROUILLÉ",
      search_skills: "Rechercher 500+ compétences...",
      expected_time: "Temps Estimé",
      requirements_needed: "Prérequis",
      cost_warning: "💰 Attention : Nécessite un investissement",
      learn_skill: "APPRENDRE",
      skill_learned: "COMPÉTENCE ACQUISE",
      language: "Langue",
      save_settings: "Enregistrer Paramètres",
      profile_updated: "Profil mis à jour",
      onboarding_welcome: "Bienvenue, Pilote",
      onboarding_desc: "Initialisez votre environnement de performance tactique.",
      enter_name: "Nom Complet",
      enter_age: "Âge",
      enter_location: "Localisation (ex: Gatineau, QC)",
      target_year: "Année Cible RCAF",
      complete_onboarding: "Terminer l'Initialisation",
      cognitive_edge: "Avantage Cognitif et Technique",
      mental_math: "Performance Calcul Mental",
      digit_span: "Mémoire à Court Terme",
      sop_mastery: "Maîtrise des SOP",
      spatial_awareness: "Conscience Spatiale : Gisement Relatif",
      comms_clarity: "Log de Clarté des Communications",
      subj_biometrics: "Biométrie Subjective",
      workout_rpe: "RPE d'Entraînement (1-10)",
      sleep_quality: "Qualité du Sommeil",
      ready_to_operate: "État de Disponibilité Opérationnelle",
      cog_load: "Charge Cognitive (1-5)",
      visual_acuity: "Acuité Visuelle (1-5)",
      discipline_habits: "Discipline et Habitudes Tactiques",
      aar: "Revue Après-Action (AAR)",
      zero_distraction: "Séries sans Distraction",
      cold_exposure: "Exposition au Froid / Log d'Inconfort",
      nofly_list: "Liste 'No-Fly'",
      gear_readiness: "Préparation Uniforme et Équipement",
      strat_infra: "Infrastructure Stratégique",
      knowledge_bank: "Banque de Connaissances",
      decision_journal: "Journal de Décision",
      financial_runway: "Autonomie Financière",
      skill_tree_prog: "Progression de l'Arbre de Compétences",
      env_quality: "Qualité de l'Environnement",
      start_drill: "Démarrer l'Exercice",
      retry: "Réessayer",
      passed: "Réussi !",
      perfect_recall: "Rappel Parfait !",
      target_locked: "Cible Verrouillée !",
      log_recorded: "Log enregistré.",
      roll_again: "Relancer ?",
      random_recall: "Rappel Aléatoire",
      log: "Enregistrer"
    }
  },

  t(key) {
    return this.STRINGS[this._lang][key] || key;
  },

  init() {
    const p = Account.get() || {};
    this._lang = p.lang || 'en';
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
    const isFR = this._lang === 'fr';
    document.getElementById('app').innerHTML = `
      <div class="boot-screen">
        <div class="boot-scanline"></div>
        <div class="boot-content" id="boot-text"></div>
      </div>`;
    
    const lines = [
      "INITIALIZING PERFORMANCE OS [v2.4.1]",
      "KERNEL: RCAF_CANDIDATE_OPTIMIZATION_MODULE",
      "MOUNTING ENCRYPTED FILE SYSTEM... OK",
      "ESTABLISHING BIOMETRIC UPLINK... STANDBY",
      isFR ? "LIAISON SÉCURISÉE. DÉCRYPTAGE DES DIRECTIVES..." : "UPLINK SECURED. DECRYPTING DAILY DIRECTIVES...",
      isFR ? "BIENVENUE, VICTOR COUTU." : "WELCOME, VICTOR COUTU."
    ];
    let html = "", i = 0;
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
      <div class="nav-section">${this.t('protocol')}</div>
      <button class="nav-item active" id="nav-briefing" onclick="App.navigate('briefing')"><span class="nav-icon">🌅</span><span>${this.t('morning_briefing')}</span></button>
      <button class="nav-item" id="nav-pvt" onclick="App.navigate('pvt')"><span class="nav-icon">⚡</span><span>${this.t('pvt_test')}</span></button>
      <button class="nav-item" id="nav-deepwork" onclick="App.navigate('deepwork')"><span class="nav-icon">🧠</span><span>${this.t('deep_work')}</span></button>
      <button class="nav-item" id="nav-tasks" onclick="App.navigate('tasks')"><span class="nav-icon">📋</span><span>${this.t('task_stack')}</span></button>
      <div class="nav-section" style="margin-top:16px">${this.t('tactical')}</div>
      <button class="nav-item" id="nav-tactical" onclick="App.navigate('tactical')"><span class="nav-icon">🦅</span><span>${this.t('operator_hub')}</span></button>
      <button class="nav-item" id="nav-challenges" onclick="App.navigate('challenges')"><span class="nav-icon">🔥</span><span>${this.t('the_crucible')}</span></button>
      <button class="nav-item" id="nav-skills" onclick="App.navigate('skills')"><span class="nav-icon">🧠</span><span>${this.t('skill_tree')}</span></button>
      <button class="nav-item" id="nav-missions" onclick="App.navigate('missions')"><span class="nav-icon">🗺️</span><span>${this.t('mission_command')}</span></button>
      <button class="nav-item" id="nav-intel" onclick="App.navigate('intel')"><span class="nav-icon">📁</span><span>${this.t('intel_archives')}</span></button>
      <div class="nav-section" style="margin-top:16px">${this.t('analytics')}</div>
      <button class="nav-item" id="nav-dashboard" onclick="App.navigate('dashboard')"><span class="nav-icon">📊</span><span>${this.t('pilot_log')}</span></button>
      <div id="readiness-hud-container"></div>
      <div class="nav-section" style="margin-top:16px">${this.t('system')}</div>
      <button class="nav-item" id="nav-settings" onclick="App.navigate('settings')"><span class="nav-icon">⚙️</span><span>${this.t('settings')}</span></button>
      <div class="sidebar-spacer"></div>
      <div class="sidebar-profile" onclick="App.navigate('settings')" style="padding:20px;border-top:1px solid var(--border);background:var(--bg2)">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <div style="font-weight:700">${p.name || this.t('pilot')}</div>
          <div style="font-size:12px;font-weight:800;color:var(--accent)" id="user-rank">${this._lang === 'fr' ? 'Élève-Officier' : 'Officer Cadet'}</div>
        </div>
        <div class="progress-bar-bg" style="height:6px;margin-bottom:8px">
          <div id="user-xp-bar" style="height:100%;background:var(--accent);border-radius:99px;width:0%"></div>
        </div>
        <div style="font-size:12px;color:var(--text3);display:flex;justify-content:space-between">
          <span>Target: ${p.rcafYear || 2031}</span>
          <span id="user-xp-text" style="font-weight:700">0 XP</span>
        </div>
      </div>
    </nav>
    <main class="main">
      <div class="screen active" id="screen-content"></div>
    </main>
    <div class="toast" id="toast"></div>`;
  },

  navigate(screen, params = {}) {
    if (this._current === 'pvt') PVT.reset();
    this._current = screen;
    this._briefingData = { ...this._briefingData, ...params };
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const navEl = document.getElementById(`nav-${screen}`);
    if (navEl) navEl.classList.add('active');
    const content = document.getElementById('screen-content');
    if (!content) return;
    content.innerHTML = this._renderScreen(screen);
    if (screen === 'pvt') PVT.afterRender();
    if (screen === 'deepwork') DeepWork.afterRender();
    if (screen === 'dashboard') Dashboard.afterRender();
    if (screen === 'tactical') Tactical.afterRender();
    if (screen === 'challenges') Challenges.afterRender();
    if (screen === 'skills') Skills.afterRender();
    if (window.Readiness) document.getElementById('readiness-hud-container').innerHTML = Readiness.renderFuelGauge();
    this.updateXP();
  },

  _renderScreen(screen) {
    switch (screen) {
      case 'briefing': return this._renderBriefing();
      case 'pvt': return PVT.render();
      case 'deepwork': return DeepWork.render();
      case 'tasks': return Tasks.render();
      case 'tactical': return Tactical.render();
      case 'challenges': return Challenges.render();
      case 'skills': return Skills.render();
      case 'missions': return Missions.render();
      case 'intel': return Intel.render();
      case 'dashboard': return Dashboard.render();
      case 'settings': return Account.renderSettings();
      default: return '<div style="padding:40px;color:var(--text3)">Screen not found</div>';
    }
  },

  updateXP() {
    const xp = parseInt(DB.get('total_xp', 0)) || 0;
    const isFR = this._lang === 'fr';
    const ranks = [
      { name: isFR ? 'Élève-Officier' : 'Officer Cadet', req: 0 },
      { name: isFR ? 'Sous-Lieutenant' : 'Second Lieutenant', req: 1000 },
      { name: isFR ? 'Lieutenant' : 'Lieutenant', req: 2500 },
      { name: isFR ? 'Capitaine' : 'Captain', req: 5000 },
      { name: isFR ? 'Major' : 'Major', req: 10000 },
      { name: isFR ? 'Lieutenant-Colonel' : 'Lt. Colonel', req: 25000 },
      { name: isFR ? 'Colonel' : 'Colonel', req: 50000 }
    ];
    let currentRank = ranks[0];
    let nextRank = ranks[1];
    for (let i = 0; i < ranks.length; i++) {
      if (xp >= ranks[i].req) { currentRank = ranks[i]; nextRank = ranks[i+1] || ranks[i]; }
    }
    const xpEl = document.getElementById('user-xp-bar');
    const rankEl = document.getElementById('user-rank');
    const textEl = document.getElementById('user-xp-text');
    if (xpEl && rankEl && textEl) {
      rankEl.textContent = currentRank.name;
      textEl.textContent = `${xp} XP`;
      if (nextRank.req > currentRank.req) {
        xpEl.style.width = `${((xp - currentRank.req) / (nextRank.req - currentRank.req)) * 100}%`;
      } else xpEl.style.width = `100%`;
    }
  },

  _renderBriefing() {
    const pvt = this._briefingData.pvtResult;
    const profile = Account.get() || {};
    const today = DB.today();
    const isFR = this._lang === 'fr';
    const hour = new Date().getHours();
    const greeting = this.t(hour < 12 ? 'good_morning' : hour < 17 ? 'good_afternoon' : 'good_evening');

    if (!pvt) {
      const schedule = [
        { time: '06:00', title: isFR ? 'Réveil' : 'Wake-Up' },
        { time: '06:10', title: 'PVT + Morning Brief' },
        { time: '06:10 – 09:00', title: isFR ? 'Bloc Travail Profond' : 'Deep Work Block' },
        { time: '22:00', title: isFR ? 'Protocole Sommeil' : 'Sleep Protocol' },
      ];
      return `
      <div class="page-header">
        <div class="page-title">${greeting}, <span>${(profile.name || this.t('pilot')).split(' ')[0]}</span></div>
        <div class="page-sub">${today} · ${this.t('rcaf_pipeline')}</div>
      </div>
      <div class="grid-2" style="gap:24px">
        <div class="card" style="background:linear-gradient(135deg,rgba(79,142,247,.1),rgba(124,92,252,.08))">
          <div style="font-size:15px;font-weight:700;margin-bottom:8px">🚨 ${this.t('system_status')}: ${this.t('pending')}</div>
          <button class="btn btn-primary btn-full" onclick="App.navigate('pvt')">⚡ ${this.t('initiate_pvt')}</button>
        </div>
        <div class="card">
          <div class="card-title">${this.t('sacred_schedule')}</div>
          ${schedule.map(s => `<div class="timeline-item"><div class="timeline-time">${s.time}</div><div class="timeline-content"><div class="timeline-title">${s.title}</div></div></div>`).join('')}
        </div>
      </div>`;
    }

    const pvtScore = Readiness.pvtToScore(pvt.avgMs);
    const result = Readiness.calculate({ hrvDelta: 80, sleepScore: 85, tsbNorm: 75, pvtDelta: pvtScore, rpeInv: 80 });
    const existingToday = (DB.get('readiness_history', [])).some(r => r.date === today);
    if (!existingToday) DB.push('readiness_history', { date: today, ...result, pvtMs: pvt.avgMs, timestamp: Date.now() });
    const color = Readiness.stateColor(result.state);
    const directive = Readiness.directive(result.state);

    return `
    <div class="page-header">
      <div class="page-title">${this.t('readiness_score')}</div>
    </div>
    <div class="grid-2" style="gap:24px">
      <div class="card" style="text-align:center">
        <div style="font-size:52px;font-weight:900;color:${color}">${result.score}</div>
        <div style="font-size:22px;font-weight:800;color:${color}">${result.state.toUpperCase()}</div>
      </div>
      <div class="card">
        <div class="card-title">${this.t('directives')}</div>
        <div style="font-size:15px;font-weight:600">${directive.training}</div>
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

window.addEventListener('DOMContentLoaded', () => App.init());
