import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Screens from '../../components/Screens';
import Feed from '../../components/Screens/Feed';
import CustomDrawer from '../../components/Screens/CustomDrawer';
import TresM from '../../components/Screens/PagesQr/3m';
import Coca from '../../components/Screens/PagesQr/Coca';
import Honda from '../../components/Screens/PagesQr/Honda';
import Porsche from '../../components/Screens/PagesQr/Porsche';
import Google from '../../components/Screens/PagesQr/Google';
import Natura from '../../components/Screens/PagesQr/Natura';

const Drawer = createDrawerNavigator();

const Navigator = () => {
    return(
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer/>}
            initialRouteName='Feed'
            drawerContentOptions={{
                contentContainerStyle:{backgroundColor:'#111E36', flex:1},
                labelStyle:{color:'#fff'},
                activeBackgroundColor:'#444242',
                itemStyle:{marginVertical:1}
            }}
        >
        <Drawer.Screen name="Feed" component={Feed}/>
        <Drawer.Screen name="Screens" component={Screens}/>
        <Drawer.Screen name="TresM" component={TresM}/>
        <Drawer.Screen name="Coca" component={Coca}/>
        <Drawer.Screen name="Honda" component={Honda}/>
        <Drawer.Screen name="Porsche" component={Porsche}/>
        <Drawer.Screen name="Google" component={Google}/>
        <Drawer.Screen name="Natura" component={Natura}/>
    </Drawer.Navigator>
)};
 
export default Navigator;

// Aqui contem todas as paginas que incluem uma navegação Drawer navigation( Gaveta )