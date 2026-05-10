import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import { schema } from './schema'
import Readiness from './models/Readiness'
import PVT from './models/PVT'
import Workout from './models/Workout'

const adapter = new SQLiteAdapter({
  schema,
  // (You might want to comment it out once database is stable)
  jsi: false, // JSI can be enabled later if using expo-sqlite and watermelondb-expo-plugin
  onSetUpError: error => {
    // Database failed to load -- offer the user to reload the app or log out
  }
})

export const database = new Database({
  adapter,
  modelClasses: [
    Readiness,
    PVT,
    Workout,
  ],
})
