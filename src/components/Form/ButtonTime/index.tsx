import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import {
  HourValue,
  Time,
} from './styles';

interface TimeProps extends TouchableOpacityProps {
    time: string;
    status: 'active' | 'waiting' | 'disabled';
}

interface colors {
    blue: 'theme.colors.blue_sky';
}

export function ButtonTime({ 
    time, 
    status, 
    ...rest 
}: TimeProps ) {
    const theme = useTheme();

  return (
        <HourValue status={status} {...rest}>
            <Time status={status}>{time}</Time>
        </HourValue>
  );
}