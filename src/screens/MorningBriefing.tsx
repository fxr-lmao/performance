import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { PVTTest } from '../components/PVTTest';
import { calculateReadiness, ReadinessResult } from '../utils/readiness';
import { RunnaService, OverriddenWorkout } from '../services/runna';

type BriefingStep = 'intro' | 'pvt' | 'results';

export const MorningBriefing: React.FC = () => {
  const [step, setStep] = useState<BriefingStep>('intro');
  const [readiness, setReadiness] = useState<ReadinessResult | null>(null);
  const [pvtStats, setPvtStats] = useState<{rt: number, lapses: number, falseStarts: number} | null>(null);
  const [workout, setWorkout] = useState<OverriddenWorkout | null>(null);

  const handlePVTComplete = async (result: any) => {
    setPvtStats({
      rt: result.averageReactionTime,
      lapses: result.lapses,
      falseStarts: result.falseStarts
    });

    // Mocking other biometric inputs for now (would normally come from Garmin sync)
    const mockInputs = {
      hrvDelta: 85,
      sleepScore: 90,
      tsbNorm: 75,
      pvtDelta: result.averageReactionTime < 250 ? 95 : 70, // Simplistic conversion
      rpeInv: 80
    };

    const readinessResult = calculateReadiness(mockInputs);
    setReadiness(readinessResult);

    // Fetch and Override Plan
    const planned = await RunnaService.fetchTodayPlan();
    const overridden = RunnaService.applyReadinessOverride(planned, readinessResult.state);
    setWorkout(overridden);

    setStep('results');
  };

  const getIntensityText = (state: string) => {
    switch(state) {
      case 'Peak': return 'Full plan, Max intensity | Total Capacity';
      case 'Good': return 'Full plan, -10% intensity | Normal Block';
      case 'Build': return 'Light Aerobic only | -20% Session';
      case 'Caution': return 'Mobility + Walking only | Light Material';
      case 'Rest': return 'Cancelled | Review Only';
      default: return '';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {step === 'intro' && (
        <View style={styles.centerContent}>
          <Text style={styles.title}>Morning Briefing</Text>
          <Text style={styles.subtitle}>06:00 - Time to execute.</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>1. Biometric Sync (Garmin) ... OK</Text>
            <Text style={styles.cardText}>2. Sleep Analysis ... OK</Text>
            <Text style={styles.cardText}>3. System Readiness ... PENDING</Text>
          </View>
          <TouchableOpacity style={styles.actionButton} onPress={() => setStep('pvt')}>
            <Text style={styles.actionButtonText}>Initiate PVT Test</Text>
          </TouchableOpacity>
        </View>
      )}

      {step === 'pvt' && (
        <PVTTest onComplete={handlePVTComplete} testDurationMs={30000} />
      )}

      {step === 'results' && readiness && pvtStats && (
        <View style={styles.centerContent}>
          <Text style={styles.title}>System Readiness</Text>
          <View style={styles.scoreCircle}>
            <Text style={styles.scoreText}>{readiness.score}</Text>
          </View>
          <Text style={[styles.stateText, { color: getStateColor(readiness.state) }]}>
            STATUS: {readiness.state.toUpperCase()}
          </Text>
          
          <View style={styles.detailsCard}>
            <Text style={styles.detailsTitle}>Directive for Today:</Text>
            <Text style={styles.detailsText}>{getIntensityText(readiness.state)}</Text>
            
            {workout && (
              <View style={styles.workoutBox}>
                <Text style={styles.workoutTitle}>🏋️ {workout.title} ({workout.durationMinutes} min)</Text>
                <Text style={styles.workoutText}>Target: {workout.intensityTarget}</Text>
                {workout.isModified && (
                  <Text style={styles.overrideReason}>⚠️ {workout.overrideReason}</Text>
                )}
              </View>
            )}

            <View style={styles.divider} />
            
            <Text style={styles.detailsTitle}>PVT Diagnostics:</Text>
            <Text style={styles.detailsText}>Avg RT: {pvtStats.rt} ms</Text>
            <Text style={styles.detailsText}>Lapses: {pvtStats.lapses}</Text>
            <Text style={styles.detailsText}>False Starts: {pvtStats.falseStarts}</Text>
          </View>

          <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Proceed to Deep Work')}>
            <Text style={styles.actionButtonText}>Acknowledge & Begin Deep Work</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const getStateColor = (state: string) => {
  switch(state) {
    case 'Peak': return '#10b981'; // green
    case 'Good': return '#3b82f6'; // blue
    case 'Build': return '#f59e0b'; // yellow
    case 'Caution': return '#f97316'; // orange
    case 'Rest': return '#ef4444'; // red
    default: return '#ffffff';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  centerContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#a0a0a0',
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#1a1a1a',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    marginBottom: 40,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
  },
  cardText: {
    color: '#d4d4d4',
    fontSize: 16,
    marginVertical: 5,
    fontFamily: 'monospace',
  },
  actionButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  scoreCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  stateText: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 30,
  },
  detailsCard: {
    backgroundColor: '#1a1a1a',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    marginBottom: 40,
  },
  detailsTitle: {
    color: '#888888',
    fontSize: 12,
    textTransform: 'uppercase',
    marginBottom: 8,
    letterSpacing: 1,
  },
  detailsText: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 5,
  },
  workoutBox: {
    backgroundColor: '#262626',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  workoutTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  workoutText: {
    color: '#a0a0a0',
    fontSize: 14,
    marginBottom: 4,
  },
  overrideReason: {
    color: '#f59e0b',
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#333333',
    marginVertical: 15,
  }
});
