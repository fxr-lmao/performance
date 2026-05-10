import { Model } from '@nozbe/watermelondb'
import { field, date } from '@nozbe/watermelondb/decorators'

export default class PVT extends Model {
  static table = 'pvts'

  @date('date') date!: Date
  @field('reaction_time_ms') reactionTimeMs!: number
  @field('lapses') lapses!: number
  @field('false_starts') falseStarts!: number
  @field('readiness_id') readinessId!: string
}
