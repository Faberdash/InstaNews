import React, {useContext, useState, useEffect} from 'react';
import {Text, View, Switch, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import NewsContext from '../context/NewsContext';
import NewsContextModel from '../models/newsContext';

const Settings: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('en');
  const [languages, setLanguages] = useState([
    {label: 'English', value: 'en'},
    {label: 'Spanish', value: 'esp'},
  ]);

  const {darkModeOn, setDarkModeOn, t, changeLanguage} = useContext(
    NewsContext,
  ) as NewsContextModel;

  const {colors} = useTheme();

  const toggleDarkMode = () => {
    setDarkModeOn(prevState => !prevState);
  };

  useEffect(() => {
    changeLanguage(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <View style={styles.settingsContainer}>
      <View style={styles.propertyContainer}>
        <Text style={{color: colors.text, ...styles.text}}>
          {t('dark mode')}:
        </Text>
        <Switch value={darkModeOn} onValueChange={toggleDarkMode} />
      </View>
      <View style={styles.languageContainer}>
        <Text style={{color: colors.text, ...styles.text, ...styles.lngText}}>
          {t('language')}:
        </Text>
        <DropDownPicker
          open={open}
          value={value}
          items={languages}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setLanguages}
          theme={darkModeOn ? 'DARK' : 'LIGHT'}
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
  languageContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    fontSize: 18,
    marginBottom: -25,
  },
  lngText: {
    marginLeft: 8,
    marginTop: 10,
    marginBottom: 15,
  },
});

export default Settings;
