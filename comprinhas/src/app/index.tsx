import React from 'react';
import Home from '../pages/home';
import Start from '../pages/start';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AppLayout() { 
  return (
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
        options={{ title: 'Lista de Compras' }}
      />
    </Stack.Navigator>
  );
}