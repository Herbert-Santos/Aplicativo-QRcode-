import React, { useRef } from 'react';
import { View, ScrollView,  KeyboardAvoidingView, Platform  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, ComeBack, ComeBackText, CompanyText } from './styles';

const ForgotPassword: React.FC =  () => {
    const formRef = useRef<FormHandles>(null);
    const navigation = useNavigation();
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
                        <Title>Digite seu email de login</Title>
                    </View>

                    <Form ref={formRef} onSubmit={(data) => {console.log(data)}}>
                        <Input autoCorrect={false} autoCapitalize="none" keyboardType="email-address" name="email" icon="mail" placeholder="E-mail" />

                        <Button onPress={() => navigation.navigate('PasswordMassage')}>Redefinir senha</Button>

                        <ComeBack onPress={() => navigation.goBack()}>
                            <ComeBackText>Voltar</ComeBackText>
                        </ComeBack>
                    </Form>
                </Container>
            </ScrollView>
            <CompanyText>ERPevent@copyhight</CompanyText>
        </KeyboardAvoidingView>
    </> 
    );
};


export default ForgotPassword; 