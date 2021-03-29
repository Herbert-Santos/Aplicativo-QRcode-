import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import {Container, ButtonText} from './styles';

const Button:React.FC = ({children}) => (
    <Container>
        <ButtonText>{children}</ButtonText>
    </Container>
);

export default Button;