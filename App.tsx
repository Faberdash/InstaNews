import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NewsProvider} from './context/NewsContext';
import BottomTabNav from './components/BottomTabNav';

// const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NewsProvider>
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'InstaNews'}}
          />
          <Stack.Screen name="Post" component={Post} />
        </Stack.Navigator> */}
        <BottomTabNav />
      </NavigationContainer>
    </NewsProvider>
  );
};

export default App;
