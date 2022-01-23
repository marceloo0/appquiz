import React, { useEffect } from 'react';
import { Share, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useQuestion } from '@hooks/useQuestion';
import illustration from '@assets/icons/Illustration.png';

import * as S from './styles';

export const Congratulations = () => {
  const navigation = useNavigation();
  const { correct, question, cleanReportQuest, sendReportQuestionsUser } =
    useQuestion();
  const urlDeep = 'https://appquiz.com/signIn';

  useEffect(() => {
    sendReportQuestionsUser();
  }, []);

  const handleGoBack = () => {
    cleanReportQuest();
    navigation.navigate('Home');
  };

  const handleOnShare = async () => {
    try {
      const result = await Share.share({
        message: `App quiz | Test your knowledge too. Download you too ${urlDeep}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          ToastAndroid.show(
            'Obrigado por compartilhar nosso app.',
            ToastAndroid.LONG
          );
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <S.Container>
      <S.Content>
        <S.Logo source={illustration} />
        <S.Wrapper>
          <S.Title>Congratulations</S.Title>
          <S.SubTitle>
            {`You completed\n this challenge with\n ${correct} of ${question.length} correct answers.`}
          </S.SubTitle>
          <S.BtnNext onPress={handleOnShare}>
            <S.BtnText>Share</S.BtnText>
          </S.BtnNext>
          <S.BtnGoBack onPress={handleGoBack}>
            <S.TextGoBack>Back to start</S.TextGoBack>
          </S.BtnGoBack>
        </S.Wrapper>
      </S.Content>
    </S.Container>
  );
};
