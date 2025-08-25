import React from 'react';
import { SafeAreaView, StatusBar, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/start.styles';

export default function Start() {

  const navigation = useNavigation();

  const handleNavigateToList = () => {

    navigation.navigate('Home' as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f4f8" />

      <View style={styles.content}>
        <MaterialCommunityIcons name="cart-variant" size={120} color="#000000" />
        <Text style={styles.title}>Sua Lista de Compras</Text>
        <Text style={styles.subtitle}>Organize suas compras de forma fácil e rápida.</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNavigateToList}>
        <Text style={styles.buttonText}>Ir para a Lista</Text>
        <MaterialCommunityIcons name="arrow-right-thick" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

