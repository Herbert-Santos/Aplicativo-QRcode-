import React from 'react';
import { View, KeyboardAvoidingView, Platform, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

// import { Button } from '@ui-kitten/components';

import { Container, Title } from './styles';

const ScannerBar: React.FC =  () => {
    const Navigation = useNavigation();
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
                        name="scan1" 
                        size={150} 
                        color="#fff"
                    />
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-around', top:150}}>
                    <TouchableOpacity onPress={() => Navigation.navigate('Feed')}>
                        <Icon 
                            name="barcode" 
                            size={30} 
                            color="#fff"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Navigation.navigate('Feed')}>
                        <Icon 
                            name="close" 
                            size={30} 
                            color="#fff"
                        />
                    </TouchableOpacity>
                </View>
            </Container>
        </KeyboardAvoidingView>
    </> 
    );
};

export default ScannerBar; 

// Quando o leitor QR acusar que o ingresso está válido