import React from 'react';
import { ImageBackground, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


import { Container, ViewHeader, ViewBody } from './styles';
import palestra from '../../assets/palestra.jpg';

const PasswordMassage: React.FC =  () => {
    const navigation = useNavigation(); 

    return (
        <ImageBackground source={palestra} style={{flex:1, justifyContent:'center'}}>
        <Container>
            <ViewHeader>
                <TouchableOpacity onPress={()=> navigation.navigate('SignIn')}>
                    <Icon 
                        name='leftcircleo' 
                        size={25} 
                        color='#fff'
                    />
                </TouchableOpacity>
            </ViewHeader>

            <ViewBody>
                <Icon 
                    name="checkcircleo" 
                    size={50} 
                    color="#fff"
                />
                <Text style={{color: '#fff', fontSize:25, top:10}}>Verifique sua caixa de email</Text>
            </ViewBody>
        </Container>
        </ImageBackground>
    );
};

export default PasswordMassage; 

// Somente uma menssagem confirmando que a operação de recuperação de senha, foi concluida