import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    
`;



export const ButtonCloseModal = styled.TouchableOpacity`
    justify-content: center;
    align-items: center; 
    background-color: ${({ theme }) => theme.colors.blue_sky};
`;

export const ButtonCloseModalText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.shape};
    padding: 20px;
`;