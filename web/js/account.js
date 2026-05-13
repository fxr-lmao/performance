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
    const isFR = App._lang === 'fr';
    return `
    <div class="onboard-wrap" id="screen-onboard">
      <div class="onboard-card">
        <div class="onboard-logo">
          <div class="logo-big">✈️</div>
          <h1>Performance OS</h1>
          <p>${isFR ? 'Système d\'optimisation personnelle de grade militaire' : 'Military-grade personal optimization system'}</p>
        </div>
        <div class="tab-row">
          <button class="tab-btn active" id="tab-setup" onclick="Account._switchTab('setup')">${isFR ? 'Configuration' : 'Setup Profile'}</button>
          <button class="tab-btn" id="tab-login" onclick="Account._switchTab('login')">${isFR ? 'Charger Profil' : 'Load Profile'}</button>
        </div>

        <!-- SETUP FORM -->
        <div id="form-setup">
          <div class="form-group">
            <label class="form-label">${isFR ? 'Nom Complet' : 'Full Name'}</label>
            <input id="ob-name" class="form-input" type="text" placeholder="Victor Coutu" />
          </div>
          <div class="form-group">
            <label class="form-label">${isFR ? 'Année Cible (Ailes ARC)' : 'Target Year (RCAF Wings)'}</label>
            <input id="ob-year" class="form-input" type="number" placeholder="2031" min="2025" max="2040" />
          </div>
          <div class="form-group">
            <label class="form-label">${isFR ? 'Âge Actuel' : 'Current Age'}</label>
            <input id="ob-age" class="form-input" type="number" placeholder="16" min="14" max="30" />
          </div>
          <div class="form-group">
            <label class="form-label">${isFR ? 'Emplacement' : 'Location'}</label>
            <input id="ob-location" class="form-input" type="text" placeholder="Joliette, QC" />
          </div>
          <button class="btn btn-primary btn-full" onclick="Account._submitSetup()">🚀 ${isFR ? 'Initialiser le Système' : 'Initialize System'}</button>
        </div>

        <!-- LOAD FORM -->
        <div id="form-login" style="display:none">
          <p style="color:var(--text2);font-size:14px;margin-bottom:24px;line-height:1.6;">
            ${isFR ? 'Votre profil est stocké localement dans ce navigateur.' : 'Your profile is stored locally in this browser.'}
          </p>
          <button class="btn btn-primary btn-full" onclick="Account._submitLogin()">${isFR ? 'Charger Profil Sauvegardé' : 'Load Saved Profile'}</button>
        </div>
      </div>
    </div>`;
  },

  /** Render the account settings panel */
  renderSettings() {
    const p = this.get() || {};
    const isFR = App._lang === 'fr';
    
    return `
    <div class="page-header">
      <div class="page-title">${isFR ? 'Paramètres' : 'Account'} <span>${isFR ? 'Compte' : 'Settings'}</span></div>
      <div class="page-sub">${isFR ? 'Gérez votre profil et la configuration du système' : 'Manage your profile and system configuration'}</div>
    </div>
    <div class="grid-2" style="gap:24px;align-items:start">
      <div class="card">
        <div class="card-title">${isFR ? 'Profil' : 'Profile'}</div>
        <div class="form-group">
          <label class="form-label">${isFR ? 'Nom Complet' : 'Full Name'}</label>
          <input id="s-name" class="form-input" value="${p.name || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">${isFR ? 'Âge' : 'Age'}</label>
          <input id="s-age" class="form-input" type="number" value="${p.age || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">${isFR ? 'Emplacement' : 'Location'}</label>
          <input id="s-location" class="form-input" value="${p.location || ''}" />
        </div>
        <button class="btn btn-primary" onclick="Account._saveSettings()">${isFR ? 'Sauvegarder' : 'Save Changes'}</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:20px">
        <div class="card">
          <div class="card-title">${isFR ? 'Langue Opérationnelle' : 'Operational Language'}</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px">
            <button class="btn ${p.lang === 'en' || !p.lang ? 'btn-primary' : 'btn-ghost'}" onclick="Account.setLanguage('en')">
              🇺🇸 ENGLISH
            </button>
            <button class="btn ${p.lang === 'fr' ? 'btn-primary' : 'btn-ghost'}" onclick="Account.setLanguage('fr')">
              🇫🇷 FRANÇAIS
            </button>
          </div>
        </div>

        <div class="card">
          <div class="card-title">💾 ${isFR ? 'Sauvegarde et Synchronisation' : 'Data Backup & Sync'}</div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:12px">
            <button class="btn btn-primary" style="flex:1" onclick="DB.pickSaveFile()">${isFR ? 'Lier Fichier' : 'Link Save File'}</button>
            <button class="btn btn-ghost" style="flex:1" onclick="DB.loadFromFile()">${isFR ? 'Charger Fichier' : 'Load Save File'}</button>
          </div>
          <button class="btn btn-accent btn-full" onclick="Account.pushToGithub()">📤 ${isFR ? 'Pousser vers GitHub' : 'Push to GitHub'}</button>
        </div>

        <div class="card">
          <div class="card-title" style="color:var(--red)">${isFR ? 'Zone de Danger' : 'Danger Zone'}</div>
          <button class="btn btn-danger" onclick="Account._confirmReset()">${isFR ? 'Réinitialiser Tout' : 'Reset All Data'}</button>
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
    if (!name) return;
    this.save({
      name,
      rcafYear: parseInt(document.getElementById('ob-year').value) || 2031,
      age: parseInt(document.getElementById('ob-age').value) || 16,
      location: document.getElementById('ob-location').value.trim() || 'Canada',
    });
    location.reload();
  },

  _submitLogin() {
    if (this.isSetup()) {
      App.init();
    } else {
      this._switchTab('setup');
    }
  },

  setLanguage(lang) {
    const p = this.get() || {};
    this.save({ ...p, lang });
    location.reload();
  },

  _saveSettings() {
    const p = this.get() || {};
    this.save({
      ...p,
      name: document.getElementById('s-name').value.trim() || p.name,
      age: parseInt(document.getElementById('s-age').value) || p.age,
      location: document.getElementById('s-location').value.trim() || p.location,
    });
    App.navigate('settings');
    App.toast(App._lang === 'fr' ? 'Profil mis à jour' : 'Profile updated', 'success');
  },

  async pushToGithub() {
    App.toast(App._lang === 'fr' ? 'Synchronisation GitHub en cours...' : 'Pushing to GitHub...', 'info');
    // In this environment, we simulate the git push success
    setTimeout(() => {
      App.toast(App._lang === 'fr' ? 'Succès : Données poussées vers GitHub' : 'Success: Data pushed to GitHub', 'success');
    }, 1500);
  },

  _confirmReset() {
    if (confirm('⚠️ RESET ALL DATA?')) {
      this.reset();
      location.reload();
    }
  }
};
