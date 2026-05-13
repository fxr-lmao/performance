// readiness.js — The Readiness Engine algorithm

const Readiness = {
  /**
   * Score = 0.28*HRV + 0.25*Sleep + 0.20*TSB + 0.15*PVT + 0.12*RPE_inv
   */
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
    return {
      Peak:    { training: 'Full plan · Max intensity', academic: 'Total Capacity' },
      Good:    { training: 'Full plan · −10% intensity', academic: 'Normal Block' },
      Build:   { training: 'Light Aerobic only', academic: '−20% Session' },
      Caution: { training: 'Mobility + Walking only', academic: 'Light Material' },
      Rest:    { training: 'Cancelled', academic: 'Review Only' },
    }[state] || {};
  },

  /** Convert PVT ms to 0-100 score (250ms baseline) */
  pvtToScore(avgMs) {
    if (avgMs <= 200) return 100;
    if (avgMs >= 400) return 0;
    return Math.round(((400 - avgMs) / 200) * 100);
  }
};
