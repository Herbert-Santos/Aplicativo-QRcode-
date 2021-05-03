import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import erp from '/Users/hebertsantos/Developer/Aplicativo/mobilevent/src/assets/erp.jpeg';
// const navigation = useNavigation();

const Screen:React.FC = () => {

  return (
    <>
      <ImageBackground source={erp} style={{flex:1, justifyContent:'space-around'}} >
        <View style={{flex:1, backgroundColor:'#0f0f0f', opacity:0.6, justifyContent:'space-around'}}>

        <TouchableOpacity 
          style={{alignItems:'flex-end', position:'relative', marginBottom:100}}>
          <Icon name='bars' size={25} color='#fff'/>
        </TouchableOpacity>

        <Text style={{color:'#fff', fontSize:25, fontWeight:'bold', marginBottom:100, alignSelf:'center'}}>Plataforma Digital</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20}}>

          <View style={{flexDirection:'column', marginVertical:20}}>
            <TouchableOpacity >
              <Icon style={{alignSelf:'center'}} name="qrcode" size={30} color="#fff" />
              <Text style={{color:'#fff', fontWeight:'bold'}}>QRcode</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'column', marginVertical:20, marginLeft:15}}>
            <TouchableOpacity>
              <Icon style={{alignSelf:'center'}} name="barcode" size={30} color="#fff"/>
              <Text style={{color:'#fff', fontWeight:'bold'}}>Codigo</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'column', marginVertical:20}}>
            <TouchableOpacity>
              <Icon style={{alignSelf:'center'}} name="scan1" size={30} color="#fff"/>
              <Text style={{color:'#fff', fontWeight:'bold'}}>Escaneados</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default Screen;