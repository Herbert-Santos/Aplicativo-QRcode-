import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar />
    <Layout style={{flex: 1}}>
      <Routes /> 
    </Layout>
  </NavigationContainer>
);


export default () => (
  <ApplicationProvider {...eva} theme={eva.dark}>
    <App />
  </ApplicationProvider>
);
