import React from 'react';
import Home from '../pages/home';
import Start from '../pages/start';
// A linha abaixo não é mais necessária, pois removemos o NavigationContainer
// import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Esta função define o LAYOUT da navegação, não o contêiner
export default function AppLayout() { 
  return (
    // REMOVA o <NavigationContainer> daqui.
    // O Stack.Navigator deve ser o primeiro elemento.
    <Stack.Navigator initialRouteName="Start">
      {/* Tela inicial */}
      <Stack.Screen
        name="Start"
        component={Start}
        options={{ title: 'Bem-vindo' }}
      />

      {/* Tela do CRUD */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Lista de Afazeres' }}
      />
    </Stack.Navigator>
    // REMOVA o </NavigationContainer> daqui.
  );
}