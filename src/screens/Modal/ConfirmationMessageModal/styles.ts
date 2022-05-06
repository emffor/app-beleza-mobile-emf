import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 50px;
`;

export const Content = styled.View`
    margin: 25px;
    flex-direction: row;
`;

export const Header = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: ${({theme}) => theme.colors.title};
    font-family: ${({theme}) => theme.fonts.regular};
    padding-bottom: 50px;
`;

export const SubTitle = styled.Text`
    font-size: 14px;
    color: ${({theme}) => theme.colors.text_100};
    padding-bottom: 50px;
`;  


export const Field = styled.View`
    width: 100%;
    flex-direction: row;
    
    justify-content: space-between;
    align-items: center;
    
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.text_100};
    border-radius: 7px;

    margin-bottom: 30px;
`;

export const LabelPrice = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.text_100};
    font-size: 16px;

    padding: 18px 30px;
`;

export const Footer = styled.View`
     position: absolute;
     right: 0;
     
`;

export const IconButton = styled(Ionicons)`
    color: ${({ theme }) => theme.colors.shape_dark};
    font-size: 20px;
`;

export const ButtonClose = styled.TouchableOpacity`
    padding: 3px;
`;
