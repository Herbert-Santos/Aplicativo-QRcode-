import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Container, Title} from './styles';


const CustomDrawer:React.FC = () => {
  return(
    <>
      <View style={{ flex:1, padding:30, alignItems:'center', flexDirection:'column', backgroundColor:'#2E4061' }}>
          <Image 
            source={ require('../../../assets/marcelo.jpeg' )}
            style={{ width:60, height:60, borderRadius:50 }}
          />
        <View style={{ flexDirection:'column', marginTop:5 }}>
          <Text style={{ color:'#fff', textAlign:'center' }}>Olá, Marcelo</Text>
          <Text style={{ color:'#fff', textAlign:'center' }}>marcelosinhorini@gmail.com</Text>
          <TouchableOpacity>
            <Text style={{ color:'#fff', textAlign:'center', marginTop:5}}>Plataforma Digital</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex:4, backgroundColor:'#fff', marginHorizontal:10 }}>

        <TouchableOpacity style={{marginVertical:20}}>
          <View style={{flexDirection:'row'}}>
            <Icon name="home" size={20} color="#333"/>
            <Text style={{color:'#333', marginHorizontal:10}}>Inicio</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginVertical:20}}>
          <View style={{flexDirection:'row'}}>
            <Icon name="pushpino" size={20} color="#333"/>
            <Text style={{color:'#333', marginHorizontal:10}}>Eventos</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginVertical:20}}>
          <View style={{flexDirection:'row'}}>
            <Icon name="search1" size={20} color="#333"/>
            <Text style={{color:'#333', marginHorizontal:10}}>Buscar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginVertical:20}}>
          <View style={{flexDirection:'row'}}>
            <Icon name="bells" size={20} color="#333"/>
            <Text style={{color:'#333', marginHorizontal:10}}>Notificações</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginVertical:20}}>
          <View style={{flexDirection:'row'}}>
            <Icon name="linechart" size={20} color="#333"/>
            <Text style={{color:'#333', marginHorizontal:10}}>Histórico</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginVertical:20}}>
          <View style={{flexDirection:'row'}}>
            <Icon name="hearto" size={20} color="#333"/>
            <Text style={{color:'#333', marginHorizontal:10}}>Favoritos</Text>
          </View>
        </TouchableOpacity>

      </View>
    </>
  )
};

export default CustomDrawer;