import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from '../../components/ListItem';

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
                    renderItem={ ({item}) => (
                        <ListItem
                            data={item}
                        />
                    )}
                />
            </View>
        </Container>
    );
};

export default AccountUser;