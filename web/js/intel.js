// intel.js — Intel Archives & SOP Repository + Proficiency Quizzes

const Intel = {
  ARCHIVE: [
    {
      id: 'sop_1',
      category: 'Aviation',
      category_fr: 'Aviation',
      title: 'Engine Failure on Takeoff (EFATO)',
      title_fr: 'Panne Moteur au Décollage (EFATO)',
      steps: [
        'Maintain Aircraft Control',
        'Pitch for Best Glide (65 KIAS)',
        'Select Landing Site (Within 30° of nose)',
        'Mixture Idle/Cut-off',
        'Fuel Selector OFF',
        'Ignition Switch OFF',
        'Master Switch OFF'
      ],
      steps_fr: [
        'Garder le contrôle de l\'avion',
        'Assiette pour plané optimal (65 KIAS)',
        'Choisir un site d\'atterrissage (30° du nez)',
        'Mélange sur Étouffoir',
        'Sélecteur de carburant sur OFF',
        'Contact sur OFF',
        'Interrupteur Master sur OFF'
      ],
      xp: 300,
      quiz: [
        { q: "What is the pitch target for best glide in a typical light aircraft (C172)?", q_fr: "Quelle est la vitesse cible pour le meilleur plané (C172) ?", a: "65 KIAS" },
        { q: "Within how many degrees of the nose should you select a landing site?", q_fr: "À combien de degrés du nez max faut-il choisir le site ?", a: "30" },
        { q: "What should be the very first action during an EFATO?", q_fr: "Quelle est la toute première action lors d'un EFATO ?", a: "Maintain Aircraft Control" }
      ]
    },
    {
      id: 'sop_2',
      category: 'Medical',
      category_fr: 'Médical',
      title: 'MARCH Protocol (Trauma)',
      title_fr: 'Protocole MARCH (Traumatisme)',
      steps: [
        'Massive Hemorrhage (Tourniquets)',
        'Airway (Clear obstructions)',
        'Respiration (Seal chest wounds)',
        'Circulation (Check pulse/fluid)',
        'Hypothermia / Head (Keep warm)'
      ],
      steps_fr: [
        'Hémorragie Massive (Garrots)',
        'Voies Respiratoires (Libérer)',
        'Respiration (Plaies thoraciques)',
        'Circulation (Pouls/Fluides)',
        'Hypothermie / Tête (Réchauffer)'
      ],
      xp: 250,
      quiz: [
        { q: "What does the 'M' in MARCH stand for?", q_fr: "Que signifie le 'M' dans MARCH ?", a: "Massive Hemorrhage" },
        { q: "What is the primary tool used for the 'M' phase?", q_fr: "Quel est l'outil principal de la phase 'M' ?", a: "Tourniquet" },
        { q: "Which phase handles chest wounds?", q_fr: "Quelle phase traite les plaies thoraciques ?", a: "Respiration" }
      ]
    },
    {
      id: 'sop_3',
      category: 'Tactical',
      category_fr: 'Tactique',
      title: 'Standard Room Clearing (Fatal Funnel)',
      title_fr: 'Nettoyage de Pièce (Fatal Funnel)',
      steps: [
        'Stack on entry point',
        'Wait for breach signal',
        'Enter and clear corners (Crossover/Buttonhook)',
        'Dominating the room',
        'Status check / Communication'
      ],
      steps_fr: [
        'Positionnement au point d\'entrée',
        'Attente du signal d\'effraction',
        'Entrée et nettoyage des coins',
        'Domination de la pièce',
        'Rapport d\'état / Communication'
      ],
      xp: 200,
      quiz: [
        { q: "What is the high-risk area in a doorway called?", q_fr: "Comment appelle-t-on la zone à haut risque à l'entrée ?", a: "Fatal Funnel" },
        { q: "What are the two common entry techniques?", q_fr: "Quelles sont les deux techniques d'entrée communes ?", a: "Crossover and Buttonhook" }
      ]
    },
    {
      id: 'sop_4',
      category: 'Cyber',
      category_fr: 'Cyber',
      title: 'Incident Response (SANS)',
      title_fr: 'Réponse aux Incidents (SANS)',
      steps: ['Preparation', 'Identification', 'Containment', 'Eradication', 'Recovery', 'Lessons Learned'],
      steps_fr: ['Préparation', 'Identification', 'Confinement', 'Éradication', 'Récupération', 'Leçons Apprises'],
      xp: 200,
      quiz: [
        { q: "What is the first phase of the SANS Incident Response model?", q_fr: "Quelle est la première phase du modèle SANS ?", a: "Preparation" },
        { q: "Which phase focuses on removing the threat from the network?", q_fr: "Quelle phase vise à supprimer la menace du réseau ?", a: "Eradication" }
      ]
    },
    {
      id: 'sop_5',
      category: 'Navigation',
      category_fr: 'Navigation',
      title: 'Lost Procedure (5 Cs)',
      title_fr: 'Procédure en cas d\'Égarement (5 C)',
      steps: [
        'Confess (Admit you are lost)',
        'Climb (Better visibility/radio)',
        'Communicate (Call for help)',
        'Conserve (Fuel)',
        'Comply (Follow instructions)'
      ],
      steps_fr: [
        'Confesser (Admettre être perdu)',
        'Grimper (Visibilité/Radio)',
        'Communiquer (Appeler à l\'aide)',
        'Conserver (Carburant)',
        'Conformer (Suivre instructions)'
      ],
      xp: 150,
      quiz: [
        { q: "What does the first 'C' stand for?", q_fr: "Que signifie le premier 'C' ?", a: "Confess" },
        { q: "Why should you climb when lost?", q_fr: "Pourquoi faut-il grimper ?", a: "Better visibility and radio range" }
      ]
    },
    {
      id: 'sop_6',
      category: 'Survival',
      category_fr: 'Survie',
      title: 'Rule of Threes',
      title_fr: 'Règle des Trois',
      steps: [
        '3 minutes without air',
        '3 hours without shelter (extreme weather)',
        '3 days without water',
        '3 weeks without food'
      ],
      steps_fr: [
        '3 minutes sans air',
        '3 heures sans abri (météo extrême)',
        '3 jours sans eau',
        '3 semaines sans nourriture'
      ],
      xp: 100,
      quiz: [
        { q: "How long can you survive without water?", q_fr: "Combien de temps sans eau ?", a: "3 days" },
        { q: "What is the priority after 3 hours in a storm?", q_fr: "Priorité après 3h de tempête ?", a: "Shelter" }
      ]
    },
    {
      id: 'sop_7',
      category: 'Aviation',
      category_fr: 'Aviation',
      title: 'Radio Comms (4 Ws)',
      title_fr: 'Comms Radio (4 W)',
      steps: [
        'Who you are calling',
        'Who you are',
        'Where you are',
        'What you want'
      ],
      steps_fr: [
        'À qui vous parlez',
        'Qui vous êtes',
        'Où vous êtes',
        'Ce que vous voulez'
      ],
      xp: 100,
      quiz: [
        { q: "What is the 3rd 'W'?", q_fr: "Quel est le 3e 'W' ?", a: "Where you are" }
      ]
    }
  ],

  _activeQuiz: null,
  _quizIndex: 0,

  render() {
    const ingested = DB.get('ingested_intel', []);
    const mastered = DB.get('mastered_intel', []);
    const isFR = App._lang === 'fr';
    
    if (this._activeQuiz) return this.renderQuiz();

    let html = `
    <div class="page-header">
      <div class="page-title">${isFR ? 'Archives' : 'Intel'} <span>${isFR ? 'Intel' : 'Archives'}</span></div>
      <div class="page-sub">${isFR ? 'Ingérez des connaissances critiques, puis passez le quiz pour maîtriser l\'intel.' : 'Ingest critical knowledge, then pass the Proficiency Quiz to master the intel.'}</div>
    </div>
    
    <div class="grid-2" style="gap:24px">`;

    this.ARCHIVE.forEach(intel => {
      const isIngested = ingested.includes(intel.id);
      const isMastered = mastered.includes(intel.id);
      const title = isFR ? intel.title_fr : intel.title;
      const cat = isFR ? intel.category_fr : intel.category;
      const steps = isFR ? intel.steps_fr : intel.steps;
      
      html += `
      <div class="card" style="border-left: 4px solid ${isMastered ? 'var(--green)' : (isIngested ? 'var(--accent)' : 'var(--border)')}">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px">
          <div>
            <div style="font-size:10px; color:var(--text3); font-weight:800; letter-spacing:1px; text-transform:uppercase">${cat} Protocol</div>
            <div class="card-title">${title}</div>
          </div>
          <div style="font-weight:900; color:${isMastered ? 'var(--green)' : 'var(--accent)'}; font-size:12px; background:rgba(255,255,255,0.05); padding:4px 8px; border-radius:4px">
            ${isMastered ? `🏆 ${App.t('mastered')}` : (isIngested ? `📖 ${App.t('ingested')}` : `+${intel.xp} XP`)}
          </div>
        </div>
        
        <div style="margin:16px 0; background:var(--bg2); padding:16px; border-radius:6px; border:1px solid rgba(255,255,255,0.05)">
          ${steps.map((step, i) => `
            <div style="display:flex; gap:12px; margin-bottom:8px; font-size:13px; color:var(--text); line-height:1.4">
              <span style="color:var(--accent); font-weight:900; font-family:'JetBrains Mono', monospace">${i + 1}.</span>
              <span>${step}</span>
            </div>
          `).join('')}
        </div>
        
        <div style="display:flex; gap:12px">
          ${!isIngested 
            ? `<button class="btn btn-primary btn-full" onclick="Intel.ingest('${intel.id}', ${intel.xp}, '${title}')">${App.t('mark_memorized')}</button>`
            : (isMastered 
                ? `<button class="btn btn-full" style="background:rgba(16,185,129,0.1); color:var(--green); border:1px solid var(--green); cursor:default">${App.t('proficiency_verified')}</button>`
                : `<button class="btn btn-accent btn-full" onclick="Intel.startQuiz('${intel.id}')">${App.t('start_quiz')}</button>`)
          }
        </div>
      </div>`;
    });

    html += `</div>`;
    return html;
  },

  renderQuiz() {
    const intel = this.ARCHIVE.find(a => a.id === this._activeQuiz);
    const isFR = App._lang === 'fr';
    const question = intel.quiz[this._quizIndex];
    const qText = isFR ? question.q_fr : question.q;
    const title = isFR ? intel.title_fr : intel.title;
    
    return `
    <div style="max-width:600px; margin:40px auto; animation: slideInUp 0.3s ease">
      <div style="text-align:center; margin-bottom:32px">
        <div style="font-size:12px; color:var(--accent); font-weight:900; letter-spacing:2px; text-transform:uppercase; margin-bottom:8px">${App.t('proficiency_verification')}</div>
        <h1 style="font-size:28px; font-weight:900; margin:0">${title}</h1>
        <div style="font-size:12px; color:var(--text3); margin-top:12px">${App.t('question')} ${this._quizIndex + 1} ${App.t('of')} ${intel.quiz.length}</div>
      </div>
      
      <div class="card" style="padding:40px; border:2px solid var(--accent)">
        <div style="font-size:18px; font-weight:700; color:var(--text); text-align:center; margin-bottom:32px; line-height:1.6">
          ${qText}
        </div>
        
        <input type="text" id="quiz-answer" placeholder="${App.t('enter_terminology')}" autocomplete="off"
               style="width:100%; padding:16px; background:var(--bg2); border:2px solid var(--border); border-radius:8px; color:var(--text); font-size:16px; text-align:center; outline:none; margin-bottom:24px">
        
        <div style="display:flex; gap:12px">
          <button class="btn btn-ghost" style="flex:1" onclick="Intel.cancelQuiz()">${App.t('abort')}</button>
          <button class="btn btn-primary" style="flex:2" onclick="Intel.submitAnswer()">${App.t('submit_verification')}</button>
        </div>
      </div>
    </div>`;
  },

  ingest(id, xp, title) {
    let ingested = DB.get('ingested_intel', []);
    if (ingested.includes(id)) return;
    ingested.push(id);
    DB.set('ingested_intel', ingested);
    DB.addXP(xp, `Intel Ingested: ${title}`);
    App.navigate('intel');
  },

  startQuiz(id) {
    this._activeQuiz = id;
    this._quizIndex = 0;
    App.navigate('intel');
    setTimeout(() => {
        const el = document.getElementById('quiz-answer');
        if (el) el.focus();
    }, 100);
  },

  cancelQuiz() {
    this._activeQuiz = null;
    App.navigate('intel');
  },

  submitAnswer() {
    const intel = this.ARCHIVE.find(a => a.id === this._activeQuiz);
    const question = intel.quiz[this._quizIndex];
    const input = document.getElementById('quiz-answer').value.trim();
    const isCorrect = input.toLowerCase() === question.a.toLowerCase();
    
    if (isCorrect) {
      this._quizIndex++;
      if (this._quizIndex >= intel.quiz.length) {
        this.masterIntel();
      } else {
        App.navigate('intel');
        setTimeout(() => {
            const el = document.getElementById('quiz-answer');
            if (el) el.focus();
        }, 100);
      }
    } else {
      App.toast(App._lang === 'fr' ? "TERMINOLOGIE INCORRECTE. RÉESSAYEZ." : "INCORRECT TERMINOLOGY. RETRY.", "error");
    }
  },

  masterIntel() {
    const intel = this.ARCHIVE.find(a => a.id === this._activeQuiz);
    let mastered = DB.get('mastered_intel', []);
    if (!mastered.includes(intel.id)) {
      mastered.push(intel.id);
      DB.set('mastered_intel', mastered);
      DB.addXP(intel.xp, `Proficiency Mastered: ${intel.title}`);
    }
    this._activeQuiz = null;
    App.navigate('intel');
    App.toast(`${App.t('mastered')}: ${intel.title}`, "success");
  }
};
