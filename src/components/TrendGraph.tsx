import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export const TrendGraph: React.FC = () => {
  const screenWidth = Dimensions.get('window').width - 40; // padding

  // Mocking longitudinal data for PVT Reaction Time over months/years
  const data = {
    labels: ['2026', '2027', '2028', '2029', '2030', '2031'],
    datasets: [
      {
        data: [260, 255, 248, 242, 239, 235], // Reaction time going down = better
        color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`, // Blue
        strokeWidth: 3
      },
      {
        data: [280, 280, 280, 280, 280, 280], // RCAF Threshold baseline
        color: (opacity = 1) => `rgba(239, 68, 68, ${opacity})`, // Red line
        strokeWidth: 2,
        withDots: false,
      }
    ],
    legend: ["Avg PVT RT (ms)", "RCAF Med Threshold"]
  };

  const chartConfig = {
    backgroundGradientFrom: '#1a1a1a',
    backgroundGradientTo: '#1a1a1a',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    propsForDots: {
      r: "4",
      strokeWidth: "2",
      stroke: "#1a1a1a"
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LONGITUDINAL PVT STABILITY (10YR)</Text>
      <View style={styles.chartContainer}>
        <LineChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
      <Text style={styles.caption}>Trend indicates stable CNS adaptation and reaction time improvement toward the 2031 RMC target.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: '100%',
  },
  title: {
    color: '#888888',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 10,
  },
  chartContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#333333',
    alignItems: 'center',
    paddingTop: 10,
  },
  caption: {
    color: '#a0a0a0',
    fontSize: 12,
    marginTop: 10,
    fontStyle: 'italic',
  }
});
