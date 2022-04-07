{
  /*import React from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import Entypo from 'react-native-vector-icons/Entypo';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

const SearchBar: React.FC = ({
  isClicked,
  searchPhrase,
  filterNews,
  setIsClicked,
}) => {
  return (
    <View>
      <View>
        <Icon name="search" size={20} color="black" style={{marginLeft: 1}} />
        <TextInput
          style={StyleSheet.input}
          placeholder="Search News"
          value={searchPhrase}
          onChangeText={filterNews}
          onFocus={() => {
            setCLicked(true);
          }}
        />

        {isClicked && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{padding: 1}}
            onPress={() => {
              setSearchPhrase('');
            }}
          />
        )}
      </View>
    </View>
  );
};

export default SearchBar;*/
}

import React from 'react';
import {Text} from 'react-native';

const SearchBar = () => {
  return <Text>SearchBar</Text>;
};

export default SearchBar;
