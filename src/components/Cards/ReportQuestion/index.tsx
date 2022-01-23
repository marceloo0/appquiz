import React from 'react';

import { StartProps } from '@constants/types/components';

import * as S from './styles';
import { Result } from '@src/constants/types/question';

type ItemQuestion = {
  question: Result;
};

export const ReportQuestion = ({ question }: ItemQuestion) => {
  return (
    <S.Container>
      <S.InfoText>
        <S.SubTitle>Category: </S.SubTitle>
        <S.Title>{question.category}</S.Title>
      </S.InfoText>
      <S.InfoText>
        <S.SubTitle>Difficulty: </S.SubTitle>
        <S.Title>{question.difficulty}</S.Title>
      </S.InfoText>
      <S.InfoText>
        <S.Title>{Number(question.id) + 1} - </S.Title>
        <S.Title>{question.question.split('&quot;').join('"')}</S.Title>
      </S.InfoText>
      <S.InfoText>
        <S.SubTitle>Correct answers: </S.SubTitle>
        <S.Title>{question.correct_answer}</S.Title>
      </S.InfoText>
      <S.InfoText>
        <S.SubTitle>Selected answer: </S.SubTitle>
        <S.Title>{question.selected}</S.Title>
      </S.InfoText>
    </S.Container>
  );
};
