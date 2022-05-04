import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface HourValueProps {
    status: 'active' | 'waiting' | 'disabled';
}

export const HourValue = styled.TouchableOpacity<HourValueProps>`
    width: ${RFValue(83)}px;
    height: ${RFValue(40)}px;
    
    
    border-radius: 14px;
    margin-bottom: 12px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.blue_sky};

    ${({ status, theme}) => status === 'waiting' && css` 
        background-color: ${theme.colors.shape};
        border-width: 2px;
        border-color: ${theme.colors.text_100};
    `}

    ${({ status, theme}) => status === 'active' && css` 
        background-color: ${theme.colors.blue_sky};
    `}

    ${({ status, theme}) => status === 'disabled' && css` 
        background-color: ${theme.colors.primary};
    `}

    `;

export const Time = styled.Text<HourValueProps>`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.bold};

    ${({ status, theme}) => status === 'waiting' && css` 
        color: ${theme.colors.text_100};
    `}

    ${({ status, theme}) => status === 'active' && css` 
        color: ${theme.colors.shape};
    `}

    ${({ status, theme}) => status === 'disabled' && css` 
        color: ${theme.colors.shape};
    `}
`;