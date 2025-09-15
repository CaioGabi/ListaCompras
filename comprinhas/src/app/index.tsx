import React from 'react';
import TasksPage from '../pages/TasksPage';
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
        name="TasksPage"
        component={TasksPage}
        options={{ title: 'Lista de Compras' }}
      />
    </Stack.Navigator>
  );
}