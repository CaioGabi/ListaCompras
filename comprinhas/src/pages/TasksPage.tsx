import FormsLista from '../components/FormsLista';
import ListaCompras from '../components/ListaCompras';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../styles/taskspage.styles';

type Item = {
  nome: string;
  valor: string;
  comprado?: boolean; 
};

export default function TasksPage() {
  const [itens, setItens] = useState<Item[]>([]);

  const adicionarItem = (novoItem: Item) => {
    if (novoItem.nome.trim() !== '' && novoItem.valor.trim() !== '') {
      setItens([...itens, { ...novoItem, comprado: false }]);
    }
  };

  const removerItem = (index: number) => {
    setItens(itens.filter((_, i) => i !== index));
  };

  const alternarComprado = (index: number) => {
    setItens(itens =>
      itens.map((item, i) =>
        i === index ? { ...item, comprado: !item.comprado } : item
      )
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#dfc11cff" />
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