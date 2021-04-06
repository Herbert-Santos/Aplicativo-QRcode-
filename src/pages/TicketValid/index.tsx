import React from 'react';
import { View, KeyboardAvoidingView, Platform  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import { Container, Title, ComeBack, ComeBackText } from './styles';

const TicketValid: React.FC =  () => {
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
                <View >
                    <Title>Ingresso válido</Title>
                </View>

                <Button onPress={() => navigation.navigate('SignIn')} style={{width: '100%'}}>Ler QRcode</Button>
            </Container>
        </KeyboardAvoidingView>
    </> 
    );
};


export default TicketValid; 