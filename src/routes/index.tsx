import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';
import PasswordMassage from '../pages/PasswordMassage';
import TicketValid from '../pages/TicketValid';
import TicketInvalid from '../pages/TicketInvalid';
import ScanerNavigation from '../pages/ScanerNavigation';
import Drawer from '../pages/Drawer';
import CustomDrawer from '../components/Screens/CustomDrawer';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        screenOptions={{
            cardStyle: {backgroundColor: '#2E4061'}
        }}
        initialRouteName='SignIn'
    >
        <Auth.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
        <Auth.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown:false}}/>
        <Auth.Screen name="PasswordMassage" component={PasswordMassage} options={{headerShown:false}}/>
        <Auth.Screen name="TicketValid" component={TicketValid} options={{headerShown:false}}/>
        <Auth.Screen name="TicketInvalid" component={TicketInvalid} options={{headerShown:false}}/>
        <Auth.Screen name="ScanerNavigation" component={ScanerNavigation} options={{headerShown:false}}/>
        <Auth.Screen name="CustomDrawer" component={CustomDrawer} options={{headerShown:false}}/>
        <Auth.Screen name="Drawer" component={Drawer} options={{headerShown:false}}/>
    </Auth.Navigator>
);

export default AuthRoutes;