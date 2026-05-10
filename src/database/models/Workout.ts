import { Model } from '@nozbe/watermelondb'
import { field, date } from '@nozbe/watermelondb/decorators'

export default class Workout extends Model {
  static table = 'workouts'

  @date('date') date!: Date
  @field('type') type!: string // Runna, Strength, Neck
  @field('planned_duration') plannedDuration!: number
  @field('actual_duration') actualDuration!: number
  @field('intensity_modifier') intensityModifier!: number // -10, -20 etc based on readiness
  @field('completed') completed!: boolean
  @field('rpe') rpe!: number
}
