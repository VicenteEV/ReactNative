// src/screens/homeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PgScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PAGOS</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Ver Facturas" onPress={() => navigation.navigate('Facturas')} />
      <Button title="Ver Pagos" onPress={() => navigation.navigate('Pagos')} />
      <Button title="Perfil" onPress={() => navigation.navigate('Perfil')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
