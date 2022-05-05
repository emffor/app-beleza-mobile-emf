import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
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