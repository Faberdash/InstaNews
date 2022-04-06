import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Post from './screens/Post';
import {NewsProvider} from './context/NewsContext';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NewsProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Top News'}}
          />
          <Stack.Screen name="Post">{props => <Post />}</Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </NewsProvider>
  );
};

export default App;
