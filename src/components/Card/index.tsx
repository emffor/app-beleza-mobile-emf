import React from 'react';

import CardSvg from '../../assets/card.svg';
import {
  Container,
  Content,
  IconCard,
  DataCard,
  NameCard,
  NumberCard,
  SelectedCard,
  IconSelected,
} from './styles';

interface Props {
    isActive: boolean;
    selectCard: () => void;
    nameCard: string;
    numberCard: string; 
}

export function Card({
    isActive,
    selectCard,
    nameCard,
    numberCard,
}: Props) {
  return (
    <Container>
        <Content>
            <IconCard>
                <CardSvg 
                    width={55}
                    height={79}
                />
            </IconCard>

            <DataCard>
                <NameCard isActive={isActive}>{nameCard}</NameCard>
                <NumberCard isActive={isActive}>**** {numberCard}</NumberCard>
            </DataCard>

            <SelectedCard isActive={isActive} onPress={selectCard}>
                <IconSelected 
                    name="check"
                />
            </SelectedCard>
        </Content>
    </Container>
  );
}