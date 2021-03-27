import React from 'react';
import {TextInputProps} from 'react-native';

import { Container, TextInput } from './styles';
import Button from '../Button/index';

interface InputProps extends TextInputProps {
    name:  Number;
}

const ScannerManual:React.FC = () => (
    <>
        <Container >
            <TextInput name="codigo" placeholder="Digite seu código"/>
        </Container>
        <Button>PRONTO</Button>
    </>
);

export default ScannerManual; 