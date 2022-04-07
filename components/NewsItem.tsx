import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Article from '../models/article';

interface Props {
  article: Article;
  navigation: any;
}

const NewsItem: React.FC<Props> = ({article, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.newsItem}
      onPress={() =>
        navigation.navigate('Post', {
          url: article.url,
        })
      }>
      <Image style={styles.itemImg} source={{uri: article.urlToImage}} />
      <Text style={styles.itemTitle}>{article.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  newsItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    display: 'flex',
    elevation: 4,
    flexDirection: 'row',
    marginVertical: 10,
    width: '70%',
  },
  itemImg: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginRight: 10,
    width: 100,
    height: 110,
  },
  itemTitle: {
    color: '#242424',
    fontSize: 18,
    paddingVertical: 5,
    width: '90%',
  },
});

export default NewsItem;
