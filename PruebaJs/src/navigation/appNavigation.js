import React from 'react';
import { View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from "../constants/colors";
// import IconNave from "react-native-vector-icons/FontAwesome5";

// Importación por default (asegúrate de que los archivos exporten default)
import homeScreen from "../screens/homeScreen";
import NaveScreen from "../screens/naveScreen";
import PagosScreen from "../screens/pagosScreen";
import PerfilScreen from "../screens/perfilScreen";
import FacturaScreen from "../screens/facturaScreen";

// Mapa de íconos en lugar de switch-case
// Esto permite una carga más eficiente de los íconos y evita la necesidad de un switch-case
const iconMap = {
  FontAwesome5: () => require('react-native-vector-icons/FontAwesome5').default,
  Ionicons: () => require('react-native-vector-icons/Ionicons').default,
  MaterialIcons: () => require('react-native-vector-icons/MaterialIcons').default,
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabScreenOptions = {
  tabBarStyle: {
    height: 55, // Ajusta la altura de la barra
    backgroundColor: colors.backTabBar, // Fondo de la barra
    borderRadius: 50, // Bordes redondeados
    alignItems: 'center', // Centrar los íconos
    justifyContent: 'center', // Alinear el contenido
    marginBottom: 3, // Espacio inferior
  },
};

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen
        name="Home"
        component={homeScreen}
        options={{
          headerShown: false,
          tabBarIcon: getTabBarIcon('home', 'Ionicons'),
        }}
      />
      <Tab.Screen
        name="Naves"
        component={NaveScreen}
        options={{
          headerShown: false,
          tabBarIcon: getTabBarIcon('warehouse', 'FontAwesome5'),
        }}
      />
      <Tab.Screen
        name="Facturas"
        component={FacturaScreen}
        options={{
          headerShown: false,
          tabBarIcon: getTabBarIcon('file-invoice', 'FontAwesome5'),
        }}
      />
      <Tab.Screen
        name="Pagos"
        component={PagosScreen}
        options={{
          headerShown: false,
          tabBarIcon: getTabBarIcon('payments', 'MaterialIcons'),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          headerShown: false,
          tabBarIcon: getTabBarIcon('person', 'Ionicons'),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Homeeeee" component={MainTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Naves" component={NaveScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Facturas" component={FacturaScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Pagos" component={PagosScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Perfil" component={PerfilScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const getTabBarIcon = (iconName, iconType) => ({ focused, Iconsize = 18 }) => {
  const iconColor = focused ? colors.iconFocus : colors.white; // Cambia el color según tu preferencia
  const styles = {
    backgroundColor: focused ? colors.iconBack : colors.transparent, // Fondo dinámico
    width: 40, // Ancho del ícono
    height: 25, // Alto del ícono
    padding: 1, // Espaciado alrededor del ícono
    borderRadius: 20, // Redondear el fondo
    alignItems: 'center', // Centrar el ícono
    justifyContent: 'center', // Alinear el contenido
  };

  // Obtener el componente de icono o un icono por defecto
  const IconComponent = iconMap[iconType] ? iconMap[iconType]() : require('react-native-vector-icons/MaterialIcons').default;

  return (
    <View style={styles}>
      <IconComponent name={iconName} size={Iconsize} color={iconColor} />
    </View>
  );
};

