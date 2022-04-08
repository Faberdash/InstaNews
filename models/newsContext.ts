import React from 'react';
import Article from './article';

export default interface NewsContextModel {
  articles: Article[];
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
  isLoading: boolean;
  fetchArticles: () => void;
  darkModeOn: boolean;
  setDarkModeOn: React.Dispatch<React.SetStateAction<boolean>>;
}
