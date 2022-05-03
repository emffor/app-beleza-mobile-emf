import React from 'react';
import {Feather} from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { 
  Calendar as CustomCalendar, 
  LocaleConfig
} from 'react-native-calendars';

import {
  Container
} from './styles';

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  today: 'Hoje'
}

LocaleConfig.defaultLocale = 'pt-br';

export function Calendar(){
  const theme = useTheme();

  return (
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
          textDayFontSize: 18,
          textDayHeaderFontFamily: theme.fonts.medium,
          textDayHeaderFontSize: 15,
          textSecondaryColor: theme.colors.shape_dark,
          textMonthFontFamily: theme.fonts.bold,
          textMonthFontSize: 20,
          monthTextColor: theme.colors.shape_dark,
          arrowStyle: {
            marginHorizontal: -15
            
          }
        }}
        



    />
  );
}