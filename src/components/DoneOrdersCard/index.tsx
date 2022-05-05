import React, { useState } from 'react';
import { Stars } from '../Stars';

import {
  Container,
  ContentHeader,
  Header,
  FieldTitle,
  Title,
  FieldDate,
  DateDate,
  FieldStars,
  ServiceStatus
} from './styles';


interface DataProps {
  title: string;
  date: string;
  stars: number;
  status: string;
}

interface Props {
  data: DataProps;
}

export function DoneOrdersCard({ data  } : Props) {
  const [ selectStars , setSelectStars ] = useState(false);
  

  function handleSelectCard(){
    setSelectStars(!selectStars);
  }

  return (
    <Container>
            <ContentHeader>
              <Header>
                  <FieldTitle>
                    <Title>{data.title}</Title>
                  </FieldTitle>

                  <FieldDate>
                    <DateDate>{data.date}</DateDate>
                  </FieldDate>

                  <FieldStars>
                      <Stars 
                        isActive={selectStars}
                        selectStar={handleSelectCard}
                      />
                      <Stars 
                        isActive={selectStars}
                        selectStar={handleSelectCard}
                      />
                      <Stars 
                        isActive={selectStars}
                        selectStar={handleSelectCard}
                      />
                      <Stars 
                        isActive={false}
                        selectStar={handleSelectCard}
                      />
                      <Stars 
                        isActive={false}
                        selectStar={handleSelectCard}
                      />
                  </FieldStars>

                  <ServiceStatus>
                    {data.status}
                  </ServiceStatus>
              </Header>
            </ContentHeader>
    </Container>
  );
}