import React, { useRef } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Icon from 'react-native-vector-icons/AntDesign';

import { ApplicationProvider, Input, Button } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import { Container, Title, CompanyText } from './styles';

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
                        <TouchableOpacity style={{alignItems:'flex-start', bottom:100}} onPress={() => navigation.navigate('SignIn')} >
                            <Icon name="left" size={20} color="#fff"/>
                        </TouchableOpacity>

                    <Title>Digite seu email</Title>
                    <Form ref={formRef} onSubmit={(data) => {console.log(data)}}>

                        <Input autoCorrect={false} autoCapitalize="none" keyboardType="email-address" placeholder="E-mail" />
                        <Button onPress={() => formRef.current?.submitForm()}>Redefinir senha</Button>

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