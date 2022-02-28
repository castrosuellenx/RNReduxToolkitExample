import axios from 'axios';

const solarSystem = axios.create({
  baseURL: 'https://api.le-systeme-solaire.net/rest/',
});

export default solarSystem;
