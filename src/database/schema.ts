import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'readiness',
      columns: [
        { name: 'date', type: 'number', isIndexed: true },
        { name: 'score', type: 'number' },
        { name: 'hrv_delta', type: 'number' },
        { name: 'sleep_score', type: 'number' },
        { name: 'tsb_norm', type: 'number' },
        { name: 'pvt_delta', type: 'number' },
        { name: 'rpe_inv', type: 'number' },
        { name: 'state', type: 'string' }, // Peak, Good, Build, Caution, Rest
      ]
    }),
    tableSchema({
      name: 'pvts',
      columns: [
        { name: 'date', type: 'number', isIndexed: true },
        { name: 'reaction_time_ms', type: 'number' },
        { name: 'lapses', type: 'number' },
        { name: 'false_starts', type: 'number' },
        { name: 'readiness_id', type: 'string', isIndexed: true, isOptional: true }, // Link to daily readiness
      ]
    }),
    tableSchema({
      name: 'workouts',
      columns: [
        { name: 'date', type: 'number', isIndexed: true },
        { name: 'type', type: 'string' }, // Runna, Strength, Neck
        { name: 'planned_duration', type: 'number' },
        { name: 'actual_duration', type: 'number', isOptional: true },
        { name: 'intensity_modifier', type: 'number' }, // -10, -20 etc based on readiness
        { name: 'completed', type: 'boolean' },
        { name: 'rpe', type: 'number', isOptional: true },
      ]
    })
  ]
})
