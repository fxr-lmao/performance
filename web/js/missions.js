// missions.js — Operation Command System

const Missions = {
  MISSION_LIST: [
    {
      id: 'op_ghost',
      title: 'Operation: Desert Ghost',
      title_fr: 'Opération : Fantôme du Désert',
      difficulty: 'Hard',
      xp: 2500,
      desc: 'Execute a 48-hour solo survival scenario in an arid environment with minimal tech.',
      desc_fr: 'Exécutez un scénario de survie en solo de 48 heures dans un environnement aride.',
      requirements: {
        skills: ['s1', 's2', 's16'],
        challenges: ['c1', 'c55']
      }
    },
    {
      id: 'op_skyeye',
      title: 'Operation: Skyeye',
      title_fr: 'Opération : Skyeye',
      difficulty: 'Technical',
      xp: 1800,
      desc: 'Master drone-based surveillance and signal interception protocols.',
      desc_fr: 'Maîtrisez les protocoles de surveillance par drone et d\'interception de signaux.',
      requirements: {
        skills: ['s6', 's156', 's157'],
        challenges: ['c6']
      }
    },
    {
      id: 'op_ironman',
      title: 'Operation: Iron Operator',
      title_fr: 'Opération : Opérateur de Fer',
      difficulty: 'Extreme',
      xp: 5000,
      desc: 'Push the limits of human endurance through a multi-stage physiological gauntlet.',
      desc_fr: 'Poussez les limites de l\'endurance humaine via un parcours physiologique multi-étapes.',
      requirements: {
        skills: ['s109', 's110', 's111'],
        challenges: ['c53', 'c56', 'c69']
      }
    },
    {
      id: 'op_serE',
      title: 'Operation: SERE Training',
      title_fr: 'Opération : Entraînement SERE',
      difficulty: 'Elite',
      xp: 3500,
      desc: 'Survival, Evasion, Resistance, and Escape. Test your ability to navigate hostile territory undetected.',
      desc_fr: 'Survie, Évasion, Résistance et Échappement. Testez votre capacité à naviguer en territoire hostile.',
      requirements: {
        skills: ['s37', 's158', 's159'],
        challenges: ['c19', 'c70']
      }
    },
    {
      id: 'op_vanguard',
      title: 'Operation: Digital Vanguard',
      title_fr: 'Opération : Avant-garde Numérique',
      difficulty: 'Master',
      xp: 3000,
      desc: 'Complete an offensive cyber-security operation. Identify vulnerabilities and execute breach protocols.',
      desc_fr: 'Complétez une opération de cybersécurité offensive. Identifiez les vulnérabilités.',
      requirements: {
        skills: ['s166', 's167', 's168'],
        intel: ['sop_4']
      }
    },
    {
      id: 'op_first_responder',
      title: 'Operation: First Responder',
      title_fr: 'Opération : Premier Répondant',
      difficulty: 'Critical',
      xp: 2200,
      desc: 'Simulate a high-stress medical emergency. Stabilize and evacuate multiple casualties.',
      desc_fr: 'Simulez une urgence médicale à haut stress. Stabilisez et évacuez les victimes.',
      requirements: {
        skills: ['s66', 's67', 's68'],
        intel: ['sop_2']
      }
    },
    {
      id: 'op_aviator',
      title: 'Operation: Night Aviator',
      title_fr: 'Opération : Aviateur de Nuit',
      difficulty: 'Hard',
      xp: 2800,
      desc: 'Execute a complex night flight navigation with simulated equipment failure.',
      desc_fr: 'Exécutez une navigation de vol de nuit complexe avec défaillance d\'équipement simulée.',
      requirements: {
        skills: ['s1', 's2', 's3'],
        intel: ['sop_1', 'sop_6']
      }
    },
    {
      id: 'op_arctic',
      title: 'Operation: Arctic Watch',
      title_fr: 'Opération : Veille Arctique',
      difficulty: 'Extreme',
      xp: 4500,
      desc: 'Coordinate search and rescue operations in sub-zero environments.',
      desc_fr: 'Coordonnez des opérations de recherche et sauvetage en milieu arctique.',
      requirements: {
        skills: ['s20', 's21', 's22'],
        challenges: ['c3_1', 'c3_5']
      }
    },
    {
      id: 'op_stealth',
      title: 'Operation: Silent Shadow',
      title_fr: 'Opération : Ombre Silencieuse',
      difficulty: 'Elite',
      xp: 3200,
      desc: 'Infiltrate and extract high-value data from a secure facility without detection.',
      desc_fr: 'Infiltrez et extrayez des données d\'une installation sécurisée.',
      requirements: {
        skills: ['s166', 's167'],
        challenges: ['c2_10', 'c2_11']
      }
    },
    {
      id: 'op_mountain',
      title: 'Operation: High Peak',
      title_fr: 'Opération : Sommet Élevé',
      difficulty: 'Technical',
      xp: 2400,
      desc: 'Master high-altitude navigation and physiological management.',
      desc_fr: 'Maîtrisez la navigation à haute altitude.',
      requirements: {
        skills: ['s45', 's46', 's47'],
        intel: ['sop_5']
      }
    }
  ],

  _expandedMissions: {},

  toggleMission(id) {
    this._expandedMissions[id] = !this._expandedMissions[id];
    App.navigate('missions');
  },

  render() {
    const completedMissions = DB.get('completed_missions', []);
    const learnedSkills = DB.get('learned_skills', []);
    const completedChallenges = DB.get('completed_challenges', []);
    const masteredIntel = DB.get('mastered_intel', []);
    const isFR = App._lang === 'fr';

    let html = `
    <div class="page-header">
      <div class="page-title">${isFR ? 'Commandement de' : 'Operation'} <span>${isFR ? 'Mission' : 'Command'}</span></div>
      <div class="page-sub">${isFR ? 'Combinez compétences, défis et maîtrise intel dans des opérations tactiques.' : 'Combine skills, challenges, and intel mastery into multi-stage tactical operations.'}</div>
    </div>
    
    <div class="grid-2" style="gap:24px">`;

    this.MISSION_LIST.forEach(m => {
      const isDone = completedMissions.includes(m.id);
      const isExp = this._expandedMissions[m.id];
      const title = isFR ? m.title_fr : m.title;
      const desc = isFR ? m.desc_fr : m.desc;
      
      const skillReqs = m.requirements.skills || [];
      const chalReqs = m.requirements.challenges || [];
      const intelReqs = m.requirements.intel || [];
      const totalReqs = skillReqs.length + chalReqs.length + intelReqs.length;
      
      const skillsMet = skillReqs.filter(id => learnedSkills.includes(id)).length;
      const chalsMet = chalReqs.filter(id => completedChallenges.includes(id)).length;
      const intelMet = intelReqs.filter(id => masteredIntel.includes(id)).length;
      const totalMet = skillsMet + chalsMet + intelMet;
      
      const pct = Math.round((totalMet / totalReqs) * 100);
      const isLocked = totalMet < totalReqs && !isDone;

      html += `
      <div class="card ${!isDone && !isLocked ? 'mission-available' : ''}" 
           style="border-color:${isDone ? 'var(--green)' : (isLocked ? 'var(--border)' : 'var(--accent)')}; position:relative; overflow:hidden; transition: all 0.3s ease; cursor:pointer"
           onclick="Missions.toggleMission('${m.id}')">
        
        ${isDone ? `<div style="position:absolute; top:0; right:0; background:var(--green); color:#000; padding:4px 12px; font-weight:900; font-size:10px">${App.t('mission_accomplished')}</div>` : ''}
        
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px">
          <div>
            <div style="font-size:10px; color:var(--text3); font-weight:800; letter-spacing:1px; text-transform:uppercase">${m.difficulty} Priority</div>
            <div class="card-title">${title}</div>
          </div>
          <div style="font-weight:900; color:var(--accent); font-size:16px">+${m.xp} XP</div>
        </div>
        
        <div style="font-size:13px; color:var(--text2); margin-bottom:20px; line-height:1.5">${desc}</div>
        
        <div style="margin-bottom:16px">
          <div style="display:flex; justify-content:space-between; font-size:11px; font-weight:700; margin-bottom:6px">
            <span>OBJECTIVE PROGRESS</span>
            <span>${pct}%</span>
          </div>
          <div class="progress-bar-bg" style="height:6px; background:rgba(255,255,255,0.05)"><div style="width:${pct}%; height:100%; background:${isDone ? 'var(--green)' : 'var(--accent)'}; border-radius:4px; transition: width 1s cubic-bezier(0.4, 0, 0.2, 1)"></div></div>
        </div>

        <div id="mission-details-${m.id}" style="display:${isExp ? 'block' : 'none'}; animation: slideInUp 0.3s ease">
          <div style="background:var(--bg2); padding:16px; border-radius:8px; margin-bottom:16px; border:1px solid rgba(255,255,255,0.05)">
            <div style="font-size:10px; font-weight:800; color:var(--text3); margin-bottom:12px; text-transform:uppercase; letter-spacing:1px">${App.t('requirement_breakdown')}</div>
            
            <div style="display:flex; flex-direction:column; gap:8px">
              ${skillReqs.map(id => {
                const s = Skills.SKILL_LIST.find(sk => sk.id === id);
                const met = learnedSkills.includes(id);
                return `<div style="font-size:12px; color:${met ? 'var(--green)' : 'var(--text3)'}; display:flex; justify-content:space-between">
                  <span>${met ? '✅' : '⚪'} ${s ? s.title : id}</span>
                  <span>${met ? App.t('ready') : App.t('locked')}</span>
                </div>`;
              }).join('')}
              
              ${chalReqs.map(id => {
                const c = Challenges.CHALLENGE_LIST.find(ch => ch.id === id);
                const met = completedChallenges.includes(id);
                return `<div style="font-size:12px; color:${met ? 'var(--green)' : 'var(--text3)'}; display:flex; justify-content:space-between">
                  <span>${met ? '✅' : '⚪'} ${c ? c.title : id}</span>
                  <span>${met ? App.t('ready') : App.t('locked')}</span>
                </div>`;
              }).join('')}

              ${intelReqs.map(id => {
                const i = Intel.ARCHIVE.find(it => it.id === id);
                const met = masteredIntel.includes(id);
                return `<div style="font-size:12px; color:${met ? 'var(--green)' : 'var(--text3)'}; display:flex; justify-content:space-between">
                  <span>${met ? '✅' : '🏆'} ${i ? i.title : id}</span>
                  <span>${met ? App.t('mastered') : App.t('not_mastered')}</span>
                </div>`;
              }).join('')}
            </div>
          </div>
        </div>

        <div style="text-align:center; color:var(--text3); font-size:10px; margin-bottom:12px">
          ${isExp ? App.t('click_to_collapse') : App.t('click_to_show')}
        </div>
        
        ${isDone 
          ? `<button class="btn btn-full" style="background:rgba(16,185,129,0.1); color:var(--green); border:1px solid var(--green); cursor:default" onclick="event.stopPropagation()">${App.t('mission_accomplished')}</button>`
          : (isLocked 
            ? `<button class="btn btn-ghost btn-full" style="opacity:0.5; cursor:not-allowed" onclick="event.stopPropagation()">${App.t('objectives_incomplete')}</button>` 
            : `<button class="btn btn-primary btn-full" style="box-shadow: 0 4px 12px rgba(124, 92, 252, 0.3)" onclick="event.stopPropagation(); Missions.completeMission('${m.id}', ${m.xp}, '${title}')">${App.t('execute_mission')}</button>`)
        }
      </div>`;
    });

    html += `</div>`;
    return html;
  },

  completeMission(id, xp, title) {
    let completed = DB.get('completed_missions', []);
    if (completed.includes(id)) return;
    completed.push(id);
    DB.set('completed_missions', completed);
    DB.addXP(xp, `Mission Success: ${title}`);
    App.navigate('missions');
  }
};
