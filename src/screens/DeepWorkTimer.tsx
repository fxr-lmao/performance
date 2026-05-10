import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const TOTAL_MINUTES = 170; // 2h50m (06:10 to 09:00)

interface DeepWorkTimerProps {
  onFinish?: () => void;
}

export const DeepWorkTimer: React.FC<DeepWorkTimerProps> = ({ onFinish }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [minutesLeft, setMinutesLeft] = useState(TOTAL_MINUTES);
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSecondsLeft((prevSec) => {
          if (prevSec > 0) return prevSec - 1;
          if (minutesLeft > 0) {
            setMinutesLeft((prevMin) => prevMin - 1);
            return 59;
          }
          clearInterval(interval as NodeJS.Timeout);
          return 0;
        });
      }, 1000);
    } else if (!isRunning && secondsLeft !== 0) {
      clearInterval(interval as NodeJS.Timeout);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, minutesLeft, secondsLeft]);

  const progressPercentage = ((TOTAL_MINUTES * 60 - (minutesLeft * 60 + secondsLeft)) / (TOTAL_MINUTES * 60)) * 100;

  const getActiveBlock = () => {
    // Arbitrary splits for the 2h50m block
    const elapsedMinutes = TOTAL_MINUTES - minutesLeft;
    if (elapsedMinutes < 90) return 'CÉGEP - Sciences';
    if (elapsedMinutes < 140) return 'Cadet Theory';
    return 'Chess Calculation';
  };

  const toggleTimer = () => setIsRunning(!isRunning);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DEEP WORK</Text>
        <Text style={styles.subtitle}>06:10 - 09:00</Text>
      </View>

      <View style={styles.timerContainer}>
        <View style={styles.progressCircle}>
          <Text style={styles.timeText}>
            {String(minutesLeft).padStart(2, '0')}:{String(secondsLeft).padStart(2, '0')}
          </Text>
          <Text style={styles.currentTaskText}>{getActiveBlock()}</Text>
        </View>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: `${progressPercentage}%` }]} />
        </View>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity 
          style={[styles.button, isRunning ? styles.pauseButton : styles.startButton]} 
          onPress={toggleTimer}
        >
          <Text style={styles.buttonText}>{isRunning ? 'PAUSE' : 'ENGAGE'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logButton} onPress={onFinish}>
          <Text style={styles.logButtonText}>VIEW PILOT LOG</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tasksContainer}>
        <Text style={styles.taskTitle}>Morning Protocol</Text>
        <View style={styles.taskItem}>
          <Text style={styles.taskDot}>•</Text>
          <Text style={styles.taskName}>CÉGEP - Sciences de la nature (90m)</Text>
        </View>
        <View style={styles.taskItem}>
          <Text style={styles.taskDot}>•</Text>
          <Text style={styles.taskName}>Cadet Theory - Level 3+ (50m)</Text>
        </View>
        <View style={styles.taskItem}>
          <Text style={styles.taskDot}>•</Text>
          <Text style={styles.taskName}>Chess Calculation & Strategy (30m)</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#3b82f6',
    letterSpacing: 2,
    marginTop: 5,
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  progressCircle: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 2,
    borderColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0a0a',
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  timeText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#ffffff',
    fontVariant: ['tabular-nums'],
  },
  currentTaskText: {
    color: '#3b82f6',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textTransform: 'uppercase',
  },
  progressBarBg: {
    width: '100%',
    height: 6,
    backgroundColor: '#1a1a1a',
    borderRadius: 3,
    marginTop: 40,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 3,
  },
  controls: {
    alignItems: 'center',
    marginBottom: 50,
  },
  button: {
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 40,
  },
  startButton: {
    backgroundColor: '#ffffff',
  },
  pauseButton: {
    backgroundColor: '#ef4444',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 2,
    color: '#000000',
  },
  logButton: {
    marginTop: 20,
    paddingVertical: 10,
  },
  logButtonText: {
    color: '#888888',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textDecorationLine: 'underline',
  },
  tasksContainer: {
    backgroundColor: '#111111',
    padding: 20,
    borderRadius: 16,
  },
  taskTitle: {
    color: '#888888',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontSize: 12,
    marginBottom: 15,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  taskDot: {
    color: '#3b82f6',
    fontSize: 20,
    marginRight: 10,
  },
  taskName: {
    color: '#d4d4d4',
    fontSize: 16,
  }
});
