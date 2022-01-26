import React from 'react';
import { Button } from 'react-native';

import { useAuth } from '../../hooks/useAuth';
// import inter from '../../assets/interrogacao.png';
import Inter from '../../assets/interrogacao.svg';
import Logo from '../../assets/logo.svg';

import * as S from './styles';
import { ButtonSocial } from '../../components/ButtonSocial';

export const SignIn = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <S.Container>
      <S.Content>
        <S.Logo>
          <Logo width={130} height={85} />
        </S.Logo>
        <S.Inter>
          <Inter width={540} height={500} />
        </S.Inter>
        <S.Wrapper>
          <S.Title>{'Test your\n knowledge\n with our\n app'}</S.Title>
          <S.Buttons>
            <ButtonSocial
              onPress={signInWithGoogle}
              title="Login with google"
            />
          </S.Buttons>
        </S.Wrapper>
      </S.Content>
    </S.Container>
  );
};
