import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 50px;
`;

export const Content = styled.View`
    margin: 25px;
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
    padding-bottom: 40px;
`;


export const Field = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.colors.text_100};
    border-radius: 7px;
`;

export const LabelCity = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.text_100};
    font-size: 16px;

    padding: 18px 30px;
`;

export const Footer = styled.View`
    align-items: center;
    margin-bottom: -150px;
    
`;

