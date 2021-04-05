import React from 'react';
import { Container, ButtonText } from './styles';
import { RectButtonProperties } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProperties {
    children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <Container {...rest}>
        <ButtonText>{children}</ButtonText>
    </Container>
);

export default Button;

// import React from 'react';
// import * as eva from '@eva-design/eva';
// import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
// import { Container } from '../Input/styles';

// const Botao: React.FC = () => (
//     <Layout>
//         <Button style={{borderColor: "#fff"}}>
//             {evaProps => <Text {...evaProps}>BUTTON</Text>}
//         </Button>
//     </Layout>
// );

// export default Botao;
