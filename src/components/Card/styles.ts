import styled, { css } from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

interface IsActiveProps {
    isActive: boolean;
}

export const Container = styled.View`
    padding: 0 10px;
`;

export const Content = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 15px;
    flex-direction: row;

    padding: 10px 35px;

    
    justify-content: space-between;
    align-items: center;

    margin-bottom: 18px;
`;

export const IconCard = styled.View`
    padding-right: 25px;
`;

export const DataCard  = styled.View`
    width: 150px;
`;

export const NameCard = styled.Text<IsActiveProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;
    color: ${({ isActive, theme }) => isActive ? theme.colors.coral : theme.colors.shape_dark};
`;

export const NumberCard  = styled.Text<IsActiveProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;
    color: ${({ isActive, theme }) => isActive ? theme.colors.coral: theme.colors.text};
`;

export const SelectedCard = styled.TouchableOpacity<IsActiveProps>`
    width: 25px;
    height: 25px;

    justify-content: center;
    align-items: center;

    border-radius: 20px;

    background-color: 
    ${({ isActive, theme }) => 
        isActive ? theme.colors.coral : theme.colors.shape
    };

    ${({ isActive, theme }) => !isActive && css`
        border-width: 1px;
        border-color: ${theme.colors.text};
    `};
    
`;

export const IconSelected = styled(Entypo)`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.shape};
`;
