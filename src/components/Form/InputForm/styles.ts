import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TextInput`
    flex: 1;
    width: 100%;
    padding: 26px 18px;
    
    margin: 0 5px;
    

    font-size: 12px;
    font-family: ${({theme}) => theme.fonts.regular};
    
    color: ${({theme}) => theme.colors.text_700};
    background: ${({ theme }) => theme.colors.shape};
    
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.border};
    border-radius: 12px;

    margin-bottom: 20px;
`;