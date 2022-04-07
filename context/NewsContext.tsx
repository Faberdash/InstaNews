import React, {useState} from 'react';
import axios from 'axios';
import Article from '../models/article';
import NewsContextModel from '../models/newsContext';

const NewsContext = React.createContext<NewsContextModel | null>(null);

export const NewsProvider = ({children}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fetch articles from News API
  const fetchArticles = async () => {
    setIsLoading(true);
    try {
      await axios
        .get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us',
            apikey: '1bb79eb7b41d4c8bb9153573cb47eb9f',
          },
        })
        .then(response => {
          if (response.status === 200) {
            setArticles(response.data.articles);
          }
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <NewsContext.Provider
      value={{
        articles,
        isLoading,
        setArticles,
        fetchArticles,
      }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
