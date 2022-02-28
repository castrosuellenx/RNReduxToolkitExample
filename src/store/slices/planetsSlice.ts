/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '@/store';
import solarSystem from '@/services/solarSystem';

type Planet = {
  id: string;
  name: string;
  englishName: string;
  moons: { moon: string }[];
  density: number | string;
  gravity: number | string;
  isPlanet?: boolean;
};

type StateProps = {
  planetsList: Planet[];
  planet: Planet;
  loadingSolarSystem: boolean;
  error: boolean;
};

const initialState: StateProps = {
  planetsList: [],
  planet: {
    id: '',
    name: '',
    englishName: '',
    moons: [],
    density: '',
    gravity: '',
  },
  loadingSolarSystem: false,
  error: false,
};

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    addPlanetsListSuccess: (
      state,
      action: PayloadAction<{ solarSystemData: Planet[] }>,
    ) => {
      state.planetsList = action.payload.solarSystemData;
    },

    addPlanetsListFailure: (
      state,
      action: PayloadAction<{ error: boolean }>,
    ) => {
      state.error = action.payload.error;
    },

    getRandomPlanet: state => {
      state.planet = state.planetsList[Math.floor(Math.random() * 8)];
    },

    setLoadingSolarSystem: (state, action: PayloadAction<boolean>) => {
      state.loadingSolarSystem = action.payload;
    },
  },
});

export const getSolarSystemRequest = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoadingSolarSystem(true));
    const response = await solarSystem.get('/bodies');

    const solarSystemPlanets = response.data.bodies.filter(
      (item: Planet) => item.isPlanet,
    );

    dispatch(addPlanetsListSuccess({ solarSystemData: solarSystemPlanets }));
  } catch (error) {
    dispatch(addPlanetsListFailure({ error: true }));
    console.log(error);
  } finally {
    dispatch(setLoadingSolarSystem(false));
  }
};

export const {
  addPlanetsListSuccess,
  addPlanetsListFailure,
  getRandomPlanet,
  setLoadingSolarSystem,
} = planetsSlice.actions;

export default planetsSlice.reducer;
