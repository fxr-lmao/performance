// skills.js — Skill Tree

const Skills = {
  SKILL_LIST: __DATA_HERE__,
  
  _expandedCards: {},
  _activeCategory: 'All',

  render() {
    return `
    <div class="page-header">
      <div class="page-title">Skill <span>Tree</span></div>
      <div class="page-sub">Acquire ${this.SKILL_LIST.length} operator-grade capabilities.</div>
    </div>
    
    <div style="display:flex;gap:8px;margin-bottom:24px;overflow-x:auto;padding-bottom:8px" id="skills-filters">
    </div>
    
    <div id="skills-container"></div>
    `;
  },

  afterRender() {
    this._renderFilters();
    this._renderList();
  },

  setFilter(cat) {
    this._activeCategory = cat;
    this._renderFilters();
    this._renderList();
  },

  toggleCard(id) {
    this._expandedCards[id] = !this._expandedCards[id];
    const card = document.getElementById('skill-exp-' + id);
    if (card) {
      card.style.display = this._expandedCards[id] ? 'block' : 'none';
    }
  },

  learnSkill(id, xp, title) {
    let learned = DB.get('learned_skills', []);
    if (learned.includes(id)) return;
    learned.push(id);
    DB.set('learned_skills', learned);
    DB.addXP(xp, `Learned Skill: ${title}`);
    this._renderList();
  },

  _renderFilters() {
    const cats = ['All', ...new Set(this.SKILL_LIST.map(s => s.category))];
    let html = '';
    cats.forEach(c => {
      const isActive = this._activeCategory === c;
      html += `<button class="btn ${isActive ? 'btn-primary' : 'btn-ghost'}" onclick="Skills.setFilter('${c}')" style="white-space:nowrap">${c}</button>`;
    });
    document.getElementById('skills-filters').innerHTML = html;
  },

  _renderList() {
    const learned = DB.get('learned_skills', []);
    
    // Root level: Category buttons
    if (this._activeCategory === 'All') {
      const cats = [...new Set(this.SKILL_LIST.map(s => s.category))];
      let html = '<div class="grid-2" style="gap:24px">';
      cats.forEach(c => {
        const catSkills = this.SKILL_LIST.filter(s => s.category === c);
        const catLearned = catSkills.filter(s => learned.includes(s.id)).length;
        const pct = Math.round((catLearned / catSkills.length) * 100);
        html += `
        <div class="card" style="cursor:pointer;border-color:var(--border);transition:border-color 0.2s" onclick="Skills.setFilter('${c}')" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">
          <div style="font-size:32px;margin-bottom:12px">🌳</div>
          <div class="card-title">${c}</div>
          <div style="font-size:12px;color:var(--text3);margin-top:12px">${catLearned} / ${catSkills.length} Acquired (${pct}%)</div>
          <div class="progress-bar-bg" style="height:6px;margin-top:8px"><div style="height:100%;width:${pct}%;background:var(--accent);border-radius:4px"></div></div>
        </div>`;
      });
      html += '</div>';
      document.getElementById('skills-container').innerHTML = html;
      return;
    }

    // RPG Tree Level
    let filtered = this.SKILL_LIST.filter(s => s.category === this._activeCategory);
    const groups = {};
    filtered.forEach(s => {
      const baseName = s.title.replace(/^(Fundamentals of |Advanced |Mastery of )/, '');
      if (!groups[baseName]) groups[baseName] = [];
      groups[baseName].push(s);
    });

    let html = `
    <style>
      .tree-scroll { overflow-x: auto; padding-bottom: 32px; padding-top: 10px; }
      .tree-row { display: flex; align-items: stretch; margin-bottom: 40px; position: relative; }
      .tree-node-wrapper { display: flex; align-items: center; }
      .tree-node {
        width: 300px; flex-shrink: 0; background: var(--bg); border: 2px solid var(--border); 
        border-radius: 8px; padding: 16px; position: relative; cursor: pointer; transition: all 0.2s;
        display: flex; flex-direction: column;
      }
      .tree-node:hover { border-color: var(--accent); transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); z-index: 10; }
      .tree-node.learned { border-color: var(--green); background: rgba(16,185,129,0.05); }
      .tree-node.locked { opacity: 0.5; filter: grayscale(100%); pointer-events: auto; }
      
      .tree-connector { width: 48px; height: 4px; background: var(--border); flex-shrink: 0; transition: background 0.3s; margin: 0 4px; border-radius: 2px; }
      .tree-connector.active { background: var(--green); box-shadow: 0 0 8px rgba(16,185,129,0.5); }
      .tree-node-title { font-weight: 800; font-size: 15px; margin-bottom: 6px; line-height: 1.3; }
      .tree-node-meta { font-size: 11px; color: var(--text3); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
    </style>
    <div class="tree-scroll"><div style="min-width: max-content;">
    `;

    Object.keys(groups).forEach(base => {
      const sorted = [];
      const f = groups[base].find(s => s.title.startsWith('Fundamentals'));
      const a = groups[base].find(s => s.title.startsWith('Advanced'));
      const m = groups[base].find(s => s.title.startsWith('Mastery'));
      if(f) sorted.push(f);
      if(a) sorted.push(a);
      if(m) sorted.push(m);

      html += '<div class="tree-row">';
      
      sorted.forEach((s, index) => {
        let isLocked = false;
        if (index === 1 && f && !learned.includes(f.id)) isLocked = true;
        if (index === 2 && a && !learned.includes(a.id)) isLocked = true;
        
        const isLearned = learned.includes(s.id);
        const isExp = this._expandedCards[s.id];
        const stateClass = isLearned ? 'learned' : (isLocked ? 'locked' : 'available');
        
        html += `
        <div class="tree-node-wrapper">
          <div class="tree-node ${stateClass}" onclick="Skills.toggleCard('${s.id}')">
            <div style="display:flex;justify-content:space-between;align-items:flex-start">
              <div class="tree-node-title" style="${isLearned ? 'text-decoration:line-through;color:var(--text2)' : ''}">${s.title}</div>
              <div style="color:var(--accent);font-size:12px;font-weight:900;background:rgba(124,92,252,0.1);padding:2px 6px;border-radius:4px">+${s.xp} XP</div>
            </div>
            <div class="tree-node-meta" style="margin-bottom:8px">
              ${isLocked ? '🔒 LOCKED (REQUIRES PREV. TIER)' : (isLearned ? '✅ ACQUIRED' : '▶ AVAILABLE TO LEARN')}
              ${s.cost ? '<span style="color:var(--red);margin-left:8px;background:rgba(239,68,68,0.1);padding:2px 4px;border-radius:2px">💰 COST</span>' : ''}
            </div>
            
            <div id="skill-exp-${s.id}" style="display:${isExp ? 'block' : 'none'};margin-top:12px;padding-top:12px;border-top:1px dashed var(--border)">
              <div style="font-size:13px;color:var(--text2);margin-bottom:12px;line-height:1.4">${s.desc}</div>
              <div style="margin-bottom:8px;background:rgba(0,0,0,0.2);padding:8px;border-radius:4px">
                <div style="margin-bottom:6px"><span style="color:var(--text3);font-size:10px;font-weight:800">TIME:</span> <span style="font-size:12px;font-weight:600;color:var(--text)">${s.time}</span></div>
                <div><span style="color:var(--text3);font-size:10px;font-weight:800">NEEDS:</span> <span style="font-size:12px;font-weight:600;color:var(--text)">${s.needs}</span></div>
              </div>
              
              ${isLearned 
                ? '' 
                : (isLocked ? '<div style="font-size:12px;color:var(--red);text-align:center;padding:8px;background:rgba(239,68,68,0.1);border-radius:4px">Node Locked</div>' : `<button class="btn btn-primary btn-full" style="padding:8px;font-size:13px" onclick="event.stopPropagation(); Skills.learnSkill('${s.id}', ${s.xp}, '${s.title.replace(/'/g, "\\'")}')">Mark as Learned</button>`)
              }
            </div>
            
            <div style="text-align:center;color:var(--text3);font-size:10px;text-transform:uppercase;margin-top:12px;display:${isExp ? 'none' : 'block'}">
              Click for details ▼
            </div>
          </div>
        `;
        
        if (index < sorted.length - 1) {
          const connectorClass = isLearned ? 'active' : '';
          html += `<div class="tree-connector ${connectorClass}"></div>`;
        }
        
        html += `</div>`;
      });
      
      html += '</div>';
    });

    html += `</div></div>`;
    document.getElementById('skills-container').innerHTML = html;
  }
};
