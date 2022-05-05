import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    margin-bottom: 50px;
    flex-direction: row;
`;

export const Input = styled.TextInput`
    width: 100%;
    padding: 26px 18px;

    font-size: 12px;
    font-family: ${({theme}) => theme.fonts.regular};
    
    color: ${({theme}) => theme.colors.text_700};
    background: ${({ theme }) => theme.colors.shape};
    
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.border};
    border-radius: 25px;;  
`;

export const Button = styled.TouchableOpacity`
    position: absolute;
    border-radius: 25px;
    padding: 15px;
    right: 0;
    margin-top: 15px;
`;

export const Icon = styled(Feather)`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text_700};
`;