// account.js — Profile/Account management

const Account = {
  /** Return current profile or null */
  get() {
    return DB.get('profile');
  },

  /** Save profile */
  save(data) {
    DB.set('profile', { ...data, updatedAt: new Date().toISOString() });
  },

  /** Check if onboarding is needed */
  isSetup() {
    const p = this.get();
    return p && p.name;
  },

  /** Delete account + all data */
  reset() {
    Object.keys(localStorage).filter(k => k.startsWith('pos_')).forEach(k => localStorage.removeItem(k));
  },

  /** Render the onboarding / login screen */
  renderOnboarding() {
    return `
    <div class="onboard-wrap" id="screen-onboard">
      <div class="onboard-card">
        <div class="onboard-logo">
          <div class="logo-big">✈️</div>
          <h1>Performance OS</h1>
          <p>Military-grade personal optimization system</p>
        </div>
        <div class="tab-row">
          <button class="tab-btn active" id="tab-setup" onclick="Account._switchTab('setup')">Setup Profile</button>
          <button class="tab-btn" id="tab-login" onclick="Account._switchTab('login')">Load Profile</button>
        </div>

        <!-- SETUP FORM -->
        <div id="form-setup">
          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input id="ob-name" class="form-input" type="text" placeholder="Victor Coutu" />
          </div>
          <div class="form-group">
            <label class="form-label">Target Year (RCAF Wings)</label>
            <input id="ob-year" class="form-input" type="number" placeholder="2031" min="2025" max="2040" />
          </div>
          <div class="form-group">
            <label class="form-label">Current Age</label>
            <input id="ob-age" class="form-input" type="number" placeholder="16" min="14" max="30" />
          </div>
          <div class="form-group">
            <label class="form-label">Location</label>
            <input id="ob-location" class="form-input" type="text" placeholder="Joliette, QC" />
          </div>
          <div class="form-group">
            <label class="form-label">HRV Baseline (rmssd, optional)</label>
            <input id="ob-hrv" class="form-input" type="number" placeholder="65" />
          </div>
          <div class="form-group">
            <label class="form-label">PVT Baseline Reaction Time (ms, optional)</label>
            <input id="ob-pvtbase" class="form-input" type="number" placeholder="250" />
          </div>
          <button class="btn btn-primary btn-full" onclick="Account._submitSetup()">🚀 Initialize System</button>
        </div>

        <!-- LOAD FORM -->
        <div id="form-login" style="display:none">
          <p style="color:var(--text2);font-size:14px;margin-bottom:24px;line-height:1.6;">
            Your profile is stored locally in this browser. If you've already set up your account on this device, click below to load it.
          </p>
          <button class="btn btn-primary btn-full" onclick="Account._submitLogin()">Load Saved Profile</button>
          <div class="divider"></div>
          <button class="btn btn-ghost btn-full" onclick="Account._switchTab('setup')">Create New Profile</button>
        </div>
      </div>
    </div>`;
  },

  /** Render the account settings panel */
  renderSettings() {
    const p = this.get() || {};
    return `
    <div class="page-header">
      <div class="page-title">Account <span>Settings</span></div>
      <div class="page-sub">Manage your profile and system configuration</div>
    </div>
    <div class="grid-2" style="gap:24px;align-items:start">
      <div class="card">
        <div class="card-title">Profile</div>
        <div class="form-group">
          <label class="form-label">Full Name</label>
          <input id="s-name" class="form-input" value="${p.name || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">Age</label>
          <input id="s-age" class="form-input" type="number" value="${p.age || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">Location</label>
          <input id="s-location" class="form-input" value="${p.location || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">RCAF Target Year</label>
          <input id="s-year" class="form-input" type="number" value="${p.rcafYear || 2031}" />
        </div>
        <button class="btn btn-primary" onclick="Account._saveSettings()">Save Changes</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:20px">
        <div class="card">
          <div class="card-title">Biometric Baselines</div>
          <div class="form-group">
            <label class="form-label">HRV Baseline (rmssd)</label>
            <input id="s-hrv" class="form-input" type="number" value="${p.hrvBaseline || 65}" />
          </div>
          <div class="form-group">
            <label class="form-label">PVT Baseline (ms)</label>
            <input id="s-pvtbase" class="form-input" type="number" value="${p.pvtBaseline || 250}" />
          </div>
          <button class="btn btn-primary" onclick="Account._saveSettings()">Save Baselines</button>
        </div>

        </div>

        <div class="card">
          <div class="card-title" style="color:var(--red)">Danger Zone</div>
          <p style="font-size:13px;color:var(--text2);margin-bottom:16px;">Reset ALL data including profile, PVT history, and readiness logs. This cannot be undone.</p>
          <button class="btn btn-danger" onclick="Account._confirmReset()">Reset All Data</button>
        </div>

        <div class="card">
          <div class="card-title">💾 Data Backup</div>
          <p style="font-size:13px;color:var(--text2);margin-bottom:16px;line-height:1.6;">Link a <strong style="color:var(--text)">save file</strong> on your computer. Every change auto-saves to it silently. Load it back anytime to restore all your stats.</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:10px">
            <button class="btn btn-primary" style="flex:1" onclick="DB.pickSaveFile().then(ok => ok && App.toast('Save file linked! Auto-save active.', 'success'))">📂 Link Save File</button>
            <button class="btn btn-ghost" style="flex:1" onclick="DB.loadFromFile()">⬆ Load Save File</button>
          </div>
          <div class="divider"></div>
          <p style="font-size:11px;color:var(--text3);margin-bottom:10px">Or use a manual one-time export/import:</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap">
            <button class="btn btn-ghost" style="flex:1;font-size:11px" onclick="Account.exportData()">⬇ Export JSON</button>
            <button class="btn btn-ghost" style="flex:1;font-size:11px" onclick="Account._triggerImport()">⬆ Import JSON</button>
          </div>
          <input type="file" id="import-file-input" accept=".json" style="display:none" onchange="Account.importData(event)" />
        </div>
      </div>
    </div>`;
  },

  _switchTab(tab) {
    document.getElementById('form-setup').style.display = tab === 'setup' ? 'block' : 'none';
    document.getElementById('form-login').style.display = tab === 'login' ? 'block' : 'none';
    document.getElementById('tab-setup').classList.toggle('active', tab === 'setup');
    document.getElementById('tab-login').classList.toggle('active', tab === 'login');
  },

  _submitSetup() {
    const name = document.getElementById('ob-name').value.trim();
    if (!name) { App.toast('Please enter your name', 'error'); return; }
    this.save({
      name,
      rcafYear: parseInt(document.getElementById('ob-year').value) || 2031,
      age: parseInt(document.getElementById('ob-age').value) || 16,
      location: document.getElementById('ob-location').value.trim() || 'Canada',
      hrvBaseline: parseInt(document.getElementById('ob-hrv').value) || 65,
      pvtBaseline: parseInt(document.getElementById('ob-pvtbase').value) || 250,
    });
    App.toast(`Welcome, ${name}. System initialized.`, 'success');
    setTimeout(() => App.init(), 800);
  },

  _submitLogin() {
    if (this.isSetup()) {
      App.toast(`Welcome back, ${this.get().name}`, 'success');
      setTimeout(() => App.init(), 500);
    } else {
      App.toast('No saved profile found. Please set up a new profile.', 'error');
      this._switchTab('setup');
    }
  },

  _saveSettings() {
    const p = this.get() || {};
    this.save({
      ...p,
      name: document.getElementById('s-name').value.trim() || p.name,
      age: parseInt(document.getElementById('s-age').value) || p.age,
      location: document.getElementById('s-location').value.trim() || p.location,
      rcafYear: parseInt(document.getElementById('s-year').value) || p.rcafYear,
      hrvBaseline: parseInt(document.getElementById('s-hrv').value) || p.hrvBaseline,
      pvtBaseline: parseInt(document.getElementById('s-pvtbase').value) || p.pvtBaseline,
    });
    App.toast('Settings saved', 'success');
    App.navigate('settings');
  },

  _confirmReset() {
    if (confirm('⚠️ This will permanently delete ALL your Performance OS data. Are you sure?')) {
      this.reset();
      App.toast('All data cleared. Reloading…', 'info');
      setTimeout(() => location.reload(), 1000);
    }
  },

  /** Export all localStorage data as a downloadable JSON file */
  exportData() {
    const allData = {};
    Object.keys(localStorage)
      .filter(k => k.startsWith('pos_'))
      .forEach(k => {
        try { allData[k] = JSON.parse(localStorage.getItem(k)); }
        catch { allData[k] = localStorage.getItem(k); }
      });
    const json = JSON.stringify(allData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const date = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `performance-os-backup-${date}.json`;
    a.click();
    URL.revokeObjectURL(url);
    App.toast('Backup exported successfully!', 'success');
  },

  _triggerImport() {
    document.getElementById('import-file-input').click();
  },

  /** Import a previously exported JSON backup */
  importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        // Validate it looks like a Performance OS backup
        const hasProfile = Object.keys(data).some(k => k === 'pos_profile');
        if (!hasProfile) { App.toast('Invalid backup file — no profile found.', 'error'); return; }
        // Clear existing data first
        Object.keys(localStorage).filter(k => k.startsWith('pos_')).forEach(k => localStorage.removeItem(k));
        // Import all keys
        Object.entries(data).forEach(([k, v]) => localStorage.setItem(k, JSON.stringify(v)));
        App.toast('Backup restored! Reloading…', 'success');
        setTimeout(() => location.reload(), 1000);
      } catch {
        App.toast('Failed to parse backup file.', 'error');
      }
    };
    reader.readAsText(file);
  }
};
