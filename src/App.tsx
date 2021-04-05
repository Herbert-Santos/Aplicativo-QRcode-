import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {ApplicationProvider} from '@ui-kitten/components';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar />
    <View style={{flex: 1}}>
      <Routes /> 
    </View>
  </NavigationContainer>
);


export default App; 
