import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar
      barStyle={'light-content'}
      backgroundColor={'#2E4061'}
    />
    <View style={{flex:1}}>
      <Routes /> 
    </View>
  </NavigationContainer>
);


export default App;
