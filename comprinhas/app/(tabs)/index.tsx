import FormsLista from '@/components/FormsLista';
import ListaCompras from '@/components/ListaCompras';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Item = {
  nome: string;
  valor: string;
  comprado?: boolean; // novo campo
};

export default function ExploreScreen() {
  const [itens, setItens] = useState<Item[]>([]);

  const adicionarItem = (novoItem: Item) => {
    if (novoItem.nome.trim() !== '' && novoItem.valor.trim() !== '') {
      setItens([...itens, { ...novoItem, comprado: false }]);
    }
  };

  const removerItem = (index: number) => {
    setItens(itens.filter((_, i) => i !== index));
  };

  // Função para marcar/desmarcar como comprado
  const alternarComprado = (index: number) => {
    setItens(itens =>
      itens.map((item, i) =>
        i === index ? { ...item, comprado: !item.comprado } : item
      )
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#2E7D32" />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons name="cart-outline" size={32} color="#FFFFFF" />
          <Text style={styles.header}>Minha Lista de Compras</Text>
        </View>
        <FormsLista adicionarItem={adicionarItem} />
        <ListaCompras itens={itens} removerItem={removerItem} alternarComprado={alternarComprado} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F9FA',

  },
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E7D32', 
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 25,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 10,
  },
});