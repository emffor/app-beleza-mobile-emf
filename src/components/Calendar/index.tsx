import React from 'react';
import {Feather} from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { 
  Calendar as CustomCalendar, 
  LocaleConfig
} from 'react-native-calendars';

import {
  Container,
  ButtonCloseModal,
  ButtonCloseModalText,
} from './styles';

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  today: 'Hoje'
}

LocaleConfig.defaultLocale = 'pt-br';

interface Props {
  onPress: () => void;
}

export function Calendar({ onPress } : Props){
  const theme = useTheme();

  return (
    <Container>
        <CustomCalendar
            renderArrow={( direction ) => 
              <Feather
                size={24}
                color={theme.colors.shape_dark}
                name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
              />  
            }

            headerStyle={{
              backgroundColor: theme.colors.shape,
              borderBottomWidth: 0.5,
              borderBottomColor: theme.colors.shape_dark,
              paddingBottom: 10,
              marginBottom: 10
            }}

            theme={{
              textDayFontFamily: theme.fonts.regular,
              textDayHeaderFontFamily: theme.fonts.bold,
              textDayFontSize: 15,
              textDayHeaderFontSize: 12,
              textMonthFontSize: 20,
              textSecondaryColor: theme.colors.shape,
              monthTextColor: theme.colors.shape_dark,
              arrowStyle: {
                marginHorizontal: -15
              }
            }}

            firstDay={1}
            markingType="period"
            onDayPress={day => {
              console.log('selected day', day);
            }}
        />

            <ButtonCloseModal
              onPress={onPress}
            >
                <ButtonCloseModalText>Selecionar</ButtonCloseModalText>
            </ButtonCloseModal>


  </Container>
  );
}