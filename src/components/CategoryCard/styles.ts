import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  height: 231px;
  
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 30px;

  margin-right: 20px;
`;

export const LogoImage = styled.Image`
  width: 165px;
  height: 94px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const Details = styled.View`
  margin-top: 18px;
  margin-left: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_700};

`;

export const TextPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.coral};
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.coral};
  
`;

export const FieldButton = styled.TouchableOpacity`
  padding: 0 10px; 
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(35)}px;

  justify-content: center;
  align-items: center;

  background-color:${({ theme }) => theme.colors.blue_sky};

  border-radius: 50px;
  margin-top: 10px;
`

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
`;



