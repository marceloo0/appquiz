import styled, { css } from 'styled-components/native';

type ButtonProps = {
  button: 'start' | 'cancel';
  isDisabled?: boolean;
};

export const Container = styled.View`
  width: 100%;
  padding: 0 24px;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 24px;

  color: ${({ theme }) => theme.COLORS.TEXT};
  text-align: center;
`;
export const SubTitle = styled.Text`
  font-size: 16px;

  color: ${({ theme }) => theme.COLORS.TEXT};
  text-align: center;
  margin-top: 36px;
`;
export const Content = styled.View`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  height: 500px;
`;

export const ButtonsContainer = styled.View`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  margin-top: 84px;
  height: 400px;
  justify-content: space-between;
`;

export const BtnStart = styled.TouchableOpacity<ButtonProps>`
  border-radius: 6px;
  margin: auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BTN};
  padding: 16px 64px;

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
`;
export const InputConatiner = styled.View`
  border: ${({ theme }) => theme.COLORS.BORDER};
  height: 64px;
  width: 60%;
  padding: 8px 16px;
  margin: auto;
  margin-top: 24px;
`;
export const InputText = styled.TextInput`
  flex: 1;
  text-align: center;
  font-size: 16px;
`;
export const TextContainer = styled.View`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  margin-top: 84px;
`;
