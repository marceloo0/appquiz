import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

type ButtonProps = {
  button: 'start' | 'cancel';
  isDisabled?: boolean;
};

export const Container = styled.View`
  width: 100%;
  padding: 0 ${RFPercentage(3)}px;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: ${RFValue(24)}px;

  color: ${({ theme }) => theme.COLORS.TEXT};
  text-align: center;
  font-weight: 700;
`;
export const SubTitle = styled.Text`
  font-size: 16px;

  color: ${({ theme }) => theme.COLORS.TEXT};
  text-align: center;
  margin-top: ${RFPercentage(4)}px;
`;
export const Content = styled.View`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  height: ${RFPercentage(60)}px;
`;

export const ButtonsContainer = styled.View`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  margin-top: ${RFPercentage(4)}px;
  height: 400px;
  align-items: center;
  justify-content: space-around;
`;

export const Wrapper = styled.View`
  align-items: center;
  margin-top: ${RFPercentage(6)}px;
`;

export const BtnStart = styled.TouchableOpacity<ButtonProps>`
  border-radius: 6px;
  width: ${RFPercentage(30)}px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BTN};
  padding: 16px ${RFPercentage(10)}px;

  ${({ button }) =>
    button === 'start' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BTN};
    `}

  ${({ button }) =>
    button === 'cancel' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.LABEL_200};
    `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.7;
    `}
`;
export const BtnText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  text-align: center;
  font-size: ${RFValue(16)}px;
`;
export const InputConatiner = styled.View`
  border: ${({ theme }) => theme.COLORS.BORDER};
  height: ${RFPercentage(8)}px;
  width: 60%;
  padding: 8px 16px;
  margin: auto;
  margin-top: 24px;
  border-radius: ${RFPercentage(1)}px;
`;
export const InputText = styled.TextInput`
  flex: 1;
  text-align: center;
  font-size: 16px;
`;
export const TextContainer = styled.View`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  margin-top: ${RFPercentage(6)}px;
`;
