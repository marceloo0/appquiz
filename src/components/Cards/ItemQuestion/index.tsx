import React from 'react';
import { ItemQuestionProps } from '@constants/types/components';

import Ellipse from '@assets/icons/Ellipse.svg';
import Check from '@assets/icons/check.svg';

import * as S from './styles';

export const ItemQuestion = ({ onPress, title, option }: ItemQuestionProps) => {
  return (
    <S.Container option={option}>
      <S.Wrapper onPress={onPress}>
        {option ? (
          <S.Select>
            <Check width={48} height={48} style={{ marginTop: 5 }} />
          </S.Select>
        ) : (
          <S.Select>
            <Ellipse width={24} height={24} />
          </S.Select>
        )}
        <S.InfoText>
          <S.Title option={option}>{title}</S.Title>
        </S.InfoText>
      </S.Wrapper>
    </S.Container>
  );
};
