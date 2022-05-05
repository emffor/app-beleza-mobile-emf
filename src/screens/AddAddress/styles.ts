import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
`;

export const Content = styled.View`
    margin-top: 60px;
    padding: 0 25px;
`;

export const FormCep = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    margin-right: 100px;
    margin-left: 20px;
    margin-bottom: 10px;

    border-bottom-width: 1px;
    text-align: center;
    
    
    
`;
export const ButtonText = styled.Text``;
export const FieldInputs = styled.View``;


export const FormInput = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const FieldStateCity = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const ButtonState = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.border};
    border-radius: 14px;
    background-color: ${({ theme }) => theme.colors.shape};

`;
export const TitleButtonState = styled.Text`
    padding-top: 28px;
    padding-bottom: 28px;
    padding-left: 28px;
    padding-right: 78px;
    color: ${({ theme }) => theme.colors.text_300};
    font-size: 12px;
`;
export const IconState = styled(AntDesign)`
    font-size: 12px;
    padding-right: 15px;
    color: ${({ theme }) => theme.colors.text_300};
`;

export const ButtonCity = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.border};
    border-radius: 14px;
    background-color: ${({ theme }) => theme.colors.shape};
`;
export const TitleButtonCity = styled.Text`
    padding-top: 28px;
    padding-bottom: 28px;
    padding-left: 28px;
    padding-right: 78px;
    color: ${({ theme }) => theme.colors.text_300};
    font-size: 12px;
`;

export const IconCity = styled(AntDesign)`
    font-size: 12px;
    padding-right: 15px;
    color: ${({ theme }) => theme.colors.text_300};
`;