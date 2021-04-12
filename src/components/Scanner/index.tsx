import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scanner(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    props.onCodeScanned(type, data);
    // alert(`O código de barras com tipo ${type} e dados ${data} foi escaneado!`);
  };

  if (hasPermission === null) {
    return <Text>Solicitando permissão de câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  return (
    <View style={{flex: 1, backgroundColor:'#2E4061'}}>

      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        
      />
      {scanned && <Button title={'Toque para scanear novamente'} onPress={() => setScanned(false)} />}
    </View>
  );
}

