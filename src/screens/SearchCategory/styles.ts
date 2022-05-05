import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView.attrs({
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingBottom: 30},
})`
    flex: 1;
`;

export const Header = styled.View`
    height: ${RFValue(130)}px;
    background-color: ${({ theme }) => theme.colors.blue_sky};
`;

export const FieldInput = styled.View`
    flex-direction: row;
    padding-top: 65px;
    padding-left: 25px;
    padding-right: 25px;
    align-items: center;
`;

export const Icon = styled(AntDesign)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: 20px;
`;

export const Input = styled.TextInput`
    color: ${({ theme }) => theme.colors.shape};
    font-size: 14px;
    padding-left: 20px;
`;


export const TitleServices = styled.Text`
    font-size: 18px;
    padding-top: 40px;
    padding-left: 25px;
    padding-bottom: 27px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title};
`;

export const Services = styled.View`
    margin-left: ${(RFValue(10))}px;
`;

export const ScrollServices = styled.ScrollView.attrs({  
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        marginLeft: RFValue(10),
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
})`
    
`;
