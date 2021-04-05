import React, { useCallback, useRef } from 'react';

import { View, ScrollView,  KeyboardAvoidingView, Platform, TextInput  } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Teste from '../../pages/Teste';
// import Botao from '../../components/Button';
// import {ListItem} from '../../components/ListItem'


import { Container, Title, ForgotPassword, ForgotPasswordText, CompanyText } from './styles';

const SignIn: React.FC =  () => {
    const formRef = useRef<FormHandles>(null);
    const passwordInputRef = useRef<TextInput>(null);
    const navigation = useNavigation(); 

    const handleSignIn = useCallback((data: object) => {
        console.log(data);
    }, []);

    return (
    <>
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS == 'ios' ? 'padding' :  undefined}
            enabled
        >
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{flex: 1}}
            >

                <Container>
                    <View>
                        <Title>Faca seu login</Title>
                    </View>

                    <Form  ref={formRef} onSubmit={handleSignIn}>
                        <Input ref={passwordInputRef} onSubmitEditing={() => {}} returnKeyType="next" autoCorrect={false} autoCapitalize="none" keyboardType="email-address" name="email" icon="mail" placeholder="E-mail" />
                        <Input textContentType="newPassword" secureTextEntry  returnKeyType="send" onSubmitEditing={() => {formRef.current?.submitForm();}} name="password" icon="lock" placeholder="Senha" />

                        <Button onPress={() =>navigation.navigate('AccountUser')}>Entrar</Button>
                    </Form>

                    <ForgotPassword onPress={() => navigation.navigate('ForgotPassword')}>
                        <ForgotPasswordText>Esqueceu a senha</ForgotPasswordText>
                    </ForgotPassword>
                </Container>
            </ScrollView>

            <CompanyText>ERPevent@copyhight</CompanyText>
        </KeyboardAvoidingView>
    </>
    );
};


export default SignIn;