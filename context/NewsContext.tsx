import React, {useState} from 'react';
import axios from 'axios';
import {useTranslation} from 'react-i18next';
import Article from '../models/article';
import NewsContextModel from '../models/newsContext';

const NewsContext = React.createContext<NewsContextModel | null>(null);

export const NewsProvider = ({children}) => {
  const {t, i18n} = useTranslation();

  const [language, setLanguage] = useState('en');

  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

  const [articles, setArticles] = useState<Article[]>([]);

  const [darkModeOn, setDarkModeOn] = useState<boolean>(false);

  // Fetch articles from News API
  const fetchArticles = async () => {
    try {
      await axios
        .get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us',
            // API key should be later moved to a .config file
            apikey: '1bb79eb7b41d4c8bb9153573cb47eb9f',
          },
        })
        .then(response => {
          if (response.status === 200) {
            setArticles(response.data.articles);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NewsContext.Provider
      value={{
        articles,
        darkModeOn,
        t,
        language,
        changeLanguage,
        setArticles,
        setDarkModeOn,
        fetchArticles,
      }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
