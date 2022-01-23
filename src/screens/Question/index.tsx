import React, { useState } from 'react';

import { Alternative } from '@components/Cards/Alternative';
import { useNavigation } from '@react-navigation/native';

import { useQuestion } from '@hooks/useQuestion';

import * as S from './styles';

export const Question = () => {
  const navigation = useNavigation();
  const [userOption, setUserOption] = useState('');
  const [current, setCurrent] = useState(0);
  const { question } = useQuestion();

  const length = question.length;

  const handleConfirm = () => {
    const objQuestion = {
      id: current,
      category: question[current].category,
      correct_answer: question[current].correct_answer,
      difficulty: question[current].difficulty,
      question: question[current].question,
      type: question[current].type,
      number_correct_answer:
        question[current].correct_answer === userOption ? 1 : 0,
      number_incorrect_answers:
        question[current].correct_answer !== userOption ? 1 : 0,
      selected: userOption,
      totalQuestion: length,
    };

    setCurrent(current === length - 1 ? 0 : current + 1);
    navigation.navigate('ResultQuestion', {
      question: objQuestion,
    });
  };

  return (
    <S.Wrapper>
      {question && (
        <S.Container>
          <S.Header>
            <S.HeaderInfo>
              <S.HeaderText>
                {current < 10
                  ? `Question 0${current + 1}`
                  : `Question ${current + 1}`}
              </S.HeaderText>
              <S.HeaderText>
                {length < 10 ? `in 0${length}` : `in ${length}`}
              </S.HeaderText>
            </S.HeaderInfo>
            <S.HeaderLine />
            <S.ContainerTop>
              <S.HeaderContainer>
                <S.HeaderText>Category - </S.HeaderText>
                <S.DescriptionText>
                  {question[current].category}
                </S.DescriptionText>
              </S.HeaderContainer>
              <S.HeaderContainer>
                <S.HeaderText>Difficulty - </S.HeaderText>
                <S.DescriptionText>
                  {question[current].difficulty}
                </S.DescriptionText>
              </S.HeaderContainer>
            </S.ContainerTop>
          </S.Header>
          <S.TitleQuestion>
            <S.Title>
              {question[current].question.split('&quot;').join('"')}
            </S.Title>
          </S.TitleQuestion>
          <S.Alternatives>
            <Alternative
              data={question[current].incorrect_answers}
              correct={question[current].correct_answer}
              userOption={userOption}
              setUserOption={setUserOption}
            />
          </S.Alternatives>
          <S.Buttons>
            <S.BtnNext type="pular">
              <S.BtnText type="pular">Jump</S.BtnText>
            </S.BtnNext>
            <S.BtnNext type="confirmar" onPress={handleConfirm}>
              <S.BtnText type="confirmar">Confirm</S.BtnText>
            </S.BtnNext>
          </S.Buttons>
        </S.Container>
      )}
    </S.Wrapper>
  );
};
