import React from 'react';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

const Counter: React.FC = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.StatusBar
        barStyle={theme.colors.barStyle}
        backgroundColor={theme.colors.background.main}
      />

      <S.Box>
        <S.Content>
          <S.WrapperInfo>
            <S.InfoTitle>CONTADOR</S.InfoTitle>
            <S.InfoSubtitle>9.8</S.InfoSubtitle>
          </S.WrapperInfo>
        </S.Content>

        <S.Button activeOpacity={0.7}>
          <S.ButtonTitle>SOMAR</S.ButtonTitle>
        </S.Button>

        <S.Button activeOpacity={0.7}>
          <S.ButtonTitle>SUBTRAIR</S.ButtonTitle>
        </S.Button>
      </S.Box>
    </S.Container>
  );
};

export default Counter;
