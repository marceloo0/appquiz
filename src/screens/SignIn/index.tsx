import React from 'react';
import { Button } from 'react-native';

import { useAuth } from '../../hooks/useAuth';
import inter from '../../assets/interrogacao.png';
import logo from '../../assets/logo.png';

import * as S from './styles';
import { ButtonSocial } from '../../components/ButtonSocial';

export const SignIn = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <S.Container>
      <S.Content>
        <S.Logo source={logo} />
        <S.Brand source={inter} />
        <S.Wrapper>
          <S.Title>{'Test your\n knowledge\n with our\n app'}</S.Title>
          <S.Buttons>
            <ButtonSocial onPress={signInWithGoogle} />
          </S.Buttons>
        </S.Wrapper>
      </S.Content>
    </S.Container>
  );
};
