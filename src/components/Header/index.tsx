import React from 'react';

import LogOut from '@assets/icons/log-in.svg';

import * as S from './styles';
import { useAuth } from '@hooks/useAuth';

type HeaderProps = {
  onPress: () => void;
};

export const Header = ({ onPress }: HeaderProps) => {
  const { data } = useAuth();

  return (
    <S.Container>
      <S.Wrapper>
        <S.Info>
          {data.avatar ? (
            <S.Photo source={{ uri: data.avatar }} />
          ) : (
            <S.Avatar>
              <S.Title>{data.name[0]}</S.Title>
            </S.Avatar>
          )}
          <S.SubTitle>Hi,</S.SubTitle>
          <S.Title>{data.name.split(' ')[0]}</S.Title>
        </S.Info>
        <S.LogOut onPress={onPress}>
          <LogOut width={26} height={26} />
        </S.LogOut>
      </S.Wrapper>
    </S.Container>
  );
};
