import React, { useCallback, useRef } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button, Input } from '@ui-kitten/components';
import palestra from '../../assets/palestra.jpg';
import { Container, Title, ForgotPassword, ForgotPasswordText, CompanyText } from './styles';

const SignIn: React.FC =  () => {
    const formRef = useRef<FormHandles>(null);
    const navigation = useNavigation(); 

    const handleSignIn = useCallback((data: object) => {
        console.log(data);
    }, []);
 
    return (
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
                <Container>

                    <Title>Faça seu login</Title>

                    <Form  ref={formRef} onSubmit={handleSignIn}>
                        <Input
                            style={{margin:15, marginVertical:1}}
                            onSubmitEditing={() => {}}
                            returnKeyType="next"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            placeholder="E-mail"
                            autoCorrect={false}
                        />
                        <Input
                            style={{margin:15, marginVertical:1}}
                            onSubmitEditing={() => {formRef.current?.submitForm();}}
                            textContentType="newPassword"
                            secureTextEntry 
                            returnKeyType="send"
                            placeholder="Senha"
                        />

                        <Button
                            onPress={() => navigation.navigate('Drawer')}
                            style={{margin:15, marginBottom:15}}
                        >Entrar</Button>
                    </Form>

                    <ForgotPassword onPress={() => navigation.navigate('ForgotPassword')}>
                        <ForgotPasswordText>Esqueceu a senha</ForgotPasswordText>
                    </ForgotPassword>

                    <CompanyText>ERPevent@copyhight</CompanyText>
                </Container>
            </ImageBackground>
        </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default () => (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <SignIn />
    </ApplicationProvider>
  );

  // Tela de login