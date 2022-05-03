import { RFValue } from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

interface DateValueProps {
    selected: boolean;
}

export const Container = styled.View`
    flex: 1;
    
`;

export const Content = styled.View`
    padding-top: 30px;
    padding-left: 20px;
    padding-left: 20px;
`;

export const Header = styled.View`
    justify-content: center;
    align-items: center;
`;

export const ServiceTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text_700};
`;

export const ServicePeriod = styled.View``;

export const DateInfo = styled.View`
    width: 104px;
    height: 40px;
    flex-direction: row;

    background-color: ${({ theme }) => theme.colors.blue_sky};

    border-radius: 10px;
    margin-top: 30px;

    align-items: center;
    justify-content: space-between;
`;

export const DateValue = styled.Text<DateValueProps>`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.shape};
    padding-left: 15px;
`;

export const DateTitle = styled.Text<DateValueProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.shape};
    padding-right: 15px;

`;



