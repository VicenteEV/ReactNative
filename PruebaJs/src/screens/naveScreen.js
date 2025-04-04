// src/screens/homeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PlantillaScreen from '../components/PlantillaScreen';
import colors from '../constants/colors';
import Icon from "react-native-vector-icons/FontAwesome5";

const myIcon = <Icon name = 'warehouse' color = { colors.black } size={ 24 } />

export default function NaScreen({ navigation }) {
  return (
    <PlantillaScreen>
      <Text style={ styles.title }>Bienvenido a la Pantalla de Naves </Text>
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
