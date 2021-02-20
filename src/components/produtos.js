import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Produtos = ( {produto, descricao, preco}) => {
  return (
      <View styles = {styles.produto}>
          <Text>----------------------------------------</Text>
          <Text style = {styles.textProduto}>Produto: {produto}</Text>
          <Text style = {styles.textProduto}>Descrição: {descricao}</Text>
          <Text style = {styles.textProduto}>Preço: {preco}</Text>
          <Text>----------------------------------------</Text>
      </View>

  )
}


export default Produtos;

const styles = StyleSheet.create({

    produto: {
        flex:.7,
        justifyContent: 'center',
        backgroundColor: "#2378",
        alignContent: "center",
        
    },

    textProduto: {
        fontSize: 10,
        color: '#0567',
        marginBottom: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
    },
})