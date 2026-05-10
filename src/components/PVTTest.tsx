import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface PVTResult {
  averageReactionTime: number;
  lapses: number;
  falseStarts: number;
}

interface PVTTestProps {
  onComplete: (result: PVTResult) => void;
  testDurationMs?: number; // Default 30000 (30s)
}

export const PVTTest: React.FC<PVTTestProps> = ({ onComplete, testDurationMs = 30000 }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(testDurationMs / 1000);
  
  // Use refs for all mutable state that needs to be read inside event handlers
  // to avoid stale closure issues with React state
  const phaseRef = useRef<'idle' | 'waiting' | 'stimulus'>('idle');
  const [displayPhase, setDisplayPhase] = useState<'idle' | 'waiting' | 'stimulus'>('idle');
  
  // Stats
  const reactionTimes = useRef<number[]>([]);
  const lapses = useRef(0);
  const falseStarts = useRef(0);
  
  // Timers and Timestamps
  const stimulusTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const testTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const stimulusStartTime = useRef<number>(0);
  const isRunningRef = useRef(false);

  const clearAllTimers = useCallback(() => {
    if (stimulusTimeout.current) clearTimeout(stimulusTimeout.current);
    if (testTimer.current) clearTimeout(testTimer.current);
    if (countdownInterval.current) clearInterval(countdownInterval.current);
    stimulusTimeout.current = null;
    testTimer.current = null;
    countdownInterval.current = null;
  }, []);

  const setPhase = useCallback((phase: 'idle' | 'waiting' | 'stimulus') => {
    phaseRef.current = phase;
    setDisplayPhase(phase);
  }, []);

  const finishTest = useCallback(() => {
    isRunningRef.current = false;
    setIsRunning(false);
    setPhase('idle');
    clearAllTimers();

    const avgRT = reactionTimes.current.length > 0
      ? reactionTimes.current.reduce((a, b) => a + b, 0) / reactionTimes.current.length
      : 0;

    onComplete({
      averageReactionTime: Math.round(avgRT),
      lapses: lapses.current,
      falseStarts: falseStarts.current,
    });
  }, [onComplete, clearAllTimers, setPhase]);

  const scheduleNextStimulus = useCallback(() => {
    if (!isRunningRef.current) return;
    
    setPhase('waiting');
    
    // Random delay between 2 to 5 seconds
    const delay = Math.random() * 3000 + 2000;
    stimulusTimeout.current = setTimeout(() => {
      if (!isRunningRef.current) return;
      setPhase('stimulus');
      stimulusStartTime.current = Date.now();
    }, delay);
  }, [setPhase]);

  const startTest = useCallback(() => {
    reactionTimes.current = [];
    lapses.current = 0;
    falseStarts.current = 0;
    isRunningRef.current = true;
    setIsRunning(true);
    setTimeLeft(testDurationMs / 1000);

    testTimer.current = setTimeout(finishTest, testDurationMs);
    countdownInterval.current = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    scheduleNextStimulus();
  }, [testDurationMs, finishTest, scheduleNextStimulus]);

  const handleTap = useCallback(() => {
    if (!isRunningRef.current) return;

    const currentPhase = phaseRef.current;

    if (currentPhase === 'waiting') {
      // False start — tapped before stimulus appeared
      falseStarts.current += 1;
      if (stimulusTimeout.current) clearTimeout(stimulusTimeout.current);
      scheduleNextStimulus();
    } else if (currentPhase === 'stimulus') {
      // Valid tap — measure reaction time
      const reactionTime = Date.now() - stimulusStartTime.current;
      reactionTimes.current.push(reactionTime);
      
      if (reactionTime > 500) {
        lapses.current += 1;
      }
      
      scheduleNextStimulus();
    }
  }, [scheduleNextStimulus]);

  useEffect(() => {
    return clearAllTimers;
  }, [clearAllTimers]);

  if (!isRunning) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>PVT Test</Text>
        <Text style={styles.description}>
          When the screen turns RED, tap as fast as you can. The test takes {testDurationMs / 1000} seconds.
        </Text>
        <TouchableOpacity style={styles.startButton} onPress={startTest}>
          <Text style={styles.startButtonText}>Start Test</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <TouchableOpacity 
      activeOpacity={1} 
      style={[styles.testArea, displayPhase === 'stimulus' ? styles.stimulusActive : styles.waiting]} 
      onPress={handleTap}
    >
      <Text style={styles.timerText}>{timeLeft}s</Text>
      {displayPhase === 'stimulus' && <Text style={styles.tapText}>TAP!</Text>}
      {displayPhase === 'waiting' && <Text style={styles.waitText}>Wait...</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#a0a0a0',
    textAlign: 'center',
    marginBottom: 30,
  },
  startButton: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
  },
  startButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  testArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  waiting: {
    backgroundColor: '#1a1a1a',
  },
  stimulusActive: {
    backgroundColor: '#ef4444', // Red stimulus
  },
  timerText: {
    position: 'absolute',
    top: 50,
    color: '#ffffff',
    fontSize: 20,
    opacity: 0.5,
  },
  tapText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  waitText: {
    fontSize: 24,
    color: '#555555',
  }
});
