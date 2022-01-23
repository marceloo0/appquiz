import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 90%;
  height: 64px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: 700;
`;
export const Line = styled.View`
  width: 2px;
  height: 70%;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  margin: 0 8px;
`;
export const Google = styled.Image``;
