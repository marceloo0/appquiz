import React from 'react';

import { AlternativeProp } from '@constants/types/components';
import { ItemQuestion } from '../ItemQuestion';

import * as S from './styles';

export const Alternative = ({
  data,
  correct,
  userOption,
  setUserOption,
}: AlternativeProp) => {
  const selectHandler = (value: string) => {
    setUserOption(value);
  };

  return (
    <S.Container>
      <ItemQuestion
        onPress={() => selectHandler(correct)}
        title={correct}
        option={correct === userOption}
      />

      {data.map((item, index) => (
        <ItemQuestion
          key={index.toString()}
          onPress={() => selectHandler(item)}
          title={item}
          option={item === userOption}
        />
      ))}
    </S.Container>
  );
};
