import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  padding: 32px 12px;
  align-items: center;
  justify-content: center;
`;

export const TitleReport = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.TEXT_100};
  width: 100%;
  text-align: center;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.TEXT_100};
  width: 100%;
  margin-left: 16px;
`;
export const SubTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.TEXT_100};
`;
export const Wrapper = styled.ScrollView`
  flex: 1;
`;
export const InfoContainer = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.TITLE};

  border: 1px;
  border-color: ${({ theme }) => theme.COLORS.BORDER};
  border-radius: 10px;
  padding: 24px;
  margin-top: 16px;
`;
export const InfoText = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const InfoTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;
export const BtnGoBack = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
export const BtnImage = styled.Image`
  align-items: center;
  justify-content: center;
`;
