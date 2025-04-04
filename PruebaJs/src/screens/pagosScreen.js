// src/screens/homeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PlantillaScreen from '../components/PlantillaScreen';
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from '../constants/colors';

const myIcon = <Icon name = 'payments' color = { colors.black } size={ 24 } />

export default function PgScreen({ navigation }) {
  return (
    <PlantillaScreen>
      <Text style={ styles.title }>Bienvenido a la Pantalla de Pagos </Text>
      {myIcon}
    </PlantillaScreen>
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
