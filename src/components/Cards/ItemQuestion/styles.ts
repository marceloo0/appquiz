import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

type AlternativeProps = {
  option: boolean;
};

export const Container = styled.View<AlternativeProps>`
  width: ${RFPercentage(45)}px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  border: 1px;
  border-color: ${({ theme }) => theme.COLORS.BORDER};
  border-radius: ${RFValue(10)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(16)}px;
  margin: auto;
  margin-bottom: ${RFPercentage(2)}px;

  ${({ option }) =>
    option &&
    css`
      border-color: ${({ theme }) => theme.COLORS.BORDER_CARD};
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};
      padding: ${RFValue(8)}px;
    `}
`;
export const Title = styled.Text<AlternativeProps>`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: 400;
  margin-left: ${RFPercentage(2)}px;

  ${({ option }) =>
    option &&
    css`
      color: ${({ theme }) => theme.COLORS.TEXT_200};
      margin-left: 0;
    `}
`;
export const Select = styled.View`
  margin-left: -15px;
`;
export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  padding: 0 ${RFValue(11)}px;
  flex-direction: row;
  align-items: center;
`;
export const InfoText = styled.View``;
