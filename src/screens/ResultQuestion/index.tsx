import React from 'react';

import Acertou from '@assets/icons/acertou.svg';
import Errou from '@assets/icons/errou.svg';

import { useNavigation, useRoute } from '@react-navigation/native';
import { Result } from '@constants/types/question';
import { useQuestion } from '@hooks/useQuestion';

import * as S from './styles';

type ResultProps = {
  question: Result;
};

export const ResultQuestion = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { reportQuest } = useQuestion();

  const { question } = route.params as ResultProps;

  const handleCongratulations = () => {
    if ((question.totalQuestion as number) - 1 === question.id) {
      reportQuest(question);
      navigation.navigate('Congratulations');
    } else {
      reportQuest(question);
      navigation.goBack();
    }
  };

  return (
    <S.Container>
      <S.Content>
        {question.correct_answer === question.selected ? (
          <Acertou width={120} height={120} />
        ) : (
          <Errou width={120} height={120} />
        )}
        <S.Wrapper>
          <S.Title>
            {question.correct_answer === question.selected
              ? 'Successes'
              : 'Wrong'}
          </S.Title>
          <S.SubTitle>{question.correct_answer}</S.SubTitle>
          <S.BtnNext onPress={handleCongratulations}>
            <S.BtnText>Advance</S.BtnText>
          </S.BtnNext>
        </S.Wrapper>
      </S.Content>
    </S.Container>
  );
};
