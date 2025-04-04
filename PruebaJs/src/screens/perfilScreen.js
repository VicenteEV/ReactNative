// src/screens/homeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PlantillaScreen from '../components/PlantillaScreen';
import colors from '../constants/colors';
import Icon from "react-native-vector-icons/Ionicons";

const myIcon = <Icon name = 'person' color = { colors.black } size={ 24 } />

export default function PfScreen({ navigation }) {
  return (
    <PlantillaScreen>
      <Text style={ styles.title }>Bienvenido a la Pantalla del Perfil </Text>
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
