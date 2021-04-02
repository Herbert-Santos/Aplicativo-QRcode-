import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';
import PasswordMassage from '../pages/PasswordMassage';
import TicketValid from '../pages/TicketValid';
import TicketInvalid from '../pages/TicketInvalid';
import ScanerNavigation from '../pages/ScanerNavigation';
import AccountUser from '../pages/AccountUser';
import Teste from '../pages/Teste';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () =>(
    <Auth.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#85929E'}
        }}
        initialRouteName='Teste'
    >
        <Auth.Screen name="SignIn" component={SignIn} />
        <Auth.Screen name="ForgotPassword" component={ForgotPassword} />
        <Auth.Screen name="PasswordMassage" component={PasswordMassage} />
        <Auth.Screen name="TicketValid" component={TicketValid} />
        <Auth.Screen name="TicketInvalid" component={TicketInvalid} />
        <Auth.Screen name="ScanerNavigation" component={ScanerNavigation} />
        <Auth.Screen name="AccountUser" component={AccountUser} />
        <Auth.Screen name="Teste" component={Teste} />

    </Auth.Navigator>
);

export default AuthRoutes;