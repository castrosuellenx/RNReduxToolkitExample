import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import Home from './screens/Home';
import { dark } from './styles/themes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
