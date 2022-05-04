import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(70)}px;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center; 
`;

export const Title = styled.Text`
  font-size: 18px;

  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_700};
  
  padding-left: 80px;
`;
