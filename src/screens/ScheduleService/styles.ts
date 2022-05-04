import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';




export const Container = styled.View`
    flex: 1;
    
`;

export const Content = styled.ScrollView`
    flex: 1;
    margin: 20px 20px 10px 20px;
    
`;

export const Header = styled.View`
    justify-content: center;
    align-items: center;
`;

export const ServiceTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text_700};
    margin-top: -20px;
`;

export const ServicePeriod = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 30px;
`;

export const DateInfo = styled.View`
    width: 104px;
    height: 40px;
    flex-direction: row;

    background-color: ${({ theme }) => theme.colors.blue_sky};

    border-radius: 10px;

    align-items: center;
    justify-content: space-between;

    margin-right: 10px;
    margin-left: 10px;
`;

export const DateValue = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.shape};
    padding-left: 15px;
`;

export const DateTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.shape};
    padding-right: 15px;

`;

export const DatePast = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const DateFuture = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const FieldMessage = styled.View`
    width: 100%;
    height: ${RFValue(54)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

export const Message = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.text_300};
`;

export const Description = styled.Text`
    margin: 30px 0;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text_700};
`;

export const PeriodDay = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15px;
    margin-bottom: 15px;
`;

export const NameDay = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_700};
`;

export const SchedulingTime = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;



    



export const TimeMorning = styled.View``;

export const TimeAfternoon = styled.View``;

export const TimeEvening = styled.View``;

export const Footer = styled.View`
    width: 100%;
    height: ${RFValue(118)}px;

    padding: 0 39px;
    
    justify-content: center;

    background: ${({ theme }) => theme.colors.shape};

    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;


