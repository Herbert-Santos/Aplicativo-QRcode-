import React from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import Button from '../../components/Button';
// import { Button } from '@ui-kitten/components';

import { Container, Title } from './styles';

const TicketValid: React.FC =  () => {
    const navigation = useNavigation();
    return (
    <>
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS == 'ios' ? 'padding' :  undefined}
            enabled
        >

            <Container>
                <View style={{alignItems:'center'}}>
                    <Icon 
                        name="checkcircleo" 
                        size={50} 
                        color="#8aec86"
                    />
                    <Title>Ingresso válido</Title>
                </View>

                <Button onPress={() => navigation.navigate('ScanerNavigation')} style={{width: '100%'}}>Ler QRcode</Button>
            </Container>
        </KeyboardAvoidingView>
    </> 
    );
};

export default TicketValid; 

// Quando o leitor QR acusar que o ingresso está válido