import  React from 'react';
import { Text } from 'react-native';

import { Container } from './styles'

export const ListItem: React.FC = ({data}) => {
    return(
        <Container>
            <Text>{data.accountUser}</Text>
        </Container>
    )
}