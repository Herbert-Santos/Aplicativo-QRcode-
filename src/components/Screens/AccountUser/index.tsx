import React from 'react';
import { View, FlatList, ImageBackground } from 'react-native';
import { ListItem } from '../../ListItem';
// import Icon from 'react-native-vector-icons/AntDesign';

import { Title, Container } from './styles';
import palestra from '/Users/hebertsantos/Developer/Aplicativo/mobilevent/src/assets/palestra.jpg';

const AccountUser: React.FC = () => {
    const AccountList = [
        {id:'1', accountUser: 'Palestra-2.0'},
        {id:'2', accountUser: 'Plataforma-Digital'},
        {id:'8', accountUser: 'PortalERP'},
    ];

    return (
        <ImageBackground source={palestra} style={{flex:1, justifyContent: 'center'}}>
        <Container>

            <View style={{borderBottomWidth:1, borderColor: '#fff'}}>
                <Title>Portal ERP</Title>
            </View>
                
            <FlatList 
                    data={AccountList}
                    keyExtractor={item => item.id}
                    renderItem={ ({item}) => (
                        <ListItem data={item}/>
                    )}
            />

        </Container>
        </ImageBackground>
    );
};

export default AccountUser;
