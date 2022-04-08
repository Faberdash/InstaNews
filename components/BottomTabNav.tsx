import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Post from '../screens/Post';
import Settings from '../screens/Settings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NewsContext from '../context/NewsContext';
import NewsContextModel from '../models/newsContext';

const Tab = createBottomTabNavigator();

const BottomTabNav: React.FC = () => {
  const {darkModeOn} = useContext(NewsContext) as NewsContextModel;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: `${darkModeOn ? '#e91e22' : '#00cc66'}`,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'InstaNews',
          tabBarLabel: 'News',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarLabel: 'Last Viewed',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="arrow-u-left-top"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
