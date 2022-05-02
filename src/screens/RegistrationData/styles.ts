import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    
    background: ${({ theme }) => theme.colors.primary_100};
    padding: ${RFValue(51)}px ${RFValue(40)}px;
`;

export const Header = styled.View``;
export const Fields = styled.View``;
export const Footer = styled.View``;