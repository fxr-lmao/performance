// readiness.js — The Readiness Engine algorithm

const Readiness = {
  calculate({ hrvDelta, sleepScore, tsbNorm, pvtDelta, rpeInv }) {
    const clamp = (v) => Math.max(0, Math.min(100, v));
    const score = Math.round(
      0.28 * clamp(hrvDelta) +
      0.25 * clamp(sleepScore) +
      0.20 * clamp(tsbNorm) +
      0.15 * clamp(pvtDelta) +
      0.12 * clamp(rpeInv)
    );
    let state = 'Rest';
    if (score >= 85) state = 'Peak';
    else if (score >= 70) state = 'Good';
    else if (score >= 55) state = 'Build';
    else if (score >= 40) state = 'Caution';
    return { score, state };
  },

  stateColor(state) {
    return { Peak: '#10b981', Good: '#4f8ef7', Build: '#f59e0b', Caution: '#f97316', Rest: '#ef4444' }[state] || '#fff';
  },

  directive(state) {
    const isFR = App._lang === 'fr';
    if (isFR) {
        return {
          Peak:    { training: 'Plan Complet · Intensité Max', academic: 'Capacité Totale' },
          Good:    { training: 'Plan Complet · −10% Intensité', academic: 'Bloc Normal' },
          Build:   { training: 'Aérobie Léger Uniquement', academic: 'Session −20%' },
          Caution: { training: 'Mobilité + Marche Uniquement', academic: 'Matière Légère' },
          Rest:    { training: 'Annulé', academic: 'Révision Uniquement' },
        }[state] || {};
    }
    return {
      Peak:    { training: 'Full plan · Max intensity', academic: 'Total Capacity' },
      Good:    { training: 'Full plan · −10% intensity', academic: 'Normal Block' },
      Build:   { training: 'Light Aerobic only', academic: '−20% Session' },
      Caution: { training: 'Mobility + Walking only', academic: 'Light Material' },
      Rest:    { training: 'Cancelled', academic: 'Review Only' },
    }[state] || {};
  },

  pvtToScore(avgMs) {
    if (avgMs <= 200) return 100;
    if (avgMs >= 400) return 0;
    return Math.round(((400 - avgMs) / 200) * 100);
  },

  getStatus() {
    const scores = DB.get('readiness_history', [{ score: 70 }]);
    const latest = scores[scores.length - 1].score;
    let state = 'Rest';
    if (latest >= 85) state = 'Peak';
    else if (latest >= 70) state = 'Good';
    else if (latest >= 55) state = 'Build';
    else if (latest >= 40) state = 'Caution';
    
    return {
      score: latest,
      state: state,
      isGrounded: latest < 40,
      multiplier: latest < 40 ? 0.5 : (latest >= 85 ? 1.2 : 1.0)
    };
  },

  renderFuelGauge() {
    const status = this.getStatus();
    const color = this.stateColor(status.state);
    const isFR = App._lang === 'fr';
    
    return `
    <div style="margin-top:20px; padding:16px; background:rgba(255,255,255,0.03); border-radius:8px; border:1px solid var(--border)">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px">
        <div style="font-size:10px; font-weight:800; color:var(--text3); letter-spacing:1px; text-transform:uppercase">${isFR ? 'HUD Préparation Pilote' : 'Pilot Readiness HUD'}</div>
        <div style="font-size:10px; font-weight:900; color:${color}; padding:2px 6px; background:rgba(0,0,0,0.3); border-radius:4px">${status.state.toUpperCase()}</div>
      </div>
      
      <div style="display:flex; align-items:center; gap:12px">
        <div style="flex:1; height:8px; background:rgba(255,255,255,0.1); border-radius:4px; overflow:hidden">
          <div style="width:${status.score}%; height:100%; background:${color}; box-shadow: 0 0 10px ${color}80; transition: width 0.5s ease"></div>
        </div>
        <div style="font-family:var(--mono); font-size:14px; font-weight:900; color:${color}">${status.score}%</div>
      </div>
      
      ${status.isGrounded ? `
        <div style="margin-top:12px; padding:8px; background:rgba(239,68,68,0.1); border:1px solid var(--red); border-radius:4px; color:var(--red); font-size:11px; font-weight:800; text-align:center">
          ⚠️ ${isFR ? 'PILOTE CLOUÉ AU SOL : XP -50%' : 'PILOT GROUNDED: XP GAIN REDUCED BY 50%'}
        </div>
      ` : ''}
    </div>`;
  }
};
