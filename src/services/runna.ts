/**
 * Runna API Integration & Plan Override System
 */

import { ReadinessState } from '../utils/readiness';

export type WorkoutType = 'Intervals' | 'Tempo' | 'Long Run' | 'Easy' | 'Strength' | 'Mobility' | 'Rest';

export interface PlannedWorkout {
  id: string;
  type: WorkoutType;
  title: string;
  durationMinutes: number;
  intensityTarget: string; // e.g., "Zone 4", "RPE 8"
}

export interface OverriddenWorkout extends PlannedWorkout {
  originalType?: WorkoutType;
  overrideReason?: string;
  isModified: boolean;
}

export class RunnaService {
  /**
   * Fetches the weekly training plan from Runna API (or calendar sync).
   * Since Runna has no public API, this usually involves parsing ICS calendars
   * or undocumented endpoints.
   */
  static async fetchTodayPlan(): Promise<PlannedWorkout> {
    console.log('Fetching Runna Plan for today...');
    // Stub implementation
    return {
      id: `runna-${Date.now()}`,
      type: 'Intervals',
      title: 'VO2 Max Intervals',
      durationMinutes: 45,
      intensityTarget: 'Zone 5',
    };
  }

  /**
   * Plan Override System: Modifies the planned workout based on the daily Readiness Score.
   * Enforces the logic specified in the Performance OS Architecture.
   */
  static applyReadinessOverride(workout: PlannedWorkout, readinessState: ReadinessState): OverriddenWorkout {
    const modified: OverriddenWorkout = { ...workout, isModified: false };

    switch (readinessState) {
      case 'Peak':
        // Full plan, Max intensity - no changes
        break;

      case 'Good':
        // Full plan, -10% intensity
        modified.isModified = true;
        modified.intensityTarget = `${workout.intensityTarget} (-10% Pace/Weight)`;
        modified.overrideReason = 'Readiness: GOOD. Auto-regulated intensity drop.';
        break;

      case 'Build':
        // Light Aerobic only, session length reduced
        if (workout.type === 'Intervals' || workout.type === 'Tempo') {
          modified.originalType = workout.type;
          modified.type = 'Easy';
          modified.title = 'Zone 2 Recovery Run';
          modified.intensityTarget = 'Zone 2 (Light Aerobic)';
          modified.isModified = true;
          modified.overrideReason = 'Readiness: BUILD. High-intensity swapped to Z2.';
        }
        modified.durationMinutes = Math.floor(workout.durationMinutes * 0.8); // -20% duration
        break;

      case 'Caution':
        // Mobility + Walking only (auto-swap)
        modified.originalType = workout.type;
        modified.type = 'Mobility';
        modified.title = 'Mobility Flow & Walk';
        modified.durationMinutes = 30;
        modified.intensityTarget = 'Zone 1';
        modified.isModified = true;
        modified.overrideReason = 'Readiness: CAUTION. System fatigue high. Swapped to mobility.';
        break;

      case 'Rest':
        // Cancelled
        modified.originalType = workout.type;
        modified.type = 'Rest';
        modified.title = 'Full Rest Day';
        modified.durationMinutes = 0;
        modified.intensityTarget = 'None';
        modified.isModified = true;
        modified.overrideReason = 'Readiness: REST. CNS critically fatigued. Training cancelled.';
        break;
    }

    return modified;
  }
}
