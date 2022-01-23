import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TITLE};
  border: 1px;
  border-color: ${({ theme }) => theme.COLORS.BORDER};
  border-radius: 10px;
  padding: ${RFPercentage(2)}px;
  margin-top: ${RFPercentage(2)}px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.COLORS.TEXT_100};
  font-weight: 700;
`;
export const SubTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: 400;
`;
export const InfoText = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BORDER};
  padding: ${RFPercentage(1)}px;
  align-items: center;
`;
