import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons'; 
import { RFValue } from 'react-native-responsive-fontsize'; 

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  
`;

export const Icon = styled(AntDesign)`
    font-size: ${RFValue(24)}px;
    color: #fff;
`;