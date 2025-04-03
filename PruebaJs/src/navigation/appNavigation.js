import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importación por default (asegúrate de que los archivos exporten default)
import homeScreen from "../screens/homeScreen";
import NaveScreen from "../screens/naveScreen";
import PagosScreen from "../screens/pagosScreen";
import PerfilScreen from "../screens/perfilScreen";
import FacturaScreen from "../screens/facturaScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={homeScreen} />
      <Tab.Screen name="Naves" component={NaveScreen} />
      <Tab.Screen name="Facturas" component={FacturaScreen} />
      <Tab.Screen name="Pagos" component={PagosScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainTabs} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Naves" component={NaveScreen} />
      <Stack.Screen name="Facturas" component={FacturaScreen} />
      <Stack.Screen name="Pagos" component={PagosScreen} />
      <Stack.Screen name="Perfil" component={PerfilScreen} /> */}
    </Stack.Navigator>
  );
}
