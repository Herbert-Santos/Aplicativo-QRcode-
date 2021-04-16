import React from 'react';
import { View, KeyboardAvoidingView, Platform  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, CompanyText } from './styles';
// import { Button } from '@ui-kitten/components';
import Button from '../../components/Button';

const PasswordMassage: React.FC =  () => {
    const navigation = useNavigation();
    return (
    <>
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS == 'ios' ? 'padding' :  undefined}
            enabled
        >
            <Container>
                <View>
                    <Title>Verifique sua caixa de email</Title>
                </View>

                <Button onPress={() => navigation.navigate('SignIn')} style={{width: '100%'}}>
                    Fazer login novamente
                </Button>
            </Container>
            <CompanyText>ERPevent@copyhight</CompanyText>
        </KeyboardAvoidingView>
    </> 
    );
};

export default PasswordMassage; 