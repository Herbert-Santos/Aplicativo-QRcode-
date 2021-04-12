import React, { useCallback, useRef } from 'react';

import { View, ScrollView,  KeyboardAvoidingView, Platform, TextInput, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

// import Input from '../../components/Input';
// import Button from '../../components/Button';
// import {ListItem} from '../../components/ListItem'

import palestra from '/Users/hebertsantos/Developer/Aplicativo/mobilevent/src/assets/palestra.jpg';
import { Container, Title, ForgotPassword, ForgotPasswordText, CompanyText } from './styles';
import { ApplicationProvider, Layout, Text, Button, Input } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';


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
                <ImageBackground source={palestra} style={{flex:1, justifyContent:'center'}}>
                    {/* <ImageBackground style={{flex:1}} resizeMode={'cover'} source={palmeira} /> */}
                    <View>
                        <Title>Faça seu login</Title>
                    </View>

                    <Form  ref={formRef} onSubmit={handleSignIn}>
                        <Input style={{margin:15}} ref={passwordInputRef} onSubmitEditing={() => {}} returnKeyType="next" autoCorrect={false} autoCapitalize="none" keyboardType="email-address" name="email" icon="mail" placeholder="E-mail"/>
                        <Input style={{margin:15}} textContentType="newPassword" secureTextEntry  returnKeyType="send" onSubmitEditing={() => {formRef.current?.submitForm();}} name="password" icon="lock" placeholder="Senha" />

                        <Button onPress={() => navigation.navigate('AccountUser')} style={{margin:15}} >Entrar</Button>
                    </Form>

                    <ForgotPassword onPress={() => navigation.navigate('ForgotPassword')}>
                        <ForgotPasswordText>Esqueceu a senha</ForgotPasswordText>
                    </ForgotPassword>
                    <CompanyText>ERPevent@copyhight</CompanyText>
                </ImageBackground>
                
            </ScrollView>

            
        </KeyboardAvoidingView>
    </>
    );
};


export default () => (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SignIn />
    </ApplicationProvider>
  );