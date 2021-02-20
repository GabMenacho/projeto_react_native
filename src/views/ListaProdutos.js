import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'

import Produtos from '../components/produtos'


const dados = [
    {
      id: Math.random(),
      produto: "Ilustracao1",
      descricao: "artista Kkrankenbruder",
      preco: "R$ 150,00",
    },

    {
        id: Math.random(),
        produto: "Ilustracao 2",
        descricao: "artista 1",
        preco: "R$ 150,00",
      },
      
    {
        id: Math.random(),
        produto: "Ilustracao 3",
        descricao: "artista 1",
        preco: "R$ 150,00",
      },    
  
  ]



const ListaProdutos = (props) => {
    return(

        <View style = {styles.container}>
            <View style={{flex: 0.9}}>
                <View>
                    <TouchableOpacity onPress = {() => {
                        props.navigation.openDrawer()
                    }}>
                        <Text style = {styles.text}>Abrir Menu</Text>
                    </TouchableOpacity>
                </View>
                <Text style = {styles.text1}> Lista de Produtos </Text>
            </View>

            <View style = {styles.container1}>
                <FlatList
                data = {dados}
                keyExtractor = {(item) => `${item.id}`}
                renderItem={({item}) => (
                    <Produtos produto={item.produto} descricao={item.descricao} preco={item.preco} />
                )}
                />

            </View>
        </View>
    )
}

export default ListaProdutos

const styles = StyleSheet.create({

    imagem: {
        width: 270,
        height: 270,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 200,
        backgroundColor: "#fff",
      },


      container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#547",
    },

    container1: {
        flex:0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        marginBottom: 150,
        borderRadius: 20,
    },

    text: {
        fontSize: 20,
        color: '#000',
        paddingBottom: 10,
        marginBottom: 150,
        backgroundColor: "#fff",
        paddingLeft: 10,
        alignContent: "center",
        borderRadius: 10,
        

    },

    text1: {
        fontSize: 15,
        color: '#fff',
        paddingTop: 2,
        paddingBottom: 5,
        marginTop: 5,
        alignItems: "center",
    },
});