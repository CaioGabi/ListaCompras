import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Item = {
  nome: string;
  valor: string;
};

type FormsListaProps = {
  adicionarItem: (item: Item) => void;
};

const FormsLista: React.FC<FormsListaProps> = ({ adicionarItem }) => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');

  const handleValorChange = (text: string) => {
    let sanitized = text.replace(/,/g, '.').replace(/[^0-9.]/g, '');
    const parts = sanitized.split('.');
    if (parts.length > 2) {
      sanitized = parts[0] + '.' + parts.slice(1).join('');
    }
    if (sanitized.includes('.')) {
      const [intPart, decPart] = sanitized.split('.');
      sanitized = intPart + '.' + (decPart ? decPart.slice(0, 2) : '');
    }
    setValor(sanitized);
  };

  const handleAdicionar = () => {
    if (nome.trim() !== '' && valor.trim() !== '' && /^[0-9]+(\.[0-9]{1,2})?$/.test(valor)) {
      adicionarItem({ nome, valor: Number(valor).toFixed(2) });
      setNome('');
      setValor('');
    } else {
      Alert.alert('Entrada Inválida', 'Por favor, preencha o nome e um valor numérico válido (ex: 12.99).');
    }
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Adicionar Novo Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Leite Integral"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor (R$)"
        placeholderTextColor="#999"
        value={valor}
        onChangeText={handleValorChange}
        keyboardType="numeric"
        maxLength={10}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAdicionar} activeOpacity={0.7}>
        <Ionicons name="add-circle-outline" size={24} color="#FFFFFF" />
        <Text style={styles.addButtonText}>Adicionar à Lista</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#343A40',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DEE2E6',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#495057',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  addButton: {
    backgroundColor: '#B0DB9C', 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default FormsLista;