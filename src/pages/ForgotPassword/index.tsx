import React, { useRef } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

// import Input from '../../components/Input';
// import Button from '../../components/Button';
import { ApplicationProvider, Input, Button } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import { Container, Title, ComeBack, ComeBackText, CompanyText } from './styles';

const ForgotPassword: React.FC =  () => {
    const formRef = useRef<FormHandles>(null);
    const navigation = useNavigation();
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
                <Container>
                    <Title>Digite seu email</Title>

                    <Form ref={formRef} onSubmit={(data) => {console.log(data)}}>

                        <Input autoCorrect={false} autoCapitalize="none" keyboardType="email-address" placeholder="E-mail" />

                        <Button onPress={() => formRef.current?.submitForm()}>Redefinir senha</Button>

                        <ComeBack onPress={() => navigation.navigate('SignIn')}>
                            <ComeBackText>Voltar</ComeBackText>
                        </ComeBack>

                    </Form>
                </Container>
            </ScrollView>
            <CompanyText>ERPevent@copyhight</CompanyText>
        </KeyboardAvoidingView>
    );
};


// export default ForgotPassword; 
export default () => (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <ForgotPassword />
    </ApplicationProvider>
  );