// tasks.js — Task Manager with Priority, Aimed Time, Live Timers

const Tasks = {
  getPriorities() {
    const isFR = App._lang === 'fr';
    return [
      { key: 'P0', label: isFR ? 'P0 — Sommeil' : 'P0 — Sleep', color: '#ef4444', icon: '🔴' },
      { key: 'P1', label: isFR ? 'P1 — École & Travail Profond' : 'P1 — School & Deep Work', color: '#f97316', icon: '🟠' },
      { key: 'P2', label: isFR ? 'P2 — Cadets' : 'P2 — Cadets', color: '#f59e0b', icon: '🟡' },
      { key: 'P3', label: isFR ? 'P3 — Entraînement' : 'P3 — Training', color: '#10b981', icon: '🟢' },
      { key: 'P4', label: isFR ? 'P4 — Piano & Hobbies' : 'P4 — Piano & Hobbies', color: '#4f8ef7', icon: '🔵' },
      { key: 'P5', label: isFR ? 'P5 — Jeux & Loisirs' : 'P5 — Gaming & Leisure', color: '#7c5cfc', icon: '🟣' },
    ];
  },

  getCategories() {
    const isFR = App._lang === 'fr';
    return isFR 
      ? ['École', 'Cadets', 'Entraînement', 'Travail Profond', 'Échecs', 'Piano', 'Personnel', 'Prép ARC', 'Autre']
      : ['School', 'Cadets', 'Training', 'Deep Work', 'Chess', 'Piano', 'Personal', 'RCAF Prep', 'Other'];
  },

  _editId: null,
  _activeTimerId: null,
  _timerInterval: null,
  _sessionStart: null,

  getAll() { return DB.get('tasks', []); },
  save(tasks) { DB.set('tasks', tasks); },

  _fmt(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) return `${h}h ${String(m).padStart(2,'0')}m`;
    return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  },

  _fmtLong(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    if (h > 0 && m > 0) return `${h}h ${m}m`;
    if (h > 0) return `${h}h`;
    if (m > 0) return `${m}m`;
    return `${seconds}s`;
  },

  render() {
    const all = this.getAll();
    const today = DB.today();
    const isFR = App._lang === 'fr';
    const priorities = this.getPriorities();
    
    const todayTasks = all
      .filter(t => !t.dueDate || t.dueDate === today || t.recurring)
      .sort((a, b) => parseInt(a.priority.slice(1)) - parseInt(b.priority.slice(1)));
    const upcoming = all.filter(t => t.dueDate && t.dueDate > today)
      .sort((a, b) => a.dueDate.localeCompare(b.dueDate));
    const completed = todayTasks.filter(t => t.completedOn === today);

    const totalAimed   = todayTasks.reduce((s, t) => s + (t.aimedMinutes || 0), 0) * 60;
    const totalSpent   = todayTasks.reduce((s, t) => s + (t.timeSpentSeconds || 0), 0);
    const pct = totalAimed > 0 ? Math.min(100, Math.round((totalSpent / totalAimed) * 100)) : 0;

    return `
    <div class="page-header" style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px">
      <div>
        <div class="page-title">${App.t('task_stack')}</div>
        <div class="page-sub">${today} · ${completed.length}/${todayTasks.length} ${isFR ? 'complétées' : 'complete'}</div>
      </div>
      <button class="btn btn-primary" onclick="Tasks._openModal()">+ ${isFR ? 'Ajouter Tâche' : 'Add Task'}</button>
    </div>

    <div class="grid-3" style="margin-bottom:20px">
      <div class="stat-box">
        <div class="stat-label">Tasks</div>
        <div class="stat-value">${todayTasks.length}</div>
        <div class="stat-unit">${completed.length} ${isFR ? 'faites' : 'done'}</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">${isFR ? 'Temps Passé' : 'Time Spent'}</div>
        <div class="stat-value" id="total-spent-display" style="font-size:26px">${this._fmtLong(totalSpent)}</div>
        <div class="stat-unit">${isFR ? 'sur' : 'of'} ${this._fmtLong(totalAimed)} ${isFR ? 'visés' : 'aimed'}</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">Progress</div>
        <div class="stat-value">${pct}%</div>
        <div class="stat-unit">${isFR ? 'du temps visé' : 'of aimed time'}</div>
      </div>
    </div>

    ${totalAimed > 0 ? `
    <div style="margin-bottom:24px">
      <div class="progress-bar-bg" style="height:8px">
        <div class="progress-bar-fill" id="time-progress-bar" style="width:${pct}%"></div>
      </div>
    </div>` : ''}

    <div class="grid-2" style="gap:24px;align-items:start">
      <div>
        <div class="card-title">${isFR ? 'Pile du Jour' : 'Today\'s Stack'}</div>
        ${todayTasks.length === 0
          ? `<div class="card" style="text-align:center;color:var(--text3);padding:40px">
               <div style="font-size:32px;margin-bottom:8px">📋</div>
               ${isFR ? 'Aucune tâche. Cliquez sur "+ Ajouter Tâche".' : 'No tasks yet. Hit "+ Add Task" to begin.'}
             </div>`
          : this._renderTaskList(todayTasks)}
      </div>

      <div style="display:flex;flex-direction:column;gap:20px">
        ${upcoming.length > 0 ? `
        <div>
          <div class="card-title">${isFR ? 'À Venir' : 'Upcoming'}</div>
          ${this._renderTaskList(upcoming, true)}
        </div>` : ''}

        <div class="card">
          <div class="card-title">${isFR ? 'Temps par Priorité' : 'Time Logged by Priority'}</div>
          ${priorities.map(p => {
            const secs = all.filter(t => t.priority === p.key).reduce((s, t) => s + (t.timeSpentSeconds || 0), 0);
            const aimed = all.filter(t => t.priority === p.key).reduce((s, t) => s + (t.aimedMinutes || 0), 0) * 60;
            const pct2 = aimed > 0 ? Math.min(100, Math.round((secs / aimed) * 100)) : 0;
            return `
            <div style="margin-bottom:14px">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px">
                <span style="font-size:12px;font-weight:700;color:${p.color}">${p.key} <span style="color:var(--text3);font-weight:400">${p.label.split('—')[1].trim()}</span></span>
                <span style="font-size:12px;font-weight:700;color:${p.color}">${this._fmtLong(secs)}</span>
              </div>
              <div class="progress-bar-bg" style="height:5px">
                <div style="height:100%;border-radius:99px;background:${p.color};width:${pct2}%;transition:width .5s ease"></div>
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>
    </div>

    <!-- Modal remains similar but with localized labels -->
    <div id="task-modal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:200;align-items:center;justify-content:center">
      <div style="background:var(--bg1);border:1px solid var(--border);border-radius:16px;padding:32px;width:100%;max-width:480px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px">
          <div style="font-size:18px;font-weight:800" id="modal-title">${isFR ? 'Nouvelle Tâche' : 'New Task'}</div>
          <button onclick="Tasks._closeModal()" style="background:none;border:none;color:var(--text3);font-size:20px;cursor:pointer">✕</button>
        </div>
        <div class="form-group">
          <label class="form-label">${isFR ? 'Nom de la Tâche' : 'Task Name'}</label>
          <input id="t-name" class="form-input" />
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px">
          <div class="form-group">
            <label class="form-label">Priority</label>
            <select id="t-priority" class="form-input" style="background:var(--bg2)">
              ${this.getPriorities().map(p => `<option value="${p.key}">${p.label}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Category</label>
            <select id="t-category" class="form-input" style="background:var(--bg2)">
              ${this.getCategories().map(c => `<option value="${c}">${c}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="form-group" style="margin-top:16px">
          <label class="form-label">${isFR ? 'Temps Visé (min)' : 'Aimed Time (min)'}</label>
          <input id="t-aimed" type="number" class="form-input" value="30" />
        </div>
        <div style="display:flex;gap:10px;margin-top:24px">
          <button class="btn btn-primary" style="flex:1" onclick="Tasks._saveTask()">${isFR ? 'Enregistrer' : 'Save Task'}</button>
          <button class="btn btn-ghost" onclick="Tasks._closeModal()">${isFR ? 'Annuler' : 'Cancel'}</button>
        </div>
      </div>
    </div>`;
  },

  _renderTaskList(tasks, compact = false) {
    const isFR = App._lang === 'fr';
    const priorities = this.getPriorities();
    
    return tasks.map(t => {
      const p = priorities.find(x => x.key === t.priority) || priorities[1];
      const isDone = t.completedOn === DB.today();
      const isActive = this._activeTimerId === t.id;
      const spent = t.timeSpentSeconds || 0;
      const aimed = (t.aimedMinutes || 0) * 60;
      const spentPct = aimed > 0 ? Math.min(100, Math.round((spent / aimed) * 100)) : null;

      return `
      <div style="padding:14px;border-radius:10px;
        background:${isActive ? 'rgba(79,142,247,.06)' : isDone ? 'rgba(16,185,129,.04)' : 'var(--bg2)'};
        border:1px solid ${isActive ? 'var(--accent)' : isDone ? 'rgba(16,185,129,.2)' : 'var(--border)'};
        margin-bottom:8px;">

        <div style="display:flex;align-items:flex-start;gap:10px">
          <div style="margin-top:2px;flex-shrink:0;cursor:pointer" onclick="Tasks._toggleDone('${t.id}')">
            <div style="width:20px;height:20px;border-radius:50%;border:2px solid ${p.color};
              background:${isDone ? p.color : 'transparent'};display:flex;align-items:center;justify-content:center">
              ${isDone ? '✓' : ''}
            </div>
          </div>

          <div style="flex:1">
            <div style="font-size:14px;font-weight:600;${isDone ? 'text-decoration:line-through;color:var(--text3)' : ''}">${t.name}</div>
            <div style="display:flex;gap:6px;margin-top:4px">
              <span style="font-size:10px;font-weight:700;color:${p.color}">${t.priority}</span>
              <span style="font-size:11px;color:var(--text3)">${t.category}</span>
            </div>
          </div>

          <div style="display:flex;gap:6px;align-items:center">
            <button onclick="Tasks._toggleTimer('${t.id}')" style="background:none;border:1px solid var(--border);color:var(--text);padding:4px 8px;border-radius:4px">
              ${isActive ? '⏸' : '▶'} ${this._fmt(spent)}
            </button>
          </div>
        </div>
      </div>`;
    }).join('');
  },

  _toggleTimer(id) {
    if (this._activeTimerId === id) {
      this._pauseTimer();
    } else {
      if (this._activeTimerId) this._pauseTimer();
      this._activeTimerId = id;
      this._sessionStart = Date.now();
      this._timerInterval = setInterval(() => this._tick(), 1000);
      App.navigate('tasks');
    }
  },

  _pauseTimer() {
    if (!this._activeTimerId) return;
    clearInterval(this._timerInterval);
    const elapsed = Math.floor((Date.now() - this._sessionStart) / 1000);
    const tasks = this.getAll();
    const t = tasks.find(x => x.id === this._activeTimerId);
    if (t) {
      t.timeSpentSeconds = (t.timeSpentSeconds || 0) + elapsed;
      this.save(tasks);
    }
    this._activeTimerId = null;
    this._sessionStart = null;
    this._timerInterval = null;
    App.navigate('tasks');
  },

  _tick() {
    this._refreshTotals();
  },

  _refreshTotals() {
    const disp = document.getElementById('total-spent-display');
    if (disp) {
      const today = DB.today();
      const todayTasks = this.getAll().filter(t => !t.dueDate || t.dueDate === today || t.recurring);
      let totalSpent = todayTasks.reduce((s, t) => s + (t.timeSpentSeconds || 0), 0);
      if (this._activeTimerId) {
        totalSpent += Math.floor((Date.now() - this._sessionStart) / 1000);
      }
      disp.textContent = this._fmtLong(totalSpent);
    }
  },

  _openModal(id = null) {
    this._editId = id;
    document.getElementById('task-modal').style.display = 'flex';
  },

  _closeModal() {
    document.getElementById('task-modal').style.display = 'none';
  },

  _saveTask() {
    const name = document.getElementById('t-name').value.trim();
    if (!name) return;
    const tasks = this.getAll();
    tasks.push({
      id: `task_${Date.now()}`,
      name,
      priority: document.getElementById('t-priority').value,
      category: document.getElementById('t-category').value,
      aimedMinutes: parseInt(document.getElementById('t-aimed').value) || 30,
      dueDate: DB.today(),
      timeSpentSeconds: 0
    });
    this.save(tasks);
    this._closeModal();
    App.navigate('tasks');
  },

  _toggleDone(id) {
    const tasks = this.getAll();
    const t = tasks.find(x => x.id === id);
    if (!t) return;
    const today = DB.today();
    t.completedOn = t.completedOn === today ? null : today;
    this.save(tasks);
    App.navigate('tasks');
  }
};
