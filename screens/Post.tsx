import React from 'react';
import WebView from 'react-native-webview';

const Post: React.FC = ({route}) => {
  return (
    <WebView
      source={{
        uri: `${route.params.url}`,
      }}
    />
  );
};

export default Post;
