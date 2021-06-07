import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import { Container, Body, ViewHeader, ViewTitle } from './styles';
import tresm from '/Users/hebertsantos/Developer/Aplicativo/mobilevent/src/assets/tresm.jpeg';

const TresM:React.FC = () => {
  const Navigation = useNavigation();
  
  return (
    <ImageBackground source={tresm} style={{flex:1}}>
      <Container>
        <ViewHeader>
          <TouchableOpacity onPress={() => Navigation.navigate('Feed')}>
            <Icon 
              name='leftcircleo' 
              size={25} 
              color='#fff'
            />
          </TouchableOpacity>
        </ViewHeader>

        <ViewTitle>
          <Text style={{color:'#fff', fontSize:30}}>3M do Brasil</Text>
        </ViewTitle>

        <Body>
          <View style={{flexDirection:'column', marginVertical:20}}>
            <TouchableOpacity onPress={() => Navigation.navigate('Scanner')}>
              <Icon 
                style={{alignSelf:'center'}} 
                name="qrcode" 
                size={30} 
                color="#fff"
              />
              <Text style={{color:'#fff'}}>QRcode</Text>
            </TouchableOpacity>
          </View>
        </Body>
      </Container>
    </ImageBackground>
  );
};

export default TresM;