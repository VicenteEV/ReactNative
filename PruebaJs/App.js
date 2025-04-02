import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Axios (para solicitudes HTTP)
import axios from 'axios';

// React Native Paper (Componentes UI)
import { Provider as PaperProvider, Button as PaperButton } from 'react-native-paper';

// React Native Safe Area Context (Para manejo de áreas seguras en dispositivos)
import { SafeAreaProvider } from 'react-native-safe-area-context';

// React Native Vector Icons
import Icon from 'react-native-vector-icons/Ionicons';
import A  from 'react-native-vector-icons/FontAwesome6';
// AsyncStorage (Almacenamiento local no encriptado)
import AsyncStorage from '@react-native-async-storage/async-storage';

// Expo Secure Store (Almacenamiento encriptado)
import * as SecureStore from 'expo-secure-store';

// React Native Gesture Handler (Gestos táctiles (como toques, deslizamientos...))
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// React Native Reanimated (Animaciones y gestos)
import Animated from 'react-native-reanimated';

const App = () => {
  // Estados locales para manejar los datos del usuario
  const [storedData, setStoredData] = useState(null);
  const [secureData, setSecureData] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [secureUserInput, setSecureUserInput] = useState('');

  useEffect(() => {
    // Recuperamos los valores almacenados al montar el componente
    AsyncStorage.getItem('user')
      .then(value => {
        setStoredData(value);
      });

    SecureStore.getItemAsync('secureUser')
      .then(value => {
        setSecureData(value);
      });
  }, []);

  // Función para manejar el almacenamiento en AsyncStorage
  const handleAsyncStorage = () => {
    AsyncStorage.setItem('user', userInput)
      .then(() => {
        setStoredData(userInput); // Actualizamos el estado con el valor ingresado
        console.log('Dato guardado en AsyncStorage');
      })
      .catch(error => {
        console.error('Error al guardar en AsyncStorage:', error);
      });
  };

  // Función para manejar el almacenamiento en SecureStore
  const handleSecureStore = () => {
    SecureStore.setItemAsync('secureUser', secureUserInput)
      .then(() => {
        setSecureData(secureUserInput); // Actualizamos el estado con el valor ingresado
        console.log('Dato guardado de forma segura');
      })
      .catch(error => {
        console.error('Error al guardar en SecureStore:', error);
      });
  };

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <View style={styles.container}>
            {/* Icono de React Native Vector Icons */}
            <Icon name="cube" size={30} color="black" />
            <A name="boxes-packing" size={30} color="black" />
            <Text style={styles.title}>Introduce tu nombre:</Text>

            {/* Input para almacenar datos en AsyncStorage */}
            <TextInput
              style={styles.input}
              placeholder="Nombre para AsyncStorage"
              value={userInput}
              onChangeText={setUserInput}
            />
            <PaperButton mode="contained" onPress={handleAsyncStorage}>
              Guardar en AsyncStorage
            </PaperButton>

            <Text style={styles.title}>Introduce tu nombre (seguro):</Text>

            {/* Input para almacenar datos en SecureStore */}
            <TextInput
              style={styles.input}
              placeholder="Nombre para SecureStore"
              value={secureUserInput}
              onChangeText={setSecureUserInput}
            />
            <PaperButton mode="contained" onPress={handleSecureStore}>
              Guardar en SecureStore
            </PaperButton>

            {/* Mostramos los datos obtenidos de AsyncStorage */}
            <Text>Datos desde AsyncStorage: {storedData}</Text>

            {/* Mostramos los datos obtenidos de SecureStore */}
            <Text>Datos desde SecureStore: {secureData}</Text>

            {/* Botón estándar de React Native */}
            <Button title="Simple Button" onPress={() => console.log('Botón estándar presionado')} />
          </View>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 8,
    marginBottom: 10,
    width: '80%',
  },
});

export default App;
