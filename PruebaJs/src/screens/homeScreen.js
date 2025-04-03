// src/screens/homeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const myIcon = <Icon name="home" size={30} color="#000" />;

export default function DefaultScreen({ navigation }) {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Bienvenido a la Pantalla Principal {myIcon} </Text>
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
