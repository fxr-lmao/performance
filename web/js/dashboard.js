// dashboard.js — Pilot Log Dashboard with 6 Charts

const Dashboard = {
  render() {
    const profile = Account.get() || {};
    const pvtHistory = DB.get('pvt_history', []);
    const readinessHistory = DB.get('readiness_history', []);
    const dwLog = DB.get('deepwork_log', []);
    const taskCompletions = DB.get('task_completions', []);
    const tasks = DB.get('tasks', []);
    const mathHist = DB.get('math_history', []);
    const rpeHist = DB.get('subj_rpe_history', []);
    const today = DB.today();
    const isFR = App._lang === 'fr';

    const avgPVT = pvtHistory.length ? Math.round(pvtHistory.reduce((a,b) => a+b.avgMs, 0) / pvtHistory.length) : '—';
    const totalDWHours = Math.round(dwLog.reduce((a,b) => a+(b.durationMin||0), 0) / 60);
    const targetYear = profile.rcafYear || 2031;
    const yearsLeft = targetYear - new Date().getFullYear();
    const streak = this._calcStreak(pvtHistory);

    const weekDW = this._last7Days().map(d => {
      const entry = dwLog.find(l => l.date === d);
      return { date: d, minutes: entry ? (entry.durationMin || 0) : 0 };
    });

    const weekReady = this._last7Days().map(d => ({
      date: d,
      score: (readinessHistory.find(r => r.date === d) || {}).score || 0,
      state: (readinessHistory.find(r => r.date === d) || {}).state || null,
    }));

    return `
    <div class="page-header">
      <div class="page-title">${App.t('pilot_log')}</div>
      <div class="page-sub">${isFR ? 'Base de données de performance à long terme · Dossier RCAF' : 'Long-term performance database · RCAF dossier export'}</div>
    </div>

    <!-- KPI Row -->
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-bottom:28px">
      ${[
        { label: isFR ? 'PVT Moyen' : 'Avg PVT RT', value: avgPVT, unit: 'ms' },
        { label: isFR ? 'Heures DW' : 'Deep Work Hours', value: totalDWHours, unit: 'total' },
        { label: isFR ? 'Série PVT' : 'PVT Streak', value: streak, unit: isFR ? 'jours' : 'days' },
        { label: isFR ? 'Tâches Faites' : 'Tasks Done', value: taskCompletions.filter(c => c.date === today).length, unit: isFR ? 'auj' : 'today' },
        { label: 'RCAF ETA', value: yearsLeft > 0 ? yearsLeft : '—', unit: `yr → ${targetYear}` },
      ].map(s => `
      <div class="stat-box">
        <div class="stat-label">${s.label}</div>
        <div class="stat-value" style="font-size:28px">${s.value}</div>
        <div class="stat-unit">${s.unit}</div>
      </div>`).join('')}
    </div>

    <div class="grid-2" style="gap:24px;margin-bottom:24px">
      <div class="card">
        <div class="card-title">${isFR ? 'Temps de Réaction PVT (20 sessions)' : 'PVT Reaction Time (last 20 sessions)'}</div>
        <canvas id="chart-pvt" height="160"></canvas>
      </div>
      <div class="card">
        <div class="card-title">${isFR ? 'Tendance du Score d\'État' : 'Readiness Score Trend'}</div>
        <canvas id="chart-readiness" height="160"></canvas>
      </div>
    </div>

    <div class="grid-2" style="gap:24px;margin-bottom:24px">
      <div class="card">
        <div class="card-title">${isFR ? 'Travail Profond Hebdomadaire (min/jour)' : 'Weekly Deep Work (minutes/day)'}</div>
        <canvas id="chart-dw" height="160"></canvas>
      </div>
      <div class="card">
        <div class="card-title">${isFR ? 'Assiduité Hebdomadaire' : 'Weekly Readiness Compliance'}</div>
        <canvas id="chart-compliance" height="160"></canvas>
      </div>
    </div>

    <div class="grid-2" style="gap:24px;margin-bottom:28px">
      <div class="card">
        <div class="card-title">${isFR ? 'Historique PVT Récent' : 'Recent PVT Sessions'}</div>
        ${pvtHistory.slice(-8).reverse().map(s => `
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border)">
            <div>
              <div style="font-size:13px;font-weight:600">${s.date}</div>
              <div style="font-size:11px;color:var(--text3)">Lapses: ${s.lapses}</div>
            </div>
            <div style="font-size:22px;font-weight:900">${s.avgMs}ms</div>
          </div>`).join('')}
      </div>
      <div class="card">
        <div class="card-title">${isFR ? 'Log d\'État Opérationnel' : 'Readiness State Log'}</div>
        ${readinessHistory.slice(-8).reverse().map(r => `
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border)">
            <div>
              <div style="font-size:13px;font-weight:600">${r.date}</div>
              <div style="font-size:11px;color:var(--text3)">${isFR ? 'Score: ' : 'Score: '}${r.score}</div>
            </div>
            <div style="text-align:right">
              <span class="badge badge-${r.state.toLowerCase()}">${r.state}</span>
            </div>
          </div>`).join('')}
      </div>
    </div>

    <div class="card" style="background:linear-gradient(135deg,rgba(79,142,247,.08),rgba(124,92,252,.08))">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px">
        <div>
          <div style="font-size:18px;font-weight:800;margin-bottom:4px">${isFR ? 'Dossier de Candidature RCAF' : 'RCAF Application Dossier'}</div>
          <div style="font-size:13px;color:var(--text2)">${isFR ? 'Rapport complet pour votre application RCAF ' : 'Complete performance report for your '}${targetYear}</div>
        </div>
        <button class="btn btn-primary" onclick="Dashboard._exportDossier()">📄 ${isFR ? 'Générer Rapport PDF' : 'Generate PDF Report'}</button>
      </div>
    </div>`;
  },

  afterRender() {
    const pvt = DB.get('pvt_history', []);
    const ready = DB.get('readiness_history', []);
    const dw = DB.get('deepwork_log', []);
    const tasks = DB.get('tasks', []);

    if (pvt.length) this._drawLineChart('chart-pvt', pvt.slice(-20), p => p.avgMs, '#4f8ef7', 'ms', { min: 150, max: 500 });
    if (ready.length) this._drawReadinessChart(ready);
    this._drawBarChart('chart-dw', this._last7Days().map(d => {
      const e = dw.find(l => l.date === d);
      return { label: d.slice(5), value: e ? (e.durationMin||0) : 0 };
    }), '#7c5cfc');
    this._drawComplianceChart(ready);
  },

  _last7Days() {
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(); d.setDate(d.getDate() - (6 - i));
      return d.toISOString().slice(0, 10);
    });
  },

  _calcStreak(pvtHistory) {
    if (!pvtHistory.length) return 0;
    const dates = [...new Set(pvtHistory.map(p => p.date))].sort().reverse();
    let streak = 0, cur = new Date();
    for (const d of dates) {
      const expected = new Date(cur); expected.setDate(expected.getDate() - (streak > 0 ? 1 : 0));
      if (d === expected.toISOString().slice(0, 10)) streak++;
      else break;
    }
    return streak;
  },

  _ctx(id, h = 160) {
    const canvas = document.getElementById(id);
    if (!canvas) return null;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return { ctx, W: canvas.offsetWidth, H: h };
  },

  _drawLineChart(id, data, accessor, color, unit, bounds = {}) {
    const c = this._ctx(id); if (!c) return;
    const { ctx, W, H } = c;
    const values = data.map(accessor);
    const minV = bounds.min !== undefined ? bounds.min : Math.min(...values) - 10;
    const maxV = bounds.max !== undefined ? bounds.max : Math.max(...values) + 10;
    const xStep = W / Math.max(data.length - 1, 1);
    const toY = v => H - 20 - ((v - minV) / (maxV - minV || 1)) * (H - 40);
    ctx.clearRect(0, 0, W, H);
    ctx.beginPath(); ctx.strokeStyle = color; ctx.lineWidth = 2;
    data.forEach((p, i) => { i === 0 ? ctx.moveTo(0, toY(accessor(p))) : ctx.lineTo(i * xStep, toY(accessor(p))); });
    ctx.stroke();
  },

  _drawReadinessChart(data) {
    const c = this._ctx('chart-readiness'); if (!c) return;
    const { ctx, W, H } = c;
    const pts = data.slice(-20);
    const xStep = W / Math.max(pts.length - 1, 1);
    const toY = v => H - 20 - (v / 100) * (H - 40);
    ctx.clearRect(0, 0, W, H);
    pts.forEach((p, i) => {
      if (i === 0) return;
      ctx.beginPath(); ctx.strokeStyle = Readiness.stateColor(p.state); ctx.lineWidth = 2.5;
      ctx.moveTo((i-1)*xStep, toY(pts[i-1].score)); ctx.lineTo(i*xStep, toY(p.score)); ctx.stroke();
    });
  },

  _drawBarChart(id, data, color, h = 160) {
    const c = this._ctx(id, h); if (!c) return;
    const { ctx, W, H } = c;
    const values = data.map(d => d.value);
    const maxV = Math.max(...values, 1);
    const barW = (W / data.length) * 0.6;
    const gap = (W / data.length) * 0.4;
    ctx.clearRect(0, 0, W, H);
    data.forEach((d, i) => {
      const x = i * (barW + gap) + gap / 2;
      const barH = (d.value / maxV) * (H - 50);
      ctx.fillStyle = color;
      ctx.fillRect(x, H - 20 - barH, barW, barH);
    });
  },

  _drawComplianceChart(readinessHistory) {
    const days = this._last7Days();
    const data = days.map(d => {
      const r = readinessHistory.find(x => x.date === d);
      return { label: d.slice(5), value: r ? r.score : 0, state: r ? r.state : null };
    });
    const c = this._ctx('chart-compliance'); if (!c) return;
    const { ctx, W, H } = c;
    const barW = (W / data.length) * 0.55;
    const gap = (W / data.length) * 0.45;
    ctx.clearRect(0, 0, W, H);
    data.forEach((d, i) => {
      const x = i * (barW + gap) + gap / 2;
      const barH = d.value > 0 ? (d.value / 100) * (H - 50) : 0;
      ctx.fillStyle = d.state ? Readiness.stateColor(d.state) : '#252535';
      if (barH > 0) ctx.fillRect(x, H-20-barH, barW, barH);
    });
  },

  _exportDossier() {
    const profile = Account.get() || {};
    const pvtHistory = DB.get('pvt_history', []);
    const readinessHistory = DB.get('readiness_history', []);
    const isFR = App._lang === 'fr';
    const html = `<!DOCTYPE html><html><head><title>Dossier RCAF — ${profile.name}</title></head><body>
      <h1>${isFR ? '✈️ Dossier de Performance RCAF' : '✈️ RCAF Performance Dossier'}</h1>
      <p><strong>${isFR ? 'Candidat' : 'Candidate'}:</strong> ${profile.name}</p>
      <p><strong>${isFR ? 'Cible' : 'Target'}:</strong> RCAF ${profile.rcafYear}</p>
      <h2>CNS / PVT</h2>
      <ul>${pvtHistory.map(s => `<li>${s.date}: ${s.avgMs}ms</li>`).join('')}</ul>
      <h2>Readiness</h2>
      <ul>${readinessHistory.map(r => `<li>${r.date}: ${r.score} (${r.state})</li>`).join('')}</ul>
    </body></html>`;
    const win = window.open('', '_blank');
    win.document.write(html); win.document.close(); win.print();
  }
};
