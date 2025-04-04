// COMPONENTES REUTILIZABLES
import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import colors from '../constants/colors';

export default function BaseScreen({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="white-content"/>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: colors.thistle,
  },
});
