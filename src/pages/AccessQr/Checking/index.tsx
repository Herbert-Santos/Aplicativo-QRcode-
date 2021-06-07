import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

const AccessQrChecking: React.FC =  () => {
    return (
        <Container>
            <Text style={{color: '#fff', fontSize:30, top:300}}>Verificando . . .</Text>
        </Container>
    );
};

export default AccessQrChecking; 

// Aqui será acessado, quando o usuário permitir acesso á câmera
// Uma breve verificação aparecerá na sua tela( Verificando . . . ) antes de abrir o leitor QR