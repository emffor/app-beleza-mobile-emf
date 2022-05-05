import React from 'react';

import {
  Container,
  ContentHeader,
  Header,
  FieldTitle,
  Title,
  FieldDate,
  DateDate,
  Address,
  AddressTitle,
  AddressText,
  Price
} from './styles';

interface DataProps {
  title: string;
  date: string;
  address: string;
  price: string;
}

interface Props {
  data: DataProps;
}

export function OpenOrdersCard( { data } : Props ) {
  return (
    <Container>
            <ContentHeader>
              <Header>
                  <FieldTitle>
                    <Title>
                        {data.title}
                    </Title>
                  </FieldTitle>

                  <FieldDate>
                    <DateDate>
                        {data.date}
                    </DateDate>
                  </FieldDate>

                  <Address>
                    <AddressTitle>
                        No endereço
                    </AddressTitle>
                    <AddressText>
                        {data.date}
                    </AddressText>
                  </Address>

                  <Price>R$ {data.price}</Price>
              </Header>
            </ContentHeader>
    </Container>
  );
}