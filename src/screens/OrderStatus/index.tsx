import React, { useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { DoneOrdersCard } from '../../components/DoneOrdersCard';
import { OpenOrdersCard } from '../../components/OpenOrdensCard';
import { servicesDone, servicesOpen } from '../../utils/services';

import {
  Container,
  Content,
  Title,
  Header,
  TitleProgress,
  TitleDone
,
} from './styles';

export function OrderStatus(){

  
  return (
    <Container>
        <Content>
            <Header><Title>Pedidos</Title></Header>

            <TitleProgress>Em andamento</TitleProgress>
            
            <ScrollView>
              {
                servicesOpen.map(item => (
                  <OpenOrdersCard data={item} />
                ))
              }
            </ScrollView>

            <TitleDone>Concluídos</TitleDone>
            
            <ScrollView>
              { 
                servicesDone.map(item => (
                  <DoneOrdersCard data={item} />
                ))
              }
            </ScrollView>
            
        </Content>
    </Container>
  );
}