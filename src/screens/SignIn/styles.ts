import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;  
    background: ${({ theme }) => theme.colors.primary_100};  
    justify-content: space-between;
    

`;

export const Form = styled.View`
    margin-top: 50px;
    padding: 0 40px;
    
    width: 100%;
`;

export const Fields = styled.View`
    width: 100%;
    
    margin-top: 142px;
`;


export const FieldCheck = styled.View`
    margin-top: 27px;
    
    align-items: center;
`;

export const ButtonForgot = styled.TouchableOpacity``;

export const Title = styled.Text`
    padding-top: 20px;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.coral};
`;

export const Footer = styled.View`
    flex-direction: row;
    margin-bottom: 62px;
    justify-content: center;
`;

export const ButtonRegister = styled.TouchableOpacity`
   
`;

export const TitleRegister = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape_dark};
    padding-right: 10.5px;
`;

export const TitleRegisterButton = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.blue_marine};
`;

 