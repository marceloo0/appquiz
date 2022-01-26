import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
  start: { x: 1, y: 0.7 },
  end: { x: 1.4, y: 0.4 },
}))`
  flex: 1;
  justify-content: center;
`;

export const Brand = styled.Image`
  margin-bottom: ${RFPercentage(3)}px;
  position: absolute;
  top: ${RFPercentage(15)}px;
  left: -30px;
  z-index: 0;
  opacity: 0.5;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 32px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: ${RFValue(36)}px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.TITLE};
  width: 100%;
  margin-bottom: ${RFPercentage(10)}px;
`;
export const Wrapper = styled.View`
  margin-top: auto;
  position: absolute;
  z-index: 10;
  bottom: ${RFPercentage(1)}px;
  left: 0;
  right: 0;
  padding: ${RFPercentage(3)}px;
`;
export const Buttons = styled.View`
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.View`
  position: absolute;
  top: ${RFPercentage(8)}px;
  right: 20px;
  z-index: 0;
`;
export const Inter = styled.View`
  position: absolute;
  top: ${RFPercentage(20)}px;
  right: -50px;
  z-index: 0;
  opacity: 0.6;
`;
