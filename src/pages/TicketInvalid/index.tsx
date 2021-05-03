import React from 'react';
import { View, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import Button from '../../components/Button';
// import { Button } from '@ui-kitten/components';

import { Container, Title } from './styles';

const TicketInvalid: React.FC =  () => {
    const navigation = useNavigation();
    return (
    <>
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS == 'ios' ? 'padding' :  undefined}
            enabled
        >

            <Container>
                 <TouchableOpacity
                    style={{alignItems:'flex-end', bottom:80}}
                    onPress={() => navigation.navigate('SignIn')}>
                        
                    <Icon name="bars" size={25} color="#fff"/>
                </TouchableOpacity>

                <View style={{alignItems:'center'}}>
                    <Icon name="closecircleo" size={50} color="#fff"/>
                    <Title>Ingresso inválido</Title>
                </View>

                <Button onPress={() => navigation.navigate('ScanerNavigation')} style={{width: '100%'}}>Ler novamente</Button>
            </Container>
        </KeyboardAvoidingView>
    </> 
    );
};


export default TicketInvalid; 