// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../constants/colors";
import PlantillaScreen from '../components/PlantillaScreen';

const myIcon = <Icon name="home" size={ 24 } color={ colors.black }/>;

export default function DefaultScreen({ navigation }) {
  return (
    <PlantillaScreen>

      <Text style={ styles.title }>Bienvenido a la Pantalla Principal </Text>
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
