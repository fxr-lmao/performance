import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { MorningBriefing } from './src/screens/MorningBriefing';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#0a0a0a' }}>
      <StatusBar style="light" />
      <MorningBriefing />
    </View>
  );
}
