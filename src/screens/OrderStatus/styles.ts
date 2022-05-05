import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: 50,
    }
})`

`;

export const Content = styled.View`
    padding: 0px 20px;
`;

export const Header = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 18px;
    padding-top: 70px;
    padding-bottom: 60px;
`;

export const TitleProgress = styled.Text`
    font-size: 18px;
    padding-bottom: 20px;
    color: ${({ theme }) => theme.colors.text_700};
`;

export const TitleDone = styled.Text`
    font-size: 18px;
    padding: 20px 0;
    color: ${({ theme }) => theme.colors.text_700};
`;
