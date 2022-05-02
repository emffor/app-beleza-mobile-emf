import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.colors.pink};
    
`;

export const HeaderContent = styled.View`
    width: 100%;
    padding-top: ${getStatusBarHeight() + 50}px;
   align-items: center;
`;

export const Form = styled.View`
    
`;

export const FieldTitle = styled.View`
    justify-content: center;
    align-items: center;

    padding: 0 30px;
`;

export const Title = styled.Text`
   font-size: ${RFValue(23)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.shape};

   text-align: center;
   padding-bottom: 12px;
`;

export const SubTitle = styled.Text`
   font-size: ${RFValue(13)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.shape};
   padding: 0 10px;
`;


export const Footer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;

    padding: 0 30px;
    margin: 34px 0;
`;

  export const ButtonRegister = styled.TouchableOpacity`
    margin-top: 34px;
  `;

  export const TitleRegister = styled.Text`
        font-size: ${RFValue(14)}px;
        font-family: ${({ theme }) => theme.fonts.regular};
        color: ${({ theme }) => theme.colors.shape};
  `;


