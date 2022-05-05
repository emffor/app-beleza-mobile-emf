import styled, {css} from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

interface isActiveProps {
    isActive: boolean;
}

export const FieldStars = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const ButtonStars = styled.TouchableOpacity`
    padding: 5px;
    margin-top: 10px;
`;

export const IconStarts = styled(AntDesign)<isActiveProps>`
    font-size: 18px;
    
    ${({isActive}) => isActive === true && css`
      color: ${({theme}) => theme.colors.yellow_bus};
    `};

    ${({isActive}) => isActive === false && css`
      color: ${({theme}) => theme.colors.text_300}; 
    `};
`;


