import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';

import Signin from '../SignIn';

const Teste = () => (
    <>
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin:23}}>
    <Text category='h1'>Ui kitten em testes</Text>
    <Button style={{borderColor: "#fff"}}>
        {evaProps => <Text {...evaProps}>BUTTON</Text>}
    </Button>
  </Layout>
  </>
);

export default () => (
  <ApplicationProvider {...eva} theme={eva.dark}>
    <Teste />
  </ApplicationProvider>
);