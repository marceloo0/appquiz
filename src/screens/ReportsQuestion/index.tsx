import React from 'react';

import ArrowLeft from '@assets/icons/arrow-left.svg';

import { useNavigation, useRoute } from '@react-navigation/native';
import { useQuestion } from '@hooks/useQuestion';
import { ReportQuestionUser } from '@constants/types/question';
import { ReportQuestion } from '@components/Cards/ReportQuestion';

import * as S from './styles';
import { format } from 'date-fns';

type ReportsQuestionProps = {
  question: ReportQuestionUser;
};

export const ReportsQuestion = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { reportQuest } = useQuestion();

  const { question } = route.params as ReportsQuestionProps;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <S.Content>
        <S.InfoTitle>
          <S.BtnGoBack onPress={handleGoBack}>
            <ArrowLeft width={24} height={24} />
          </S.BtnGoBack>
          <S.TitleReport>Relatório</S.TitleReport>
        </S.InfoTitle>
        <S.InfoContainer>
          <S.InfoText>
            <S.SubTitle>Nesta data:</S.SubTitle>
            <S.Title>
              {format(new Date(question.data.seconds * 1000), 'dd/MM/yyyy')}
            </S.Title>
          </S.InfoText>
          <S.InfoText>
            <S.SubTitle>Quantity of questions:</S.SubTitle>
            <S.Title>{question.quantity_questions}</S.Title>
          </S.InfoText>
        </S.InfoContainer>
        <S.Wrapper>
          {question.questions.map((item, index) => (
            <ReportQuestion question={item} key={index.toString()} />
          ))}
        </S.Wrapper>
      </S.Content>
    </S.Container>
  );
};
