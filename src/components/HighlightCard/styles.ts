import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: ${RFValue(150)}px;
    border-radius: 5px;

    padding: 19px 0px;
    padding-bottom: ${RFValue(42)}px;
    margin-right: 25px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;


