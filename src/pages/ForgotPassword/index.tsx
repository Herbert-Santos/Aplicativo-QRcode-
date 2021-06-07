import React, { useRef } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import { 
    ScrollView, 
    KeyboardAvoidingView, 
    Platform, 
    ImageBackground, 
    TouchableOpacity 
} from 'react-native';

import * as eva from '@eva-design/eva';
import Icon from 'react-native-vector-icons/AntDesign';
import { ApplicationProvider, Input, Button } from '@ui-kitten/components';
import palestra from '../../assets/palestra.jpg';
import { Container, ViewHeader, ViewBody, Title } from './styles';

const ForgotPassword: React.FC =  () => {
    const formRef = useRef<FormHandles>(null);
    const Navigation = useNavigation(); 

    return (
        <KeyboardAvoidingView 
            style={{ flex: 1 }} 
            behavior={ Platform.OS == 'ios' ? 'padding' : undefined } 
            enabled
        >
            <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
                <ImageBackground source={palestra} style={{ flex:1, justifyContent:'center' }}>
                <Container>
                    <ViewHeader>
                        <TouchableOpacity onPress={() => Navigation.navigate('SignIn')}>
                            <Icon 
                                name='leftcircleo' 
                                size={25} 
                                color='#fff'
                            />
                        </TouchableOpacity>
                    </ViewHeader>

                    <ViewBody>
                        <Title>Digite seu email</Title>
                        <Form ref={formRef} onSubmit={(data) => {console.log(data)}}>
                            <Input
                                style={{ marginVertical:1, marginBottom:10}}
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                placeholder="E-mail"
                            />
                            <Button onPress={() => Navigation.navigate('PasswordMassage')}>Redefinir senha</Button>
                        </Form>
                    </ViewBody>
                </Container>
                </ImageBackground>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default () => (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <ForgotPassword />
    </ApplicationProvider>
);

// Uma menssagem de recuperação de senha, será enviado para o E-mail do usuário que esqueceu sua senha 