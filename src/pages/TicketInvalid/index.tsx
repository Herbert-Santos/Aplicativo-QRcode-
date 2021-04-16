import React from 'react';
import { View, KeyboardAvoidingView, Platform  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
// import { Button } from '@ui-kitten/components';

import { Container, Title, ComeBack, ComeBackText } from './styles';

const TicketInvalid: React.FC =  () => {
    const navigation = useNavigation();
    return (
    <>
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS == 'ios' ? 'padding' :  undefined}
            enabled
        >
            <ComeBack onPress={() => navigation.navigate('SignIn')}>
                <ComeBackText>Voltar para eventos</ComeBackText>
            </ComeBack>
            <Container>
                <View>
                    <Title>Ingresso inválido</Title>
                </View>

                <Button onPress={() => navigation.navigate('ScanerNavigation')} style={{width: '100%'}}>Ler novamente</Button>
            </Container>
        </KeyboardAvoidingView>
    </> 
    );
};


export default TicketInvalid; 