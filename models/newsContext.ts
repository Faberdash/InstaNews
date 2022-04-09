import React from 'react';
import Article from './article';

export default interface NewsContextModel {
  articles: Article[];
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
  fetchArticles: () => void;
  darkModeOn: boolean;
  setDarkModeOn: React.Dispatch<React.SetStateAction<boolean>>;
  t: TFunction<'translation', undefined>;
  language: string;
  changeLanguage: (value: any) => void;
}
