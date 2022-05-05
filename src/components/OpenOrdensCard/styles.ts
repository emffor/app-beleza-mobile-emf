import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const ContentHeader = styled.View`
    padding: 0 25px;
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    width: 100%;

    border-radius: 15px;
    justify-content: center;
    align-items: center;

    margin-top: 27px;
`;  

export const FieldTitle = styled.View` 
    border-bottom-width: 2px;
    border-bottom-color: #F5F8FF;
    align-items: center;
    width: 100%;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.shape_dark};

    padding-top: 30px;
    padding-bottom: 35px;
`;

export const FieldDate = styled.View`
    background-color: ${({ theme }) => theme.colors.coral};
    border-radius: 25px;

    margin-top: -20px;
    padding: 10px 20px;
`;

export const DateDate = styled.Text` 
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const Address = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;
export const AddressTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text_300};
    padding-top: 10px;
`;

export const AddressText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text_300};
    padding-bottom: 18px;
`;

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 24px;
    color: ${({ theme }) => theme.colors.coral};
    padding-bottom: 14px;
`;