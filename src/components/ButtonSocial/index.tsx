import React from 'react';

import { ButtonSocialProps } from '../../constants/types/components';
import Google from '../../assets/icons/google.svg';

import * as S from './styles';

export const ButtonSocial = ({ onPress, title }: ButtonSocialProps) => {
  return (
    <S.Container onPress={onPress}>
      <S.ImageContainer>
        <Google width={44} height={44} />
      </S.ImageContainer>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
