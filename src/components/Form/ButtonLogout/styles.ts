import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize'; 

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 5px;

`;

export const Icon = styled(FontAwesome)`
    font-size: ${RFValue(50)}px;
`;