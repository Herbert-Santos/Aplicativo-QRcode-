import styled from 'styled-components/native';
import { RectButton }from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    height: 60px;
    background: #fff;
    border-radius: 10px;
    margin-top: 10px;

    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-size: 18px;
    color: #000000;
`;