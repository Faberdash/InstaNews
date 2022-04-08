import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

import {useTheme} from '@react-navigation/native';
import Article from '../models/article';

interface Props {
  article: Article;
  navigation: any;
}

const NewsItem: React.FC<Props> = ({article, navigation}) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={{backgroundColor: colors.card, ...styles.newsItem}}
      onPress={() =>
        navigation.navigate('Post', {
          url: article.url,
        })
      }>
      <Image style={styles.itemImg} source={{uri: article.urlToImage}} />
      <Text style={{color: colors.text, ...styles.itemTitle}}>
        {article.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  newsItem: {
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
    fontSize: 18,
    paddingVertical: 5,
    width: '90%',
  },
});

export default NewsItem;
