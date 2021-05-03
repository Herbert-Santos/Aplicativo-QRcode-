import React, { useCallback, useRef } from 'react';

import { ScrollView,  KeyboardAvoidingView, Platform, ImageBackground,View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import palestra from '../../assets/palestra.jpg';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button, Input } from '@ui-kitten/components';
import { Title, ForgotPassword, ForgotPasswordText, CompanyText } from './styles';

const SignIn: React.FC =  () => {
    const formRef = useRef<FormHandles>(null);
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
                <View style={{flex:1, backgroundColor:'#0f0f0f', opacity:0.8, justifyContent:'space-around'}}>

                        <Title>Faça seu login</Title>

                    <Form  ref={formRef} onSubmit={handleSignIn}>
                        <Input style={{margin:15}} onSubmitEditing={() => {}} returnKeyType="next" autoCorrect={false} autoCapitalize="none" keyboardType="email-address" placeholder="E-mail"/>
                        <Input style={{margin:15}} textContentType="newPassword" secureTextEntry  returnKeyType="send" onSubmitEditing={() => {formRef.current?.submitForm();}} placeholder="Senha" />

                        <Button onPress={() => navigation.navigate('Drawer')} style={{margin:15}}>Entrar</Button>
                    </Form>

                    <ForgotPassword onPress={() => navigation.navigate('ForgotPassword')}>
                        <ForgotPasswordText>Esqueceu a senha</ForgotPasswordText>
                    </ForgotPassword>

                    <CompanyText>ERPevent@copyhight</CompanyText>

                </View>
                </ImageBackground>
            </ScrollView>
        </KeyboardAvoidingView>
    </>
    );
};


export default () => (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <SignIn />
    </ApplicationProvider>
  );