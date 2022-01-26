import React, { useState } from 'react';
import Modal from 'react-native-modal';

import { useQuestion } from '@hooks/useQuestion';
import { useNavigation } from '@react-navigation/native';
import { ChoiceProps } from '@constants/types/components';

import * as S from './styles';

export const Choice = ({ show, close }: ChoiceProps) => {
  const navigation = useNavigation();
  const [qtd, setQtd] = useState(0);
  const { getQuestions } = useQuestion();
  const [showBottons, setShowBottons] = useState(false);

  const handleShow = () => {
    if (qtd > 0) {
      setShowBottons(true);
    }
  };

  const handleCancel = () => {
    if (qtd > 0) {
      setShowBottons(false);
      setQtd(0);
    }
  };

  const handleStart = async () => {
    await getQuestions(qtd.toString());
    navigation.navigate('Question');
    close();
  };

  return (
    <S.Container>
      <Modal
        isVisible={show}
        onBackdropPress={close}
        swipeDirection="down"
        animationIn="bounceInUp"
        animationInTiming={1000}
        animationOut="bounceOutUp"
      >
        <S.Content>
          {showBottons ? (
            <S.ButtonsContainer>
              <S.BtnStart button="start" onPress={handleStart}>
                <S.BtnText>START</S.BtnText>
              </S.BtnStart>
              <S.BtnStart onPress={handleCancel} button="cancel">
                <S.BtnText>CANCEL</S.BtnText>
              </S.BtnStart>
            </S.ButtonsContainer>
          ) : (
            <>
              <S.TextContainer>
                <S.Title>Let's start</S.Title>
                <S.SubTitle>
                  {'Choose how many\n questions would like\n to answer.'}
                </S.SubTitle>
                <S.InputConatiner>
                  <S.InputText
                    placeholder="Number of questions"
                    keyboardType="numeric"
                    onChangeText={(text) => setQtd(Number(text))}
                  />
                </S.InputConatiner>
              </S.TextContainer>
              <S.Wrapper>
                <S.BtnStart
                  onPress={handleShow}
                  isDisabled={!qtd}
                  disabled={!qtd}
                  button="start"
                >
                  <S.BtnText>NEXT</S.BtnText>
                </S.BtnStart>
              </S.Wrapper>
            </>
          )}
        </S.Content>
      </Modal>
    </S.Container>
  );
};
