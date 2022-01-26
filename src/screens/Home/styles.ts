import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  width: 100%;
  padding: 24px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const ContentTop = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const HistoryContainer = styled.ScrollView`
  margin-top: 16px;
`;

export const HistoryLabel = styled.Text`
  margin-left: 24px;
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.COLORS.TEXT_100};
`;
