import React from 'react';

import { ButtonSocialProps } from '@constants/types/components';
import google from '@assets/google.png';

import * as S from './styles';

export const ButtonSocial = ({ onPress }: ButtonSocialProps) => {
  return (
    <S.Container onPress={onPress}>
      <S.Google source={google} />
      <S.Line />
      <S.Title>Sign in with Google</S.Title>
    </S.Container>
  );
};
