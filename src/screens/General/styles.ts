import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.colors.blue_sky};
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 30px;
    color: ${({ theme }) => theme.colors.shape};
`;