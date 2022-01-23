import React from 'react';
import { format } from 'date-fns';

import { HistoricoProps } from '@src/constants/types/components';

import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

export const Historico = ({ item }: HistoricoProps) => {
  const navigation = useNavigation();

  const dataReport = new Date(item.data.seconds * 1000);

  const correct = item.questions.reduce((acc, cur) => {
    return Number(cur.number_correct_answer) + acc;
  }, 0);

  const inCorrect = item.questions.reduce((acc, cur) => {
    return Number(cur.number_incorrect_answers) + acc;
  }, 0);

  const handleHistory = () => {
    navigation.navigate('ReportsQuestion', {
      question: item,
    });
  };

  return (
    <S.Container>
      <S.Wrapper onPress={handleHistory}>
        <S.TitleData>{format(dataReport, 'dd/MM/yyyy')}</S.TitleData>
        <S.InfoTotal>
          <S.Title>Total questions:</S.Title>
          <S.SubTitle label="total">{item.quantity_questions}</S.SubTitle>
        </S.InfoTotal>
        <S.InfoText>
          <S.InfoText>
            <S.Title>Successes:</S.Title>
            <S.SubTitle label="acertos">{correct}</S.SubTitle>
          </S.InfoText>
          <S.InfoText>
            <S.Title>Errors:</S.Title>
            <S.SubTitle label="erros">{inCorrect}</S.SubTitle>
          </S.InfoText>
        </S.InfoText>
      </S.Wrapper>
    </S.Container>
  );
};
