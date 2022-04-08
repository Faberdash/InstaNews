import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import WebView from 'react-native-webview';
import {useTheme} from '@react-navigation/native';

const Post: React.FC = ({route}) => {
  const {colors} = useTheme();

  if (route.params === undefined) {
    return (
      <View style={styles.messageContainer}>
        <Text style={{color: colors.text, ...styles.messageText}}>
          {' '}
          No recently viewed articles{' '}
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
