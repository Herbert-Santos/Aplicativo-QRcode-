import React from 'react';
import { Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import { Container, ViewHeader, ViewInformationUser, ViewAccount, ViewList, TitleCard, ViewContainerText } from './styles';

const Feed:React.FC = () => {
  const Navigation = useNavigation();

  return (
    <Container>
      <ViewHeader>
        <TouchableOpacity onPress={() => Navigation.navigate('SignIn')}>
          <Icon name='leftcircleo' size={25} color='#000'/>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => Navigation.navigate('ScanerNavigation')}>
          <Icon name='bars' size={25} color='#000'/>
        </TouchableOpacity>
      </ViewHeader>
      
      <ViewInformationUser>
        <Text style={{fontSize:25, fontWeight: 'bold', textAlign:'center', color: '#3b3a3a'}}>Minhas Contas</Text>
      </ViewInformationUser>
      
      <ViewAccount>
        <ScrollView>
        <TouchableOpacity onPress={() => Navigation.navigate('Porsche')}>
          <ViewList>
            <Image
              source={require('../../../assets/porsche.jpeg')}
              style={{ width:60, height:60 }}
            />

            <ViewContainerText>
              <TitleCard>Stuttgart Porsche</TitleCard>
              <Text style={{color:'#686767'}}>Av. José de Souza Campos</Text>
              <Text style={{marginBottom:10, color:'#686767'}}>(19) 2122-9900 . Conta Ativa</Text>  
            </ViewContainerText>
          </ViewList>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Navigation.navigate('Honda')}>
          <ViewList>  
            <Image
              source={require('../../../assets/honda.jpeg')}
              style={{ width:60, height:60 }}
            />

            <ViewContainerText>
              <TitleCard>Honda Automóveis do Brasil</TitleCard>
              <Text style={{color:'#686767'}}>Estrada Municipal Valêncio Calegari</Text>
              <Text style={{marginBottom:10, color:'#686767'}}>(19) 4040-4447 . Conta Ativa</Text>
            </ViewContainerText>
          </ViewList>  
        </TouchableOpacity>
       
        <TouchableOpacity onPress={() => Navigation.navigate('Coca')}>
          <ViewList>
            <Image
              source={require('../../../assets/cocacola.jpeg')}
              style={{ width:60, height:60 }}
            />

            <ViewContainerText>
              <TitleCard>Coca-Cola FEMSA</TitleCard>
              <Text style={{color:'#686767'}}>Rod. Dom Gabriel Paulino Bueno Couto</Text>
              <Text style={{marginBottom:10, color:'#686767'}}>(11) 4582-6610 . Conta Ativa</Text>
            </ViewContainerText>
          </ViewList>  
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Navigation.navigate('Google')}>
          <ViewList>
            <Image
              source={require('../../../assets/google.png')}
              style={{ width:60, height:60 }}
            />

            <ViewContainerText>
              <TitleCard>Googleplex</TitleCard>
              <Text style={{color:'#686767'}}>Amphitheatre Parkway</Text>
              <Text style={{marginBottom:10, color:'#686767'}}>0800 047 4795 . Conta Ativa</Text>
            </ViewContainerText>
          </ViewList>  
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Navigation.navigate('TresM')}>
          <ViewList>
            <Image
              source={require('../../../assets/3m.png')}
              style={{ width:60, height:60 }}
            />

            <ViewContainerText>
              <TitleCard>3M do Brasil</TitleCard>
              <Text style={{color:'#686767'}}>Rod. Anhanguera, s/n - Nova Veneza, Sumaré</Text>
              <Text style={{marginBottom:10, color:'#686767'}}>0800 013 2333 . Conta Ativa</Text>
            </ViewContainerText>
          </ViewList>  
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Navigation.navigate('Natura')}>
          <ViewList>
            <Image
              source={require('../../../assets/natura.png')}
              style={{ width:60, height:60 }}
            />

            <ViewContainerText>
              <TitleCard>Natura</TitleCard>
              <Text style={{color:'#686767'}}>R. Alipio Simões - Jardim Ana Luiza, Itupeva</Text>
              <Text style={{marginBottom:10, color:'#686767'}}>(19) 99224-3937 . Conta Ativa</Text>
            </ViewContainerText>
          </ViewList>  
        </TouchableOpacity>
        </ScrollView>
      </ViewAccount>
    </Container>
  );
};

export default Feed;