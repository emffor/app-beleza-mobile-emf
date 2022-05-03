import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;  
    background: ${({ theme }) => theme.colors.primary_100};  
    justify-content: space-between;
`;

export const Form = styled.View`
    margin-top: 50px;
    width: 100%;
    
    justify-content: space-between;
`;

export const Fields = styled.View`
    width: 100%;
    padding: 0 40px;
    margin-top: 40px;
`;


export const FieldCheck = styled.View`
    flex-direction: row;

    margin-top: 27px;
    
    align-items: center;
`;

export const Checkbox = styled.View`
    width: 20px;
    height: 20px;

    margin-right: 10px;

    border-width: 1px;
    border-radius: 10px;
    border-color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const Footer = styled.View`
    width: 100%;
    height: ${RFValue(118)}px;

    padding: 0 39px;
    margin-top: 60px;
    justify-content: center;

    background: ${({ theme }) => theme.colors.shape};

    
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;