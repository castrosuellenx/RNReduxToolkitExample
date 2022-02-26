import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components/native';

import { RootState } from '@/store';
import { login, logout } from '@/store/slices/userSlice';
import * as S from './styles';

// ------------- NOT A REAL LIFE EXAMPLE! -------------

const User: React.FC = () => {
  const theme = useTheme();
  const user = useSelector((state: RootState) => state.user.value);
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.StatusBar
        barStyle={theme.colors.barStyle}
        backgroundColor={theme.colors.background.main}
      />

      <S.Box>
        <S.Subtitle>User</S.Subtitle>

        <S.Content>
          <S.WrapperInfo>
            <S.InfoTitle>Name</S.InfoTitle>
            <S.InfoSubtitle>{user.name}</S.InfoSubtitle>
          </S.WrapperInfo>

          <S.WrapperInfo>
            <S.InfoTitle>Email</S.InfoTitle>
            <S.InfoSubtitle>{user.email}</S.InfoSubtitle>
          </S.WrapperInfo>
        </S.Content>

        <S.Button
          activeOpacity={0.7}
          onPress={() => {
            dispatch(
              login({
                name: 'John Doe',
                age: '20',
                email: 'johndoe@email.com',
              }),
            );
          }}
        >
          <S.ButtonTitle>LOGIN</S.ButtonTitle>
        </S.Button>

        <S.Button
          activeOpacity={0.7}
          onPress={() => {
            dispatch(logout());
          }}
        >
          <S.ButtonTitle>LOGOUT</S.ButtonTitle>
        </S.Button>
      </S.Box>
    </S.Container>
  );
};

export default User;
