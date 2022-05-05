import { RFValue } from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

interface IsActiveProps {
    isActive: boolean;
}

export const Container = styled.View`
    flex: 1;  
    background: ${({ theme }) => theme.colors.primary_100};  
    justify-content: space-between;
`;

export const Form = styled.View`
    margin-top: 50px;
    width: 100%;
    
    justify-content: space-between;
`;

export const Fields = styled.View`
    width: 100%;
    padding: 0 40px;
    margin-top: 40px;
`;


export const FieldCheck = styled.View`
    flex-direction: row;

    margin-top: 27px;
    
    align-items: center;
    padding-left: 10px;
`;


export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title};
    margin-left: 10px;
`;

export const Footer = styled.View`
    width: 100%;
    height: ${RFValue(118)}px;

    padding: 0 39px;
    margin-top: 60px;
    justify-content: center;

    background: ${({ theme }) => theme.colors.shape};

    
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;

export const SelectedTerms = styled.TouchableOpacity<IsActiveProps>`
    width: 25px;
    height: 25px;

    justify-content: center;
    align-items: center;

    border-radius: 20px;

    background-color: 
    ${({ isActive, theme }) => 
        isActive ? theme.colors.blue_marine_light : theme.colors.shape
    };

    ${({ isActive, theme }) => !isActive && css`
        border-width: 1px;
        border-color: ${theme.colors.text};
    `};
`;

export const IconSelected = styled(AntDesign)`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.shape};
`;