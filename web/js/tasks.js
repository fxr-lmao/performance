// tasks.js — Task Manager with Priority, Aimed Time, Live Timers

const Tasks = {
  PRIORITIES: [
    { key: 'P0', label: 'P0 — Sleep', color: '#ef4444', icon: '🔴' },
    { key: 'P1', label: 'P1 — School & Deep Work', color: '#f97316', icon: '🟠' },
    { key: 'P2', label: 'P2 — Cadets', color: '#f59e0b', icon: '🟡' },
    { key: 'P3', label: 'P3 — Training', color: '#10b981', icon: '🟢' },
    { key: 'P4', label: 'P4 — Piano & Hobbies', color: '#4f8ef7', icon: '🔵' },
    { key: 'P5', label: 'P5 — Gaming & Leisure', color: '#7c5cfc', icon: '🟣' },
  ],

  CATEGORIES: ['School', 'Cadets', 'Training', 'Deep Work', 'Chess', 'Piano', 'Personal', 'RCAF Prep', 'Other'],

  _editId: null,
  _activeTimerId: null,      // id of the task currently being timed
  _timerInterval: null,      // setInterval handle
  _sessionStart: null,       // Date.now() when current run started

  getAll() { return DB.get('tasks', []); },
  save(tasks) { DB.set('tasks', tasks); },

  // ── helpers ──────────────────────────────────────────────
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

  // ── render ───────────────────────────────────────────────
  render() {
    const all = this.getAll();
    const today = DB.today();
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
        <div class="page-title">Task <span>Stack</span></div>
        <div class="page-sub">${today} · ${completed.length}/${todayTasks.length} complete</div>
      </div>
      <button class="btn btn-primary" onclick="Tasks._openModal()">+ Add Task</button>
    </div>

    <!-- KPI row -->
    <div class="grid-3" style="margin-bottom:20px">
      <div class="stat-box">
        <div class="stat-label">Tasks</div>
        <div class="stat-value">${todayTasks.length}</div>
        <div class="stat-unit">${completed.length} done today</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">Time Spent</div>
        <div class="stat-value" id="total-spent-display" style="font-size:26px">${this._fmtLong(totalSpent)}</div>
        <div class="stat-unit">of ${this._fmtLong(totalAimed)} aimed</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">Progress</div>
        <div class="stat-value">${pct}%</div>
        <div class="stat-unit">of aimed time</div>
      </div>
    </div>

    ${totalAimed > 0 ? `
    <div style="margin-bottom:24px">
      <div class="progress-bar-bg" style="height:8px">
        <div class="progress-bar-fill" id="time-progress-bar" style="width:${pct}%"></div>
      </div>
      <div style="font-size:11px;color:var(--text3);margin-top:6px">${this._fmtLong(totalSpent)} logged out of ${this._fmtLong(totalAimed)} aimed</div>
    </div>` : ''}

    <div class="grid-2" style="gap:24px;align-items:start">
      <!-- Task list -->
      <div>
        <div class="card-title">Today's Stack</div>
        ${todayTasks.length === 0
          ? `<div class="card" style="text-align:center;color:var(--text3);padding:40px">
              <div style="font-size:32px;margin-bottom:8px">📋</div>
              No tasks yet. Hit "+ Add Task" to begin.
            </div>`
          : this._renderTaskList(todayTasks)}
      </div>

      <div style="display:flex;flex-direction:column;gap:20px">
        ${upcoming.length > 0 ? `
        <div>
          <div class="card-title">Upcoming</div>
          ${this._renderTaskList(upcoming, true)}
        </div>` : ''}

        <!-- Time-by-priority summary -->
        <div class="card">
          <div class="card-title">Time Logged by Priority</div>
          ${this.PRIORITIES.map(p => {
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
              ${aimed > 0 ? `<div style="font-size:10px;color:var(--text3);margin-top:3px">${this._fmtLong(aimed)} aimed · ${pct2}%</div>` : ''}
            </div>`;
          }).join('')}
        </div>

        <!-- Priority legend -->
        <div class="card">
          <div class="card-title">Priority Hierarchy</div>
          ${this.PRIORITIES.map(p => `
          <div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--border)">
            <span>${p.icon}</span>
            <span style="font-size:13px;font-weight:600;color:${p.color}">${p.key}</span>
            <span style="font-size:12px;color:var(--text2)">${p.label.split('—')[1].trim()}</span>
          </div>`).join('')}
        </div>
      </div>
    </div>

    <!-- Add/Edit Modal -->
    <div id="task-modal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:200;align-items:center;justify-content:center">
      <div style="background:var(--bg1);border:1px solid var(--border);border-radius:16px;padding:32px;width:100%;max-width:480px;max-height:90vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px">
          <div style="font-size:18px;font-weight:800" id="modal-title">New Task</div>
          <button onclick="Tasks._closeModal()" style="background:none;border:none;color:var(--text3);font-size:20px;cursor:pointer">✕</button>
        </div>
        <div class="form-group">
          <label class="form-label">Task Name</label>
          <input id="t-name" class="form-input" placeholder="e.g. Review Cadet Navigation Theory" />
        </div>
        <div class="grid-2" style="gap:12px">
          <div class="form-group">
            <label class="form-label">Priority</label>
            <select id="t-priority" class="form-input">
              ${this.PRIORITIES.map(p => `<option value="${p.key}">${p.label}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Category</label>
            <select id="t-category" class="form-input">
              ${this.CATEGORIES.map(c => `<option>${c}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="grid-2" style="gap:12px">
          <div class="form-group">
            <label class="form-label">Aimed Time (minutes)</label>
            <input id="t-minutes" class="form-input" type="number" placeholder="45" min="5" max="480" />
          </div>
          <div class="form-group">
            <label class="form-label">Due Date</label>
            <input id="t-due" class="form-input" type="date" value="${today}" />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Notes (optional)</label>
          <textarea id="t-notes" class="form-input" rows="2" placeholder="Any context or subtasks…" style="resize:vertical"></textarea>
        </div>
        <div class="form-group" style="display:flex;align-items:center;gap:10px">
          <input type="checkbox" id="t-recurring" style="width:16px;height:16px;cursor:pointer" />
          <label for="t-recurring" style="font-size:13px;color:var(--text2);cursor:pointer">Recurring daily task</label>
        </div>
        <div style="display:flex;gap:10px;margin-top:8px">
          <button class="btn btn-primary" style="flex:1" onclick="Tasks._saveTask()">Save Task</button>
          <button class="btn btn-ghost" onclick="Tasks._closeModal()">Cancel</button>
        </div>
      </div>
    </div>`;
  },

  // ── Task card ────────────────────────────────────────────
  _renderTaskList(tasks, compact = false) {
    return tasks.map(t => {
      const p = this.PRIORITIES.find(x => x.key === t.priority) || this.PRIORITIES[1];
      const isDone = t.completedOn === DB.today();
      const isActive = this._activeTimerId === t.id;
      const spent = t.timeSpentSeconds || 0;
      const aimed = (t.aimedMinutes || 0) * 60;
      const spentPct = aimed > 0 ? Math.min(100, Math.round((spent / aimed) * 100)) : null;

      return `
      <div style="padding:14px;border-radius:10px;
        background:${isActive ? 'rgba(79,142,247,.06)' : isDone ? 'rgba(16,185,129,.04)' : 'var(--bg2)'};
        border:1px solid ${isActive ? 'var(--accent)' : isDone ? 'rgba(16,185,129,.2)' : 'var(--border)'};
        margin-bottom:8px;transition:all .2s">

        <!-- Top row: checkbox + name + action buttons -->
        <div style="display:flex;align-items:flex-start;gap:10px">
          <!-- Completion circle -->
          <div style="margin-top:2px;flex-shrink:0;cursor:pointer" onclick="Tasks._toggleDone('${t.id}')">
            <div style="width:20px;height:20px;border-radius:50%;border:2px solid ${p.color};
              background:${isDone ? p.color : 'transparent'};display:flex;align-items:center;justify-content:center">
              ${isDone ? '<span style="color:#fff;font-size:10px">✓</span>' : ''}
            </div>
          </div>

          <!-- Name + meta -->
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:600;${isDone ? 'text-decoration:line-through;color:var(--text3)' : ''}">
              ${t.name}
            </div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px;align-items:center">
              <span style="font-size:10px;font-weight:700;color:${p.color};background:${p.color}22;padding:2px 7px;border-radius:99px">${t.priority}</span>
              ${t.category ? `<span style="font-size:11px;color:var(--text3)">${t.category}</span>` : ''}
              ${t.aimedMinutes ? `<span style="font-size:11px;color:var(--text3)">🎯 ${t.aimedMinutes}m aimed</span>` : ''}
              ${t.dueDate && !t.recurring ? `<span style="font-size:11px;color:var(--text3)">${t.dueDate}</span>` : ''}
              ${t.recurring ? `<span style="font-size:10px;color:var(--accent);background:rgba(79,142,247,.1);padding:2px 6px;border-radius:99px">↻ daily</span>` : ''}
            </div>
          </div>

          <!-- Timer + edit/delete -->
          <div style="display:flex;gap:6px;align-items:center;flex-shrink:0">
            <!-- Stopwatch button -->
            <button id="timer-btn-${t.id}"
              onclick="Tasks._toggleTimer('${t.id}')"
              title="${isActive ? 'Pause timer' : 'Start timer'}"
              style="display:flex;align-items:center;gap:5px;padding:6px 10px;border-radius:6px;border:1px solid ${isActive ? 'var(--accent)' : 'var(--border)'};
                background:${isActive ? 'rgba(79,142,247,.15)' : 'transparent'};
                color:${isActive ? 'var(--accent)' : 'var(--text3)'};cursor:pointer;font-size:12px;font-family:var(--mono);font-weight:700;transition:all .15s">
              <span>${isActive ? '⏸' : '▶'}</span>
              <span id="timer-display-${t.id}">${this._fmt(spent)}</span>
            </button>
            <button onclick="Tasks._editTask('${t.id}')" style="background:none;border:none;color:var(--text3);cursor:pointer;font-size:14px;padding:4px" title="Edit">✏️</button>
            <button onclick="Tasks._deleteTask('${t.id}')" style="background:none;border:none;color:var(--text3);cursor:pointer;font-size:14px;padding:4px" title="Delete">🗑</button>
          </div>
        </div>

        <!-- Time progress bar (only if aimed time set) -->
        ${!compact && aimed > 0 ? `
        <div style="margin-top:10px">
          <div class="progress-bar-bg" style="height:4px">
            <div style="height:100%;border-radius:99px;background:${p.color};width:${spentPct}%;transition:width .5s ease"></div>
          </div>
          <div style="display:flex;justify-content:space-between;margin-top:4px">
            <span style="font-size:10px;color:var(--text3)">${this._fmtLong(spent)} spent</span>
            <span style="font-size:10px;color:var(--text3)">${spentPct}% of ${t.aimedMinutes}m goal</span>
          </div>
        </div>` : ''}

        ${!compact && spent > 0 && aimed === 0 ? `
        <div style="margin-top:6px;font-size:11px;color:var(--text3)">⏱ ${this._fmtLong(spent)} logged</div>` : ''}

        ${t.notes && !compact ? `<div style="font-size:12px;color:var(--text3);margin-top:8px;line-height:1.5">${t.notes}</div>` : ''}
      </div>`;
    }).join('');
  },

  // ── Stopwatch logic ──────────────────────────────────────
  _toggleTimer(id) {
    if (this._activeTimerId === id) {
      // Pause current timer
      this._pauseTimer();
    } else {
      // Pause any running timer first
      if (this._activeTimerId) this._pauseTimer();
      // Start new
      this._activeTimerId = id;
      this._sessionStart = Date.now();
      this._timerInterval = setInterval(() => this._tick(), 1000);
      // Update button UI immediately
      const btn = document.getElementById(`timer-btn-${id}`);
      if (btn) {
        btn.style.borderColor = 'var(--accent)';
        btn.style.background = 'rgba(79,142,247,.15)';
        btn.style.color = 'var(--accent)';
        btn.querySelector('span').textContent = '⏸';
      }
      App.toast(`Timer started for task`, 'info');
    }
  },

  _pauseTimer() {
    if (!this._activeTimerId) return;
    clearInterval(this._timerInterval);
    // Commit elapsed seconds to the task
    const elapsed = Math.floor((Date.now() - this._sessionStart) / 1000);
    const tasks = this.getAll();
    const t = tasks.find(x => x.id === this._activeTimerId);
    if (t) {
      t.timeSpentSeconds = (t.timeSpentSeconds || 0) + elapsed;
      this.save(tasks);
    }
    // Update button back to paused state
    const btn = document.getElementById(`timer-btn-${this._activeTimerId}`);
    if (btn && t) {
      btn.style.borderColor = 'var(--border)';
      btn.style.background = 'transparent';
      btn.style.color = 'var(--text3)';
      const spans = btn.querySelectorAll('span');
      spans[0].textContent = '▶';
      spans[1].textContent = this._fmt(t.timeSpentSeconds);
    }
    this._activeTimerId = null;
    this._sessionStart = null;
    this._timerInterval = null;
    // Refresh totals display
    this._refreshTotals();
  },

  _tick() {
    if (!this._activeTimerId || !this._sessionStart) return;
    const tasks = this.getAll();
    const t = tasks.find(x => x.id === this._activeTimerId);
    if (!t) return;
    const sessionSecs = Math.floor((Date.now() - this._sessionStart) / 1000);
    const total = (t.timeSpentSeconds || 0) + sessionSecs;

    // Update the timer display in the button
    const disp = document.getElementById(`timer-display-${this._activeTimerId}`);
    if (disp) disp.textContent = this._fmt(total);

    // Update the per-task progress bar
    const aimed = (t.aimedMinutes || 0) * 60;
    if (aimed > 0) {
      const pct = Math.min(100, Math.round((total / aimed) * 100));
      // Find the progress bar inside the task card — use a data attribute approach
      const bar = document.querySelector(`[data-timer-bar="${this._activeTimerId}"]`);
      if (bar) bar.style.width = `${pct}%`;
    }

    this._refreshTotals();
  },

  _refreshTotals() {
    // Recompute total spent across today's tasks
    const today = DB.today();
    const all = this.getAll();
    const todayTasks = all.filter(t => !t.dueDate || t.dueDate === today || t.recurring);
    let totalSpent = todayTasks.reduce((s, t) => s + (t.timeSpentSeconds || 0), 0);
    // Add live session
    if (this._activeTimerId && this._sessionStart) {
      const activeSecs = Math.floor((Date.now() - this._sessionStart) / 1000);
      const active = todayTasks.find(t => t.id === this._activeTimerId);
      if (active) totalSpent += activeSecs;
    }
    const totalAimed = todayTasks.reduce((s, t) => s + (t.aimedMinutes || 0), 0) * 60;
    const disp = document.getElementById('total-spent-display');
    if (disp) disp.textContent = this._fmtLong(totalSpent);
    if (totalAimed > 0) {
      const bar = document.getElementById('time-progress-bar');
      if (bar) bar.style.width = `${Math.min(100, Math.round((totalSpent / totalAimed) * 100))}%`;
    }
  },

  // ── Modal ─────────────────────────────────────────────────
  _openModal(id = null) {
    this._editId = id;
    const today = DB.today();
    document.getElementById('task-modal').style.display = 'flex';
    if (id) {
      const t = this.getAll().find(x => x.id === id);
      if (t) {
        document.getElementById('modal-title').textContent = 'Edit Task';
        document.getElementById('t-name').value = t.name;
        document.getElementById('t-priority').value = t.priority;
        document.getElementById('t-category').value = t.category || 'Other';
        document.getElementById('t-minutes').value = t.aimedMinutes || '';
        document.getElementById('t-due').value = t.dueDate || today;
        document.getElementById('t-notes').value = t.notes || '';
        document.getElementById('t-recurring').checked = !!t.recurring;
      }
    } else {
      document.getElementById('modal-title').textContent = 'New Task';
      document.getElementById('t-name').value = '';
      document.getElementById('t-priority').value = 'P1';
      document.getElementById('t-category').value = 'School';
      document.getElementById('t-minutes').value = '';
      document.getElementById('t-due').value = today;
      document.getElementById('t-notes').value = '';
      document.getElementById('t-recurring').checked = false;
    }
  },

  _closeModal() {
    document.getElementById('task-modal').style.display = 'none';
    this._editId = null;
  },

  _saveTask() {
    const name = document.getElementById('t-name').value.trim();
    if (!name) { App.toast('Task name required', 'error'); return; }
    const tasks = this.getAll();
    const existing = this._editId ? tasks.find(t => t.id === this._editId) : null;
    const task = {
      id: this._editId || `task_${Date.now()}`,
      name,
      priority: document.getElementById('t-priority').value,
      category: document.getElementById('t-category').value,
      aimedMinutes: parseInt(document.getElementById('t-minutes').value) || 0,
      dueDate: document.getElementById('t-due').value,
      notes: document.getElementById('t-notes').value.trim(),
      recurring: document.getElementById('t-recurring').checked,
      createdAt: existing?.createdAt || Date.now(),
      timeSpentSeconds: existing?.timeSpentSeconds || 0,  // preserve time log
      completedOn: existing?.completedOn || null,
    };
    if (this._editId) {
      tasks[tasks.findIndex(t => t.id === this._editId)] = task;
    } else {
      tasks.push(task);
    }
    this.save(tasks);
    this._closeModal();
    App.toast(this._editId ? 'Task updated' : 'Task added', 'success');
    App.navigate('tasks');
  },

  _toggleDone(id) {
    // Stop timer if running on this task
    if (this._activeTimerId === id) this._pauseTimer();
    const tasks = this.getAll();
    const t = tasks.find(x => x.id === id);
    if (!t) return;
    const today = DB.today();
    t.completedOn = t.completedOn === today ? null : today;
    this.save(tasks);
    App.navigate('tasks');
  },

  _editTask(id) {
    if (this._activeTimerId === id) { App.toast('Pause the timer before editing', 'error'); return; }
    this._openModal(id);
  },

  _deleteTask(id) {
    if (this._activeTimerId === id) this._pauseTimer();
    if (!confirm('Delete this task?')) return;
    this.save(this.getAll().filter(t => t.id !== id));
    App.toast('Task deleted', 'info');
    App.navigate('tasks');
  }
};
