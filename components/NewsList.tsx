import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import Article from '../models/article';
import NewsItem from './NewsItem';

interface Props {
  articles: Article[];
}

const NewsList: React.FC<Props> = ({articles}) => {
  return (
    <FlatList
      style={styles.newsList}
      contentContainerStyle={styles.center}
      data={articles}
      renderItem={({item}) => <NewsItem article={item} />}
      keyExtractor={item => item.url}
    />
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  newsList: {},
});

export default NewsList;
