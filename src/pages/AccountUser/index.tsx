
import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from '../../components/ListItem';

import { Container, Title } from './styles';

const AccountUser: React.FC = () => {
    const AccountList = [
        {id:'1', accountUser: 'Coca-Cola'},
        {id:'2', accountUser: 'Ford'},
        {id:'3', accountUser: 'Apple'},
        {id:'4', accountUser: 'Mercedes-Benz'},
        {id:'5', accountUser: 'McDonald’s'},
    ];

    return (
        <Container>
            <View>
                <Title>Portal ERP</Title>
            </View>
                <FlatList 
                    data={AccountList}
                    keyExtractor={item => item.id}
                    renderItem={ ({item}) => (
                        <ListItem
                            data={item}
                        />
                    )}
                />
        </Container>
    );
};

export default AccountUser;
