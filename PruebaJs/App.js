// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from '../src/navigation/AppNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
  );
}
