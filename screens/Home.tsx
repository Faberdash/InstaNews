import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import NewsList from '../components/NewsList';

const Home: React.FC = () => {
  //   const NEWS_API_URL = process.env.REACT_APP_NEWS_API_URL;
  //   const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getArticles() {
      try {
        await axios
          .get('https://newsapi.org/v2/top-headlines', {
            params: {
              country: 'us',
              apikey: 'fe7b7fb5b50a47819d4720f613f9d963',
            },
          })
          .then(response => {
            setArticles(response.data.articles);
          });
      } catch (error) {
        console.log(error);
      }
    }

    getArticles();
  }, []);

  return <NewsList articles={articles} />;
};

export default Home;
