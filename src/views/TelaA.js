import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Image } from 'react-native'

//container que envolve todas as telas, componentes criados com o styled/compoents
import { Container, 
         InputArea,
         CustomButton,
         CustomButtonText,
         SignMessageButton,
         SignMessageButtonText,
         SignMessageButtonLink } from '../components/styles';

import Avatar from '../../assets/ketnipz.jpg'

const TelaA = (props) => {
    return(
        <View style={{flex: 1}}>
            <View>
                <TouchableOpacity onPress = {() => {
                    props.navigation.openDrawer()
                }}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            </View>

            <Container>
                <Image source={Avatar} style= {styles.imagem} />
          
                <InputArea>
                    <SignInput  />
                    
                    <SignInput  />           

                    <CustomButton>
                        <CustomButtonText> ENTRAR </CustomButtonText>
                    </CustomButton>
                </InputArea>

                <SignMessageButton>
                    <SignMessageButtonText>
                        Ainda não tem uma conta?
                    </SignMessageButtonText>
                    <SignMessageButtonLink>Cadastre-se</SignMessageButtonLink>
                </SignMessageButton>  
            </Container>
            
            
        </View>
    );
}

export default TelaA

const styles = StyleSheet.create({

    imagem: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 80,
        backgroundColor: "#fff",
      }

});