import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { MorningBriefing } from './src/screens/MorningBriefing';
import { DeepWorkTimer } from './src/screens/DeepWorkTimer';
import { PilotLogDashboard } from './src/screens/PilotLogDashboard';

type AppScreen = 'briefing' | 'deepwork' | 'log';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('briefing');

  return (
    <View style={{ flex: 1, backgroundColor: '#0a0a0a' }}>
      <StatusBar style="light" />
      {currentScreen === 'briefing' && (
        <MorningBriefing onFinish={() => setCurrentScreen('deepwork')} />
      )}
      {currentScreen === 'deepwork' && (
        <DeepWorkTimer onFinish={() => setCurrentScreen('log')} />
      )}
      {currentScreen === 'log' && (
        <PilotLogDashboard />
      )}
    </View>
  );
}
