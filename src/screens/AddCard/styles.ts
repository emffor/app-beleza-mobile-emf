import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ScrollView``;

export const Form = styled.View`
    
`;

export const Content = styled.View`
    margin-top: 60px;
    padding: 0 25px;
`;
export const FieldInputs = styled.View``;

export const FieldIcon = styled.View`
    position: absolute;
    margin-top: ${RFValue(25)}px;
    padding-left: ${RFValue(250)}px;
`;

export const FormInput = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Footer = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.shape};

    padding-top: 30px;
    padding-bottom: 20px;
    padding-left: 40px;
    padding-right: 40px;

    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

    margin-top: 80px;
`;


export const FieldButtonAdd = styled.View``;