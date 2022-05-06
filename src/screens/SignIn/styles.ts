import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const Container = styled(GestureHandlerRootView)`
    flex: 1;  
    background: ${({ theme }) => theme.colors.shape};  
    justify-content: space-between;
`;

export const FieldButtonAnonymous = styled.View`
    position: absolute;

    margin-top: 115px;
    margin-left: 173px;
    
    background-color: ${({ theme }) => theme.colors.blue_sky};
    border-radius: 20px;
`;
export const ButtonAnonymous = styled.TouchableOpacity`
    padding: 10px;
`;
export const IconAnonymous = styled(AntDesign)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const Form = styled.View`
    margin-top: 50px;
    padding: 0 40px;
    width: 100%;
`;

export const Fields = styled.View`
    width: 100%; 
    margin-top: 110px;
`;

export const FieldCheck = styled.View`
    align-items: center;
    margin-top: -10px;
`;

export const ButtonForgot = styled.TouchableOpacity``;

export const Title = styled.Text`
    padding-top: 20px;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.coral};
    margin-bottom: ${RFValue(30)}px;
`;

export const FormFooter = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: ${RFValue(30)}px;
`;

export const Footer = styled.View`
    flex-direction: row;
    margin-bottom: 62px;
    background-color: ${({ theme }) => theme.colors.shape_100};
    width: 300px;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`;

export const ButtonRegister = styled.TouchableOpacity``;

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

 