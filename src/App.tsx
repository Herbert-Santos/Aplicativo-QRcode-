import React from 'react';
import {StatusBar, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout,TabView } from '@ui-kitten/components';

import Routes from './routes';

const HomeScreen = () => (
  <NavigationContainer>
    <Layout style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
      <Routes/>
    </Layout>
  </NavigationContainer>
);

export default () => (
  <ApplicationProvider {...eva} theme={eva.dark}>
    <HomeScreen />
  </ApplicationProvider>
);