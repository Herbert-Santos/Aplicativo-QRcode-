import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {ApplicationProvider, Layout} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <NavigationContainer>
      <StatusBar />
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Routes />
    </View>
    </NavigationContainer>
  </>
);


export default App;