/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components/native';

import { RootState } from '@/store';
import {
  getRandomPlanet,
  getSolarSystemRequest,
} from '@/store/slices/planetsSlice';
import * as S from './styles';

const SolarSystem: React.FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { loadingSolarSystem, planet, error, planetsList } = useSelector(
    (state: RootState) => state.planets,
  );

  useEffect(() => {
    dispatch(getSolarSystemRequest());
  }, [dispatch]);

  return (
    <S.Container>
      <S.StatusBar
        barStyle={theme.colors.barStyle}
        backgroundColor={theme.colors.background.main}
      />
      <S.Title>Solar System</S.Title>

      {planetsList.length > 0 ? (
        <S.Box>
          <S.Subtitle>Planet</S.Subtitle>

          <S.Content>
            {planet.id ? (
              <>
                <S.WrapperInfo>
                  <S.InfoTitle>Name</S.InfoTitle>
                  <S.InfoSubtitle>{planet.name}</S.InfoSubtitle>
                </S.WrapperInfo>

                <S.WrapperInfo>
                  <S.InfoTitle>English Name</S.InfoTitle>
                  <S.InfoSubtitle>{planet.englishName}</S.InfoSubtitle>
                </S.WrapperInfo>

                <S.WrapperInfo>
                  <S.InfoTitle>Number of Moons</S.InfoTitle>
                  <S.InfoSubtitle>
                    {planet.moons ? planet.moons.length : '0'}
                  </S.InfoSubtitle>
                </S.WrapperInfo>

                <S.WrapperInfo>
                  <S.InfoTitle>Density</S.InfoTitle>
                  <S.InfoSubtitle>{planet.density}</S.InfoSubtitle>
                </S.WrapperInfo>

                <S.WrapperInfo>
                  <S.InfoTitle>Gravity</S.InfoTitle>
                  <S.InfoSubtitle>{planet.gravity}</S.InfoSubtitle>
                </S.WrapperInfo>
              </>
            ) : (
              <S.HelpTitle>
                Press the button below to explore a planet!
              </S.HelpTitle>
            )}
          </S.Content>

          <S.Button
            activeOpacity={0.7}
            onPress={() => dispatch(getRandomPlanet())}
          >
            <S.ButtonTitle>Explore a Planet!</S.ButtonTitle>
          </S.Button>
        </S.Box>
      ) : (
        <S.WrapperGetSolarSystem>
          {loadingSolarSystem ? (
            <ActivityIndicator size="large" color={theme.colors.text.primary} />
          ) : (
            <>
              <S.TitleGetSolarSystem>
                You still don't have any infos.{'\n'}Please, press the button
                below to load them.
              </S.TitleGetSolarSystem>

              <S.ButtonGetSolarSystem
                onPress={() => dispatch(getSolarSystemRequest())}
              >
                <S.ButtonGetSolarSystemText>
                  Get solar system!
                </S.ButtonGetSolarSystemText>
              </S.ButtonGetSolarSystem>

              {error && (
                <S.ErrorText>
                  Not enough fuel in your rocket, {'\n'}please, try again later.
                </S.ErrorText>
              )}
            </>
          )}
        </S.WrapperGetSolarSystem>
      )}
    </S.Container>
  );
};

export default SolarSystem;
