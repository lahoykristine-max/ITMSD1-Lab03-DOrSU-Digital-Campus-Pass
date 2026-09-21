import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

interface ScanCounterProps {
  count: number;
  onScan: () => void;
  onReset: () => void;
}

export const ScanCounter: React.FC<ScanCounterProps> = ({
  count,
  onScan,
  onReset,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Campus Gate Verification Log</Text>

    <View style={styles.counterDisplay}>
      <Text style={styles.label}>Gate Entry:</Text>
      <Text style={styles.value}>{count}</Text>
    </View>

    <View style={styles.btnRow}>
      <Pressable style={styles.btnPrimary} onPress={onScan}>
        <Text style={styles.btnText}>+1 Scan at Gate</Text>
      </Pressable>

      <Pressable style={styles.btnSecondary} onPress={onReset}>
        <Text style={styles.btnSecText}>Reset Scans</Text>
      </Pressable>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    gap: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  counterDisplay: {
    alignItems: 'center',
    gap: 5,
  },

  label: {
    fontSize: 14,
  },

  value: {
    fontSize: 32,
    fontWeight: 'bold',
  },

  btnRow: {
    flexDirection: 'row',
    gap: 10,
  },

  btnPrimary: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#2b7a78',
    alignItems: 'center',
  },

  btnSecondary: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },

  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },

  btnSecText: {
    fontWeight: 'bold',
  },
});