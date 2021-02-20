import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

import cardUm from  '../../assets/kkrankenbruder1.jpg'
import cardDois from  '../../assets/nieta3.jpg'

const Home = (props) => {
    return(
        <View style={{flex: 0.9}}>
            <View>
                <TouchableOpacity onPress = {() => {
                    props.navigation.openDrawer()
                }}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.container}>
                <View style = {styles.containerCard}>
                    <Text style = {styles.text}> Página Inicial </Text> 
                    <Image source={cardUm} style= {styles.imagemCard} />
                    <Text style = {styles.textCard}> Encontre Ilustrações Digitais </Text>

                    <Image source={cardDois} style= {styles.imagemCard} />
                    <Text style = {styles.textCard}> Encontre Artigos de Decoração </Text>
                </View>
            
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({

    imagemCard: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#fff",
      },


      container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#547",
    },

    text: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 30,
        marginTop: 10,
    },

    textCard: {
        fontSize: 15,
        color: '#fff',
        marginBottom: 20,
        marginTop: 10,
    },

    containerCard: {
        flex:0.3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#547",
    },

    imagem: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#fff",
        marginBottom: 20,
      },

});