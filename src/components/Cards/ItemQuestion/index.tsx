import React from 'react';
import { ItemQuestionProps } from '@constants/types/components';

import elipse from '@assets/icons/Ellipse.png';
import check from '@assets/icons/check.png';

import * as S from './styles';

export const ItemQuestion = ({ onPress, title, option }: ItemQuestionProps) => {
  return (
    <S.Container option={option}>
      <S.Wrapper onPress={onPress}>
        {option ? <S.Select source={check} /> : <S.Select source={elipse} />}
        <S.InfoText>
          <S.Title option={option}>{title}</S.Title>
        </S.InfoText>
      </S.Wrapper>
    </S.Container>
  );
};
