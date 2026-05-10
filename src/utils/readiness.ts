export interface ReadinessInputs {
  hrvDelta: number;     // e.g., 0 to 100 normalized
  sleepScore: number;   // 0 to 100
  tsbNorm: number;      // 0 to 100 (Training Stress Balance normalized)
  pvtDelta: number;     // 0 to 100 (baseline vs current reaction time)
  rpeInv: number;       // 0 to 100 (Inverse Rate of Perceived Exertion)
}

export type ReadinessState = 'Peak' | 'Good' | 'Build' | 'Caution' | 'Rest';

export interface ReadinessResult {
  score: number;
  state: ReadinessState;
}

/**
 * Calculates the daily readiness score based on the proprietary OS formula.
 * Formula: Score = 0.28*HRV_delta + 0.25*SleepScore + 0.20*TSB_norm + 0.15*PVT_delta + 0.12*RPE_inv
 */
export function calculateReadiness(inputs: ReadinessInputs): ReadinessResult {
  const { hrvDelta, sleepScore, tsbNorm, pvtDelta, rpeInv } = inputs;

  const score = Math.round(
    0.28 * hrvDelta +
    0.25 * sleepScore +
    0.20 * tsbNorm +
    0.15 * pvtDelta +
    0.12 * rpeInv
  );

  let state: ReadinessState = 'Rest';

  if (score >= 85) {
    state = 'Peak';
  } else if (score >= 70) {
    state = 'Good';
  } else if (score >= 55) {
    state = 'Build';
  } else if (score >= 40) {
    state = 'Caution';
  } else {
    state = 'Rest';
  }

  return { score, state };
}
