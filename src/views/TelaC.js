import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const TelaC = (props) => {
    return(
        <View style={{flex: 0.9}}>
            <View>
                <TouchableOpacity onPress = {() => {
                    props.navigation.openDrawer()
                }}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            </View>
            <Text style = {styles.text}> Página Inicial </Text>
        </View>
    )
}

export default TelaC

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

    text: {
        fontSize: 50,
        color: '#fff',
    },
});