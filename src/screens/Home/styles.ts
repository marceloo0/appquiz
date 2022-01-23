import styled from 'styled-components/native';

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
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Logo = styled.Image`
  margin-top: 64px;
`;

export const HistoryContainer = styled.ScrollView`
  margin-top: 16px;
`;

export const HistoryLabel = styled.Text`
  margin-left: 24px;
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.TEXT_100};
`;

export const Brand = styled.Image`
  margin-top: 64px;
  margin-bottom: 32px;
`;
