import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components/native';

import { RootState } from '@/store';
import { decrement, increment } from '@/store/slices/counterSlice';
import * as S from './styles';

const Counter: React.FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  return (
    <S.Container>
      <S.StatusBar
        barStyle={theme.colors.barStyle}
        backgroundColor={theme.colors.background.main}
      />
      <S.Title>Contador</S.Title>

      <S.Box>
        <S.Subtitle>{count}</S.Subtitle>

        <S.Button
          activeOpacity={0.7}
          onPress={() => {
            dispatch(increment(5));
          }}
        >
          <S.ButtonTitle>SOMAR</S.ButtonTitle>
        </S.Button>

        <S.Button
          activeOpacity={0.7}
          onPress={() => {
            dispatch(decrement(1));
          }}
        >
          <S.ButtonTitle>SUBTRAIR</S.ButtonTitle>
        </S.Button>
      </S.Box>
    </S.Container>
  );
};

export default Counter;
