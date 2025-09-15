import React from 'react';
import { SafeAreaView, StatusBar, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/start.styles';
import ButtonText from '../components/ButtonText';
import InfoText from '../components/InfoText';

export default function Start() {

  const navigation = useNavigation();

  const handleNavigateToList = () => {

    navigation.navigate('TasksPage' as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f4f8" />

      <View style={styles.content}>
        <MaterialCommunityIcons name="cart-variant" size={120} color="#000000" />
        <Text style={styles.title}>Sua Lista de Compras</Text>
        <InfoText text="Organize a sua lista de compras de forma rápida e fácil"/>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNavigateToList}>
        <ButtonText text="Ir para a Lista"/>
        <MaterialCommunityIcons name="arrow-right-thick" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

