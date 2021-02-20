import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Image, TextInput, secureTextEntry } from 'react-native'

import Avatar from '../../assets/ketnipz.jpg'

const Login = (props) => {
    return(
        <SafeAreaView style={{flex: 1}}>
            <View>
                <TouchableOpacity onPress = {() => {
                    props.navigation.openDrawer()
                }}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.container}>           
            <Text style = {styles.text}> Entrar </Text>
            <Image source={Avatar} style= {styles.imagem} />
            <TextInput placeholder="Digite seu usuario" styles = {styles.input} />

            <TextInput  placeholder="Digite seu email" styles = {styles.input}  />

            <TextInput  placeholder="Digite sua senha" secureTextEntry = {true}  styles = {styles.input} />

            <TouchableOpacity style = {styles.btncadastro}>
                <Text>Cadastrar </Text>
            </TouchableOpacity>
            </View>
            
            
        </SafeAreaView>
    );
}

export default Login

const styles = StyleSheet.create({

    imagem: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 80,
        backgroundColor: "#fff",
        marginBottom: 20,
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
    },

    
    btncadastro: {
        backgroundColor: "#7443ED",
        marginTop: 20,
        borderRadius: 5,
      },

    input: {
        padding:10,
        borderRadius: 5,
        backgroundColor: "#fff",
        alignSelf: "stretch",
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        fontSize: 16,
        color: "#fff",
        borderColor: "#fff",
        placeholderTextColor: "#fff",
      },
    
});