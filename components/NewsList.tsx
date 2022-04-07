import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Article from '../models/article';
import NewsItem from './NewsItem';

interface Props {
  articles: Article[];
  navigation: any;
}

const NewsList: React.FC<Props> = ({articles, navigation}) => {
  return (
    <FlatList
      style={styles.newsList}
      contentContainerStyle={styles.center}
      data={articles}
      renderItem={({item}) => (
        <NewsItem article={item} navigation={navigation} />
      )}
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
