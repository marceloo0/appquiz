import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 32px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.TEXT_100};
  width: 100%;
  text-align: center;
  margin-top: 36px;
`;
export const SubTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.TEXT_100};
  width: 100%;
  text-align: center;
  margin-top: 24px;
`;
export const Wrapper = styled.View`
  align-items: center;
`;
export const Buttons = styled.View`
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.Image``;
export const BtnNext = styled.TouchableOpacity`
  border-radius: 10px;
  margin: auto;
  background-color: ${({ theme }) => theme.COLORS.LABEL};
  height: 56px;
  width: 160px;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
`;
export const BtnText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  font-size: 16px;
  font-weight: 700;
`;
