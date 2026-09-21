import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

import { StudentCard } from '../components/StudentCard';
import { ScanCounter } from '../components/ScanCounter';

const student = {
  name: 'Kristine M. Lahoy',
  idNumber: '2024-2487',
  program: 'BS in Information Technology',
  yearLevel: '3rd Year — Section C',
  avatarUrl: 'https://i.pravatar.cc/150?img=12',
  campus: 'Main Campus (Guang-guang, Mati City)',
};

export default function HomeScreen() {
  const [scanCount, setScanCount] = useState<number>(0);
  const [isPassActive, setIsPassActive] = useState<boolean>(true);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>DOrSU Digital Campus Pass</Text>

      <StudentCard
        student={student}
        isActive={isPassActive}
      />

      <ScanCounter
        count={scanCount}
        onScan={() => setScanCount((prev) => prev + 1)}
        onReset={() => setScanCount(0)}
      />

      <View style={styles.toggleRow}>
        <Text style={styles.toggleText}>
          Pass Active
        </Text>

        <Switch
          value={isPassActive}
          onValueChange={setIsPassActive}
        />
      </View>

      <Pressable
        style={styles.button}
        onPress={() => alert('Campus Pass pressed!')}
      >
        <Text style={styles.buttonText}>Open Campus Pass</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 15,
    paddingTop: 50,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },

  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },

  toggleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  button: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#2b7a78',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});