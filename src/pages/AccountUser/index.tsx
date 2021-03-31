
import React from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import { ListItem } from '../../components/ListItem';

import { Container, Title } from './styles';

const AccountUser: React.FC = () => {
    const AccountList = [
        {id:'1', accountUser: 'login'},
        {id:'2', accountUser: 'loginTeem'},
        {id:'3', accountUser: 'loginBussines'},
        {id:'4', accountUser: 'loginEvent'},
        {id:'5', accountUser: 'loginDeveloper'},
        {id:'6', accountUser: 'loginFrontEnd'},
        {id:'7', accountUser: 'loginBackEnd'},
    ];

    return (
        <Container>
                <ScrollView>
            <View>
                <Title>Portal ERP</Title>
                
                <FlatList 
                    data={AccountList}
                    keyExtractor={item => item.id}
                    renderItem={ ({item}) => (
                        <ListItem
                            data={item}
                        />
                    )}
                />
            </View>
            </ScrollView>
        </Container>
    );
};

export default AccountUser;
