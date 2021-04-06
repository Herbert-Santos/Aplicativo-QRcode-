
import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
    <Routes/>
  </ApplicationProvider>
  </NavigationContainer>
);


export default App;