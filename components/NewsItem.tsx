import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Article from '../models/article';

interface Props {
  article: Article;
}

const NewsItem: React.FC<Props> = ({article}) => {
  return (
    <View style={styles.newsItem}>
      <Image style={styles.itemImg} source={{uri: article.urlToImage}} />
      <Text style={styles.itemTitle}>{article.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  newsItem: {
    backgroundColor: '#1E1D1E',
    borderRadius: 10,
    marginVertical: 10,
    width: '90%',
  },
  itemImg: {
    width: 100,
    height: 100,
  },
  itemTitle: {
    color: '#fff',
  },
});

export default NewsItem;
