import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #547;
    flex: 1;
    justify-content: center;
    align-items: center;
`;
//um estilo para as caixas de texto
export const InputArea = styled.View`
    padding: 40px;
    width: 100%;
`;

// estilo para os botões
export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color:  #7443ED;
    border-radius: 30px;
    border-color: #ffff;
    justify-content: center;
    align-items: center;
`;

//estilo para textos dos botões
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
`;

//estilo para os botões: botão, texto e link das telas de login/cadastro
export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;

export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #ffff;
`;
export const SignMessageButtonLink = styled.Text`
    font-size: 16px;
    color: #FFE94A;
    font-weight: bold;
    margin-left: 5px;
`;
