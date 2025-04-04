// COMPONENTES REUTILIZABLES
import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar, ProgressBarAndroidBase, ScrollView } from 'react-native';
import colors from '../constants/colors';

export default function BaseScreen({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={ styles.scrollContainer } showsVerticalScrollIndicator={false}>
        <StatusBar barStyle="white-content"/>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

// BACKGROUND PANTALLA GENERAL

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginBottom: 30,
    backgroundColor: colors.thistle,
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
    flexGrow: 1, // Permite que el contenido crezca más allá del tamaño de la pantalla
    paddingVertical: 20, // Espaciado para evitar cortes
    marginBottom: 30,
  },
});
