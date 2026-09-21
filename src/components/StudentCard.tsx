import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { StudentProfile } from '../types/student';

interface StudentCardProps {
  student: StudentProfile;
  isActive: boolean;
}

export const StudentCard: React.FC<StudentCardProps> = ({
  student,
  isActive,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
       <Image
  source={require('../../assets/images/campus-pass.jpg')}
  style={styles.avatar}
/>

        <View style={styles.details}>
          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.idNumber}>{student.idNumber}</Text>
          <Text style={styles.program}>{student.program}</Text>
          <Text style={styles.yearLevel}>{student.yearLevel}</Text>
        </View>
      </View>

      <Text style={isActive ? styles.active : styles.inactive}>
        {isActive ? 'STATUS: ACTIVE' : 'STATUS: SUSPENDED'}
      </Text>

      <Text style={styles.campus}>
        Campus: {student.campus}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    gap: 12,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  details: {
    flex: 1,
    gap: 4,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  idNumber: {
    fontSize: 14,
  },

  program: {
    fontSize: 14,
  },

  yearLevel: {
    fontSize: 14,
  },

  active: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  inactive: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  campus: {
    fontSize: 14,
  },
});