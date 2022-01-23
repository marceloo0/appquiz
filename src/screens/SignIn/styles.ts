import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
  start: { x: 1, y: 0.7 },
  end: { x: 1.4, y: 0.4 },
}))`
  flex: 1;
  justify-content: center;
`;

export const Brand = styled.Image`
  margin-bottom: 32px;
  position: absolute;
  top: 164px;
  left: -30px;
  z-index: 0;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 32px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.TITLE};
  width: 100%;
  margin-bottom: 164px;
`;
export const Wrapper = styled.View`
  margin-top: auto;
  position: absolute;
  z-index: 10;
  bottom: 36px;
  left: 0;
  right: 0;
  padding: 24px;
`;
export const Buttons = styled.View`
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.Image`
  position: absolute;
  top: 48px;
  right: 20px;
  z-index: 0;
`;
export const Inter = styled.Image`
  position: absolute;
  top: 130px;
  right: 40px;
  z-index: 0;
`;
