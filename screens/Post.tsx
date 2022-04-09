import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import WebView from 'react-native-webview';
import {useTheme} from '@react-navigation/native';
import NewsContext from '../context/NewsContext';
import NewsContextModel from '../models/newsContext';

const Post: React.FC = ({route}) => {
  const {colors} = useTheme();

  const {t} = useContext(NewsContext) as NewsContextModel;

  if (route.params === undefined) {
    return (
      <View style={styles.messageContainer}>
        <Text style={{color: colors.text, ...styles.messageText}}>
          {t('no recently viewed articles')}
        </Text>
      </View>
    );
  }

  return (
    <WebView
      source={{
        uri: `${route.params.url}`,
      }}
    />
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  messageText: {
    fontSize: 18,
  },
});

export default Post;
