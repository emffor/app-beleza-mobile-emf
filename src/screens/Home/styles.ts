import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

export const Container = styled.ScrollView.attrs({
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingBottom: 30},
})`
    flex: 1;
    background: ${({ theme }) => theme.colors.primary_100};
`;

export const Header = styled.View`
    width: 100%;
    height: 375px;

    background-color: ${({ theme }) => theme.colors.blue_sky};
    padding: 50px 24px;
    margin-bottom: 120px;
`;

export const HeaderContent = styled.View`
  justify-content: flex-end;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.shape};
    padding: 0 34px;
`;
export const Subtitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.shape};
    padding: 0 34px;
    margin-bottom: 30px;
`;

export const Localization = styled.TouchableOpacity`
    width: 100%;
    padding: 20px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.border_light};
    border-radius: 12px;
`;

export const Address = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const Icon = styled(Entypo)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.shape};

`;


export const HighlightCards = styled.ScrollView.attrs({
    horizontal:true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingHorizontal: 30},
})`
    width: 100%;

    position: absolute;
    
    margin-top: ${RFPercentage(35)}px;
`;

export const FieldCategory = styled.View`
    margin: 0 20px;
`;


export const TitleCategory = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.text_700};
    padding: 0 34px;
`;
