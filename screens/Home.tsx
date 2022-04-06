import React, {useState, useEffect, useContext} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import NewsList from '../components/NewsList';
import NewsContext from '../context/NewsContext';
import NewsContextModel from '../models/newsContext';

const Home: React.FC = () => {
  //   const NEWS_API_URL = process.env.REACT_APP_NEWS_API_URL;
  //   const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const {articles, fetchArticles} = useContext(NewsContext) as NewsContextModel;

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return (
    <View>
      <NewsList articles={articles} />
    </View>
  );
};

export default Home;
