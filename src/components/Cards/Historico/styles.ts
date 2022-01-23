import styled, { css } from 'styled-components/native';

type InfoLabel = {
  label: 'total' | 'acertos' | 'erros';
};

export const Container = styled.View`
  width: 90%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  border: 1px;
  border-color: ${({ theme }) => theme.COLORS.BORDER};
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  padding: 24px;
  margin: auto;
  margin-bottom: 16px;
`;

export const TitleData = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TEXT_100};
  font-weight: 700;
`;

export const InfoTotal = styled.View`
  flex-direction: row;
`;

export const InfoText = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: 400;
`;

export const SubTitle = styled.Text<InfoLabel>`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TEXT_100};
  font-weight: 700;
  margin-left: 8px;

  ${({ label }) =>
    label === 'total' &&
    css`
      color: ${({ theme }) => theme.COLORS.LABEL};
    `}
  ${({ label }) =>
    label === 'acertos' &&
    css`
      color: ${({ theme }) => theme.COLORS.LABEL_100};
    `}
  ${({ label }) =>
    label === 'erros' &&
    css`
      color: ${({ theme }) => theme.COLORS.LABEL_200};
    `}
`;

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
`;
