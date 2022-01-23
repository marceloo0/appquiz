import React from 'react';

import { StartProps } from '@constants/types/components';

import * as S from './styles';

export const Start = ({ onPress }: StartProps) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.InfoText>
          <S.Title>Let's start</S.Title>
          <S.SubTitle>Want to start a new game?</S.SubTitle>
        </S.InfoText>
        <S.ButtonStart onPress={onPress}>
          <S.BtnText>START</S.BtnText>
        </S.ButtonStart>
      </S.Wrapper>
    </S.Container>
  );
};
