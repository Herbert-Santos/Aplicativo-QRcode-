
import React from 'react';
import { View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { ListItem } from '../../components/ListItem';
import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/AntDesign';

import { Title } from './styles';
import palestra from '/Users/hebertsantos/Developer/Aplicativo/mobilevent/src/assets/palestra.jpg';



const AccountUser: React.FC = () => {
    const AccountList = [
        {id:'1', accountUser: 'Coca-Cola'},
        {id:'2', accountUser: 'Ford'},
        {id:'3', accountUser: 'Apple'},
        {id:'4', accountUser: 'Mercedes-Benz'},
        {id:'5', accountUser: 'McDonald’s'},
        {id:'6', accountUser: 'Bmw'},
        {id:'7', accountUser: 'Volvo'},
        {id:'8', accountUser: 'PortalERP'},
    ];

    const navigation = useNavigation();

    return (
        <ImageBackground source={palestra} style={{flex:1, justifyContent: 'center'}}>

                <View style={{borderBottomWidth:1, borderColor: '#fff'}}>
                    <Title>Portal ERP</Title>
                </View>
                
                <FlatList 
                    data={AccountList}
                    keyExtractor={item => item.id}
                    renderItem={ ({item}) => (
                    <ListItem data={item}/>
                )}/>
        </ImageBackground>
    );
};

export default AccountUser;
