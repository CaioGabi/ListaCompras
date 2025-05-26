import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const ListaCompras = () => {
  const [itens, setItens] = useState<string[]>([]);
  const [novoItem, setNovoItem] = useState('');

  const adicionarItem = () => {
    if (novoItem.trim() !== '') {
      setItens([...itens, novoItem]);
      setNovoItem('');
    }
  };

  const removerItem = (index: number) => {
    const novosItens = itens.filter((_, i) => i !== index);
    setItens(novosItens);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um item"
        value={novoItem}
        onChangeText={setNovoItem}
      />
      <Button title="Adicionar" onPress={adicionarItem} />
      <FlatList
        data={itens}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
            <TouchableOpacity onPress={() => removerItem(index)}>
              <Text style={styles.removeButton}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16},
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 8, borderRadius: 4 },
  itemContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  itemText: { fontSize: 16 },
  removeButton: { color: 'red' },
});

export default ListaCompras;