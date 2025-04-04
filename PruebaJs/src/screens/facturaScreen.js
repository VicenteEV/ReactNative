// src/screens/facturaScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PlantillaScreen from '../components/PlantillaScreen';
import colors from '../constants/colors';
import Icon from "react-native-vector-icons/FontAwesome5";

const myIcon = <Icon name = 'file-invoice' color = { colors.black } size={ 24 } />

export default function FaScreen({ navigation }) {
  return (
    <PlantillaScreen>
      <Text style={ styles.title }>Bienvenido a la Pantalla de Facturas </Text>
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
