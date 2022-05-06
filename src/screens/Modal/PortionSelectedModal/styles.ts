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
    align-items: center;
    margin-top: 15px;
`;
export const TextButton = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
    font-size: 20px;
    
`;
export const ButtonClose = styled.TouchableOpacity`
    height: 60px;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.blue_sky};
    padding: 0px 50px;
    border-radius: 50px;
`;
