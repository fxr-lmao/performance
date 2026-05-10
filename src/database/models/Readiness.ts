import { Model } from '@nozbe/watermelondb'
import { field, date } from '@nozbe/watermelondb/decorators'

export default class Readiness extends Model {
  static table = 'readiness'

  @date('date') date!: Date
  @field('score') score!: number
  @field('hrv_delta') hrvDelta!: number
  @field('sleep_score') sleepScore!: number
  @field('tsb_norm') tsbNorm!: number
  @field('pvt_delta') pvtDelta!: number
  @field('rpe_inv') rpeInv!: number
  @field('state') state!: string // Peak, Good, Build, Caution, Rest
}
