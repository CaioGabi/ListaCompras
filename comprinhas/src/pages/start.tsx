import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// 1. Importe o hook useRouter do Expo Router
import { useRouter } from 'expo-router';

export default function Start() {
  // 2. Crie uma instância do router usando o hook
  const router = useRouter();

  const handleNavigateToList = () => {
    // 3. Use router.push() para navegar para a tela 'home'
    router.push('../src/pages/home'); // ERRo
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f4f8" />

      <View style={styles.content}>
        <MaterialCommunityIcons name="cart-variant" size={120} color="#3498db" />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginTop: 24,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#3498db',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: '90%',
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 8,
  },
});