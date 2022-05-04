import styled from 'styled-components/native';

export const SelectedForm = styled.TouchableOpacity`
    width: 100%;
    align-items: center;

    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text_700};
    margin: 20px;
    
`;