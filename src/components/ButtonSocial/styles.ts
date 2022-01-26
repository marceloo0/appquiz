import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: 90%;
  padding: ${RFPercentage(1.5)}px ${RFPercentage(2)}px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: 700;
  text-align: center;
  width: 80%;
`;
export const Google = styled.Image``;
export const ImageContainer = styled.View`
  border-right-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.SHAPE};
  padding: 0 ${RFPercentage(1)}px;
`;
