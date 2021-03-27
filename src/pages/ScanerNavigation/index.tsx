import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import ScannerManual from '../../components/ScanerNavigation/Imput';

import Scanner from '../../components/Scanner';
import { Container } from './styles';

const onCodeScanned = (type, data) => {
  console.log(data, type);
};

const FirstRoute: React.FC = () => (
  <Container>
      <Scanner onCodeScanned={onCodeScanned}/>
  </Container>   
);

const SecondRoute: React.FC = () => (
  <Container>
    <ScannerManual/>
  </Container>
);

export default function ScanerNavigation() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  
  const [routes] = React.useState([
    { key: 'first', title: 'QRcode'},
    { key: 'second', title: 'Código' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: 'gray' }}
      getLabelText={({ route }) => route.title}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}