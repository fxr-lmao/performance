import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { TrendGraph } from '../components/TrendGraph';
import { ExportService } from '../services/exportService';

export const PilotLogDashboard: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>PILOT LOG</Text>
          <Text style={styles.subtitle}>LONG-TERM DATABASE & EXPORT</Text>
        </View>

        <TrendGraph />

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>AVG PVT RT</Text>
            <Text style={styles.statValue}>241ms</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>COMPLIANCE</Text>
            <Text style={styles.statValue}>98%</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>RCAF FLIGHT</Text>
            <Text style={styles.statValue}>2031</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.exportButton} 
          onPress={() => ExportService.exportRCAFDossier()}
        >
          <Text style={styles.exportButtonText}>GENERATE RCAF DOSSIER (PDF)</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
    paddingBottom: 50,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    paddingBottom: 20,
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#3b82f6',
    letterSpacing: 2,
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 30,
  },
  statBox: {
    backgroundColor: '#111111',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    width: '30%',
    borderWidth: 1,
    borderColor: '#222222',
  },
  statLabel: {
    color: '#888888',
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statValue: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '900',
  },
  exportButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  exportButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  }
});
