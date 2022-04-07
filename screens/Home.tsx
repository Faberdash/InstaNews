import React, {useEffect, useContext} from 'react';
import {View, ActivityIndicator, Dimensions, StyleSheet} from 'react-native';
import NewsList from '../components/NewsList';
import NewsContext from '../context/NewsContext';
import NewsContextModel from '../models/newsContext';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Home: React.FC = ({navigation}) => {
  //   const NEWS_API_URL = process.env.REACT_APP_NEWS_API_URL;
  //   const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const {articles, isLoading, fetchArticles} = useContext(
    NewsContext,
  ) as NewsContextModel;

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
      {/* <Button title="Go To Post" onPress={() => navigation.navigate('Post')} /> */}
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
});

export default Home;
