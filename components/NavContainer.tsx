import React, {useContext} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import BottomTabNav from './BottomTabNav';
import NewsContext from '../context/NewsContext';
import NewsContextModel from '../models/newsContext';

const NavContainer: React.FC = () => {
  const {darkModeOn} = useContext(NewsContext) as NewsContextModel;

  return (
    <NavigationContainer theme={darkModeOn ? DarkTheme : DefaultTheme}>
      <BottomTabNav />
    </NavigationContainer>
  );
};

export default NavContainer;
