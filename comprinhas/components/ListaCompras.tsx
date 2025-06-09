import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

type Item = {
  nome: string;
  valor: string;
};

type ListaComprasProps = {
  itens: Item[];
  removerItem: (index: number) => void;
};

const ListaCompras: React.FC<ListaComprasProps> = ({ itens, removerItem }) => (
  <FlatList
    data={itens}
    keyExtractor={(_, index) => index.toString()}
    renderItem={({ item, index }) => (
      <View style={styles.itemContainer}>
        <View style={styles.itemInfo}>
          <Text style={styles.itemText}>{item.nome}</Text>
          <Text style={styles.valorText}>R$ {item.valor}</Text>
        </View>
        <TouchableOpacity onPress={() => removerItem(index)} style={styles.removeButton}>
          <Feather name="trash-2" size={22} color="#D32F2F" />
        </TouchableOpacity>
      </View>
    )}

    ListEmptyComponent={<Text style={styles.emptyListText}>Sua lista está vazia!</Text>}

    ListFooterComponent={<View style={{ height: 20 }} />}
  />
);

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E9ECEF',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  itemInfo: {
    flex: 1,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#212529',
  },
  valorText: {
    fontSize: 16,
    color: '#2E7D32',
    fontWeight: 'bold',
    marginTop: 4,
  },
  removeButton: {
    padding: 8,
    marginLeft: 10,
  },
  emptyListText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#6C757D',
  },
});

export default ListaCompras;