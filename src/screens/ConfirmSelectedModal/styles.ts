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
export const SubTitle = styled.Text`
    text-align: center;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text_300};
    padding-bottom: 40px;
`;

export const Bold = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.text_300};
    
`;

export const Field = styled.View`
    width: 100%;
    flex-direction: row;
    
    justify-content: space-between;
    align-items: center;
    
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.text_100};
    border-radius: 7px;
`;
export const Label = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.text_100};
    font-size: 16px;

    padding: 18px 30px;
`;
export const LabelPrice = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.text_100};
    font-size: 16px;

    padding: 18px 30px;
`;

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
`;
export const TextButton = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_100};
    font-size: 14px;
    
`;
export const ButtonClose = styled.TouchableOpacity`
    height: 50px;
    justify-content: center;
`;

export const FieldButton = styled.View`
    padding: 0px 30px;
`;