import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

type BtnProps = {
  type: 'pular' | 'confirmar';
};

export const Wrapper = styled.View`
  flex: 1;
`;
export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 ${RFPercentage(4)}px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: ${RFValue(21)}px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.TEXT_100};
  width: 100%;
`;
export const TitleQuestion = styled.View`
  width: 100%;
  padding: 0 ${RFPercentage(3)}px;
`;
export const Alternatives = styled.View``;

export const Buttons = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0 16px;
  margin-bottom: ${RFPercentage(1)}px;
  height: ${RFPercentage(10)}px;
`;
export const BtnNext = styled.TouchableOpacity<BtnProps>`
  border-radius: 6px;
  margin: auto;
  height: 56px;
  align-items: center;
  justify-content: center;
  width: ${RFPercentage(20)}px;

  ${({ type }) =>
    type === 'pular' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
      border: 1px;
      border-color: ${({ theme }) => theme.COLORS.BORDER};
    `}

  ${({ type }) =>
    type === 'confirmar' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BTN};
    `}
`;
export const BtnText = styled.Text<BtnProps>`
  font-size: ${RFValue(14)}px;

  ${({ type }) =>
    type === 'pular' &&
    css`
      color: ${({ theme }) => theme.COLORS.BORDER};
    `}

  ${({ type }) =>
    type === 'confirmar' &&
    css`
      color: ${({ theme }) => theme.COLORS.TITLE};
    `}
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(20)}px;
  justify-content: center;
  padding: ${RFPercentage(3)}px;
  margin-top: ${RFPercentage(5)}px;
`;
export const HeaderInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.TEXT_100};
`;
export const DescriptionText = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;
export const HeaderLine = styled.View`
  height: 5px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BTN};
  margin: 12px 0;
`;
export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerTop = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  border: 1px;
  border-color: ${({ theme }) => theme.COLORS.BORDER};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${RFPercentage(2)}px;
  padding: ${RFPercentage(2)}px;
`;
