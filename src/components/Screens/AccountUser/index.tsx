import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Container, Title} from './styles';

const AccountUser:React.FC = () => {
  return(
    <View>
      <SafeAreaView style={{flex:1}}>
        <TouchableOpacity
          style={{alignItems:'flex-end', margin:16,}}
        >
          <Icon name="bars" size={20} color="#fff"/>
        </TouchableOpacity>
        <Text>oi</Text>
      </SafeAreaView>
    </View>
  )
};

export default AccountUser;