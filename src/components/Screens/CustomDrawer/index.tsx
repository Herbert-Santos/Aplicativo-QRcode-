import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import { Container, ViewUser, ViewDataUser, ViewButtoms } from './styles';

const CustomDrawer:React.FC = () => {

  const Navigation = useNavigation();

  return(
    <Container>
      <ViewUser>
          <Image 
            source={ require('../../../assets/marcelo.jpeg' )}
            style={{ width:60, height:60, borderRadius:50 }}
          />
        <ViewDataUser>
          <Text style={{ color:'#fff', textAlign:'center' }}>Olá, Marcelo</Text>
          <Text style={{ color:'#fff', textAlign:'center' }}>marcelosinhorini@gmail.com</Text>
          <TouchableOpacity>
            <Text style={{ color:'#fff', textAlign:'center', marginTop:5, fontWeight:'bold'}}>Portal de Eventos</Text>
          </TouchableOpacity>
        </ViewDataUser>
      </ViewUser>

      <ViewButtoms>
        <TouchableOpacity
          onPress={() => Navigation.navigate('Feed')}
          style={{marginVertical:20}}
        >
          <View style={{flexDirection:'row'}}>
            <Icon 
              name="pushpino" 
              size={20} 
              color="#333"
            />
            <Text style={{color:'#333', marginHorizontal:10}}>Seus eventos</Text>
          </View>
        </TouchableOpacity>
      </ViewButtoms>
    </Container>
  )
};

export default CustomDrawer;