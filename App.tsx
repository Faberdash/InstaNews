import React from 'react';
import {NewsProvider} from './context/NewsContext';
import NavContainer from './components/NavContainer';

// const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NewsProvider>
      <NavContainer />
    </NewsProvider>
  );
};

export default App;
