import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(70)}px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color:${({ theme }) => theme.colors.blue_sky};

  border-radius: 50px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;

  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  
  margin-left: 7px;
`;
