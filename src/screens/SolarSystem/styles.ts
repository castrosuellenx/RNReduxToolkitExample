import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.main};
`;

export const StatusBar = styled.StatusBar``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${RFValue(25)}px;
`;

export const Box = styled.View`
  width: 90%;
  align-items: center;
  border-radius: ${RFValue(20)}px;
  padding-vertical: ${RFValue(25)}px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${RFValue(15)}px;
`;

export const Content = styled.View`
  width: 85%;
  border-radius: ${RFValue(10)}px;
  padding-vertical: ${RFValue(15)}px;
  background-color: ${({ theme }) => theme.colors.background.light};
`;

export const WrapperInfo = styled.View`
  margin-vertical: ${RFValue(10)}px;
`;

export const InfoTitle = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-left: ${RFValue(25)}px;
  margin-bottom: ${RFValue(5)}px;
`;

export const InfoSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-left: ${RFValue(25)}px;
`;

export const Button = styled.TouchableOpacity`
  width: 60%;
  align-items: center;
  justify-content: center;
  align-self: center;
  border-radius: ${RFValue(10)}px;
  padding-vertical: ${RFValue(15)}px;
  margin-top: ${RFValue(30)}px;
  background-color: ${({ theme }) => theme.colors.button};
`;

export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;
