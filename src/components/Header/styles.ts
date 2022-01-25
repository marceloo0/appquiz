import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
  start: { x: 1, y: 0.7 },
  end: { x: 0.2, y: 0.4 },
}))`
  width: 100%;
  height: 160px;
  justify-content: center;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SubTitle = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-weight: 400;
  margin-left: 16px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-weight: 700;
  margin-left: 4px;
`;

export const Line = styled.View`
  width: 2px;
  height: 70%;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  margin: 0 8px;
`;

export const Avatar = styled.View`
  width: 56px;
  height: 56px;

  border: 1px;
  border-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-radius: 32px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BTN};

  align-items: center;
  justify-content: center;
`;
export const Photo = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 32px;
`;

export const Logout = styled.Image``;
export const LogOut = styled.TouchableOpacity``;
