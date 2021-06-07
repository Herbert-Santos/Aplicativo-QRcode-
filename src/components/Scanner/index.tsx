import React, { useState, useEffect } from 'react';
import { Button, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

import TicketValid from '../../pages/TicketValid';
import BarCode from '../ScanerNavigation/Imput/BarCode';

import AccessQrChecking from '../../pages/AccessQr/Checking';
import AccessQrDenied from '../../pages/AccessQr/Denied';
import { Container, ViewScanner } from './styles';
import TicketInvalid from '../../pages/TicketInvalid';

export default function Scanner(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const Navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    props.onCodeScanned(type, data);
    // alert Ticket valido
  };

  if (hasPermission === null) {
    return (
      // Solicitando permissão de câmera
      <AccessQrChecking/>
    )
  }
  if (hasPermission === false) {
    return (
      // Sem acesso à câmera
      <AccessQrDenied/>
    )
  }

  return (
    <Container>
      <ViewScanner>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {handleBarCodeScanned && <BarCode/>}
        {scanned && <TicketValid/>}
        {undefined && <TicketInvalid/>}
      </ViewScanner>
    </Container>
  );
}

//export default Scanner;
