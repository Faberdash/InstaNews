import React, {useContext} from 'react';
import {Text, View, Switch, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import NewsContext from '../context/NewsContext';
import NewsContextModel from '../models/newsContext';

const Settings: React.FC = () => {
  const {darkModeOn, setDarkModeOn} = useContext(
    NewsContext,
  ) as NewsContextModel;

  const {colors} = useTheme();

  const toggleDarkMode = () => {
    setDarkModeOn(prevState => !prevState);
  };

  return (
    <View style={styles.settingsContainer}>
      <View style={styles.propertyContainer}>
        <Text style={{color: colors.text, ...styles.text}}>Dark mode:</Text>
        <Switch
          style={styles.switch}
          value={darkModeOn}
          onValueChange={toggleDarkMode}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  propertyContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: -25,
  },
  switch: {},
});

export default Settings;
