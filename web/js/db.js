// db.js — LocalStorage-based persistence layer + File System auto-save

const DB = {
  _key: (k) => `pos_${k}`,

  // File System Access API handle (persisted across navigations via IndexedDB)
  _fileHandle: null,
  _saveTimeout: null,

  get(key, fallback = null) {
    try {
      const v = localStorage.getItem(this._key(key));
      return v ? JSON.parse(v) : fallback;
    } catch { return fallback; }
  },

  set(key, value) {
    localStorage.setItem(this._key(key), JSON.stringify(value));
    this._scheduleSave();
  },

  push(key, item) {
    const arr = this.get(key, []);
    arr.push(item);
    this.set(key, arr);
  },

  addXP(amount, reason) {
    const status = (window.Readiness && Readiness.getStatus) ? Readiness.getStatus() : { multiplier: 1.0, isGrounded: false };
    const modifiedAmount = Math.round(amount * status.multiplier);
    
    let xp = parseInt(this.get('total_xp', 0)) || 0;
    xp += modifiedAmount;
    this.set('total_xp', xp);
    
    if (window.App && App.toast) {
      let msg = `+${modifiedAmount} XP: ${reason}`;
      if (status.isGrounded) msg += ' (GROUNDED −50%)';
      else if (status.multiplier > 1.0) msg += ' (PEAK +20%)';
      
      App.toast(msg, status.isGrounded ? 'warning' : 'success');
      if (App.updateXP) App.updateXP();
    }
  },

  del(key) {
    localStorage.removeItem(this._key(key));
    this._scheduleSave();
  },

  today() {
    return new Date().toISOString().slice(0, 10);
  },

  // ── Auto-Save to File ──

  /** Debounced: waits 1.5s after last write, then saves to file */
  _scheduleSave() {
    clearTimeout(this._saveTimeout);
    this._saveTimeout = setTimeout(() => this._writeToFile(), 1500);
  },

  /** Serialize all pos_ keys to JSON and write to the picked file */
  async _writeToFile() {
    if (!this._fileHandle) return; // no file picked yet
    try {
      const allData = {};
      Object.keys(localStorage)
        .filter(k => k.startsWith('pos_'))
        .forEach(k => {
          try { allData[k] = JSON.parse(localStorage.getItem(k)); }
          catch { allData[k] = localStorage.getItem(k); }
        });
      const writable = await this._fileHandle.createWritable();
      await writable.write(JSON.stringify(allData, null, 2));
      await writable.close();
    } catch (err) {
      // User may have revoked permission — silently fail, localStorage still has data
      console.warn('Auto-save failed:', err);
    }
  },

  /** Ask user to pick a save file (call once from Settings) */
  async pickSaveFile() {
    if (!('showSaveFilePicker' in window)) {
      alert('Your browser does not support the File System Access API. Use the manual Export Backup button instead.');
      return;
    }
    try {
      this._fileHandle = await window.showSaveFilePicker({
        suggestedName: 'performance-os-save.json',
        types: [{ description: 'JSON Save File', accept: { 'application/json': ['.json'] } }],
      });
      await this._writeToFile();
      return true;
    } catch { return false; }
  },

  /** Load data from a picked file and restore to localStorage */
  async loadFromFile() {
    if (!('showOpenFilePicker' in window)) {
      alert('Your browser does not support the File System Access API.');
      return;
    }
    try {
      const [handle] = await window.showOpenFilePicker({
        types: [{ description: 'JSON Save File', accept: { 'application/json': ['.json'] } }],
      });
      const file = await handle.getFile();
      const text = await file.text();
      const data = JSON.parse(text);
      const hasProfile = Object.keys(data).some(k => k === 'pos_profile');
      if (!hasProfile) { alert('Invalid save file — no profile found.'); return; }
      Object.keys(localStorage).filter(k => k.startsWith('pos_')).forEach(k => localStorage.removeItem(k));
      Object.entries(data).forEach(([k, v]) => localStorage.setItem(k, JSON.stringify(v)));
      this._fileHandle = handle; // keep handle for future saves
      location.reload();
    } catch {}
  },

  /** One-time migration: fix name if it was set to Victor Fournier */
  _migrate() {
    const profile = this.get('profile');
    if (profile && profile.name === 'Victor Fournier') {
      profile.name = 'Victor Coutu';
      localStorage.setItem(this._key('profile'), JSON.stringify(profile));
      console.log('Migrated profile name to Victor Coutu');
    }
  }
};

// Run migration on load
DB._migrate();
