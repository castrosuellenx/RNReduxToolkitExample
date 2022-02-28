import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

// import SolarSystem from './screens/SolarSystem';
import Counter from './screens/Counter';
// import User from './screens/User';
import store from './store';
import { dark } from './styles/themes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={dark}>
        {/* <SolarSystem /> */}
        <Counter />
        {/* <User /> */}
      </ThemeProvider>
    </Provider>
  );
};

export default App;
