import React from 'react';
import { View, FlatList } from 'react-native';
import { TabBarItem } from 'react-native-tab-view';

import { Container, Title } from './styles';

const AccountUser: React.FC = () => {
    const AccountList = [
        {id:'1', accountUser: 'login'},
        {id:'2', accountUser: 'loginTeem'},
        {id:'3', accountUser: 'loginBussines'},
    ];

    return (
        <Container>
            <View>
                <Title>Portal ERP</Title>
                <FlatList 
                    data={AccountList}
                    keyExtractor={item => item.id}
                />
            </View>
        </Container>
    );
};

export default AccountUser;