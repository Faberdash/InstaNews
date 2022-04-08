import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import NewsList from '../components/NewsList';
import NewsContext from '../context/NewsContext';
import NewsContextModel from '../models/newsContext';
// import {SearchBar} from 'react-native-screens';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Home: React.FC = ({navigation}) => {
  //   const NEWS_API_URL = process.env.REACT_APP_NEWS_API_URL;
  //   const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const {articles, isLoading, fetchArticles} = useContext(
    NewsContext,
  ) as NewsContextModel;

  const [headerText, setHeaderText] = useState<string>('Top Headlines');

  const {colors} = useTheme();

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  if (articles.length === 0) {
    return (
      <ActivityIndicator size="large" color="black" style={styles.loader} />
    );
  }

  return (
    <View>
      {/* <SearchBar /> */}
      <Text style={{color: colors.text, ...styles.header}}>{headerText}</Text>
      <NewsList articles={articles} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    height: deviceHeight,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
  },
});

export default Home;
