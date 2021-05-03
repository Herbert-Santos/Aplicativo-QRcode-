import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Screen from '../../components/Screens';
// import AccountUser from '../AccountUser';
import Feed from '../../components/Screens/Feed';
import AccountUser from '../../components/Screens/AccountUser';
import Help from '../../components/Screens/Help';
import CustomDrawer from '../../components/Screens/CustomDrawer';

const Drawer = createDrawerNavigator();

const Navigator = () => {
    return(
        <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer/>}
        initialRouteName='Screen'
        drawerContentOptions={{
            contentContainerStyle:{backgroundColor:'#111E36', flex:1},
            labelStyle:{color:'#fff'},
            activeBackgroundColor:'#444242',
            itemStyle:{marginVertical:1}
        }}
        
    >
        <Drawer.Screen name="Screen" component={Screen}/>
        <Drawer.Screen name="AccountUser" component={AccountUser} />
        <Drawer.Screen name="Feed" component={Feed}/>
        <Drawer.Screen name="Help" component={Help}/>
    </Drawer.Navigator>
)};
 
export default Navigator;
