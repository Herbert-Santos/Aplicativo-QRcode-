import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

const AccessQrDenied: React.FC =  () => {
    return (
        <Container>
            <Text style={{color: '#fff', fontSize:30, top:300}}>Você não tem acesso a câmera</Text>
        </Container>
    );
};

export default AccessQrDenied; 

// Aqui será apresentado, quando o usuário não permitir acesso a sua câmera