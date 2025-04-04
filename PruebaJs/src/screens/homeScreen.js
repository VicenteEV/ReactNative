// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../constants/colors";
import PlantillaScreen from '../components/PlantillaScreen';
import SemiCircularProgress from '../components/PorcentajeHome';

const myIcon = <Icon name="home" size={24} color={colors.black} />;

export default function DefaultScreen({ navigation }) {
  return (
    <PlantillaScreen>
      <View style={ styles.container }>
        <Text style={styles.title}>Bienvenido a la Pantalla Principal </Text>
        {myIcon}
      </View>
      <View style = { styles.container }>
        <Text style = { styles.title }>Onda</Text>
        <SemiCircularProgress progress={ 90 }
          size={ 200 }
          strokeWidth={ 12 }
        />
      </View>
      <View style = { styles.container }>
        <Text style = { styles.title }>Onda</Text>
        <SemiCircularProgress progress={ 90 }
          size={ 200 }
          strokeWidth={ 12 }
        />
      </View>
      <View style = { styles.container }>
        <Text style = { styles.title }>Onda</Text>
        <SemiCircularProgress progress={ 90 }
          size={ 200 }
          strokeWidth={ 12 }
        />
      </View>
    </PlantillaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
