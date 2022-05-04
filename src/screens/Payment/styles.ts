import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


export const Container = styled.ScrollView`
    background-color: ${({ theme }) => theme.colors.shape};
    flex: 1;
`;

export const Gradient = styled(LinearGradient).attrs({
    colors: ['#95b8c4', '#84accb'],
})`
    
`;

export const Content = styled.View`
    
`;

export const FieldButtonBack = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding-top: 50px;
`;

export const ButtonBack = styled.TouchableOpacity`
    padding: 0px 25px;
`;

export const FieldIcon = styled.View`
    width: 55px;
    height: 55px;
    background-color: ${({ theme}) => theme.colors.shape};

    border-radius: 50px;
    align-items: center;
    justify-content: center;

    margin-right: 65px;
`;

export const Icon = styled(Octicons)`
    font-size: 20px;
`;
export const TextButtonBack = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 18px;
    color: ${({ theme }) => theme.colors.shape};
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

export const ContentCard = styled.View` 
    background-color: ${({ theme }) => theme.colors.primary_100};

    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

    margin-top: 70px;
`;

export const ContentTitleCard = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0px 24px;
`;
export const TitleCard = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 18px;
    color: ${({ theme }) => theme.colors.title};

    margin-top: 30px;
`;

export const AddButton = styled.TouchableOpacity``;

export const TitleAddButton = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.coral};

    margin-top: 40px;
    padding-bottom: 10px;
`;

export const FieldCards = styled.View`
    padding: 0px 24px;
    height: 200px;
`;

export const Cards = styled.View`
    height: 400px;
`;

export const Footer = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.shape};
    
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    padding-top: 30px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;

    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
`;

export const FieldPrice = styled.View``;

export const PriceButton = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 21px;
    color: ${({ theme }) => theme.colors.coral};
`;
export const TitlePrice = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text_100};
`;

export const FieldButtonPrice = styled.View``;

export const FieldPortion = styled.View`
    padding: 0 38px;
    margin-bottom: 10px;
`;

export const PortionSelected = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.shape};
    justify-content: space-between;
    border-radius: 15px;
    padding: 0 18px;
`;

export const PortionSelectedTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text_100};
    padding: 10px 0;
`;

export const PortionSelectedIcon = styled(MaterialCommunityIcons)`
    font-size: 20px;
    padding: 10px 0;
`;

export const ModalField = styled.View`
    width: 100%;
    height: 100%;

    justify-content: flex-end;

    background-color: rgba(0, 0, 0, 0.5);
`;


