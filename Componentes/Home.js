import React, { useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { CadastroContext } from './ContextoCadastro';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const { lista } = useContext(CadastroContext);
  const navigation = useNavigation();

  function botaoForm() {
    navigation.navigate('Formulário');
  }
   /* Obs.: Esse Alert não funciona na versão Web, somente Android e IOS*/

  function showAlert(produto) {
    mensagem =
      'Código: ' +
      produto.codigo +
      '\nDescrição: ' +
      produto.descricao +
      '\nQuantidade: ' +
      produto.quantidade +
      '\nPreço: ' +
      produto.preco;
    Alert.alert('Produto', mensagem);
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.boxList}
        data={lista}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => showAlert(item)}>
            <Text style={styles.itemLista}>
              {'[' + item.codigo + ']' + ' - ' + item.descricao}
            </Text>
          </TouchableOpacity>
        )}
        
      />

      <TouchableOpacity style={styles.botao} onPress={botaoForm}>
        <Text style={styles.textoBotao}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  boxList: {
    paddingTop: 0,
    paddingHorizontal: 60,
    
  },
  itemLista: {
    borderBottomWidth: 2,
    padding: 5,
  
  },
  botao: {
    borderRadius: 100,
    backgroundColor: 'green',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    bottom: 10,
    alignSelf: 'flex-end',

  },
  textoBotao: {
    fontSize: 30,
    color: '#fff',
  },
});
