import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  height: 150px;
  
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 30px;

  margin-right: 20px;
`;

export const LogoImage = styled.Image`
  width: 110px;
  height: 75px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const Details = styled.View`
  margin-top: 18px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text_700};

`;

export const TextPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.coral};
`;







