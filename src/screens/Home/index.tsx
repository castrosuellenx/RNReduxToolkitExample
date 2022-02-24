import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

const Home: React.FC = () => {
  const theme = useTheme();

  const loading = false; // PROVISORIO

  return (
    <S.Container>
      <S.StatusBar
        barStyle={theme.colors.barStyle}
        backgroundColor={theme.colors.background.main}
      />
      <S.Title>Solar System</S.Title>

      <S.Box>
        <S.Subtitle>Planet</S.Subtitle>

        <S.Content>
          <S.WrapperInfo>
            <S.InfoTitle>Name</S.InfoTitle>
            <S.InfoSubtitle>La Terre</S.InfoSubtitle>
          </S.WrapperInfo>

          <S.WrapperInfo>
            <S.InfoTitle>English Name</S.InfoTitle>
            <S.InfoSubtitle>Earth</S.InfoSubtitle>
          </S.WrapperInfo>

          <S.WrapperInfo>
            <S.InfoTitle>Moons</S.InfoTitle>
            <S.InfoSubtitle>La Lune - Moon</S.InfoSubtitle>
          </S.WrapperInfo>

          <S.WrapperInfo>
            <S.InfoTitle>Density</S.InfoTitle>
            <S.InfoSubtitle>5.5136</S.InfoSubtitle>
          </S.WrapperInfo>

          <S.WrapperInfo>
            <S.InfoTitle>Gravity</S.InfoTitle>
            <S.InfoSubtitle>9.8</S.InfoSubtitle>
          </S.WrapperInfo>
        </S.Content>

        <S.Button activeOpacity={0.7}>
          {loading ? (
            <ActivityIndicator
              size="small"
              color={theme.colors.text.secondary}
            />
          ) : (
            <S.ButtonTitle>Explore a new Planet!</S.ButtonTitle>
          )}
        </S.Button>
      </S.Box>
    </S.Container>
  );
};

export default Home;
