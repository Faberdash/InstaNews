import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

const App: React.FC = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getArticles() {
      try {
        await axios
          .get('https://newsapi.org/v2/top-headlines', {
            params: {
              country: 'us',
              apikey: 'fe7b7fb5b50a47819d4720f613f9d963',
            },
          })
          .then(response => {
            setArticles(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    }

    getArticles();
  }, []);

  return (
    <View>
      <Text>Hello Typescript!</Text>
    </View>
  );
};

export default App;
