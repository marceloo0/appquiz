import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  border: 1px;
  border-color: ${({ theme }) => theme.COLORS.BORDER};
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px;
  margin: auto;
  top: -35px;
`;
export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: 700;
  text-align: center;
`;
export const SubTitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT_100};
  font-weight: 400;
  text-align: center;
`;

export const Line = styled.View`
  width: 2px;
  height: 70%;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  margin: 0 8px;
`;
export const Google = styled.Image``;
export const Wrapper = styled.View`
  width: 100%;
  padding: 0 24px;
`;
export const InfoText = styled.View``;
export const ButtonStart = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BTN};
  padding: 8px;
  align-items: center;
  border-radius: 4px;
  margin-top: 8px;
`;
export const BtnText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-weight: 400;
`;
