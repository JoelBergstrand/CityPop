
import * as React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useEffect, useState } from 'react';

import { handleSearch, getData } from './api';

/*
* Superstructure of searchscreens
* Provides functionality of search and layout for searchscreens
*/ 

const SearchScreen = ({ navigation, name }) => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [URL, setURL] = useState('');

  // Handles fetching data from api
  useEffect(() => {
    if (!URL) return;

    getData(URL)
      .then(data => {
        setData(data)
        setLoaded(true)
        
      })
      .catch(() => {
        // Handle error
      });
  }, [URL])

  // Navigates from searchscreen to correct display screen depending on which type of search screen is in use
  useEffect(() => {
    if (loaded) {
      if (!(data === []) && data.geonames.length >= 1) {
        name === "City" ? navigation.navigate({
          name: `Display${name}`,
          params: { values: data.geonames[0], place: query },
          merge: true,
        }) : navigation.navigate({
          name: `Display${name}`,
          params: { values: data, place: query },
          merge: true,
        })
      }
      else {
        Alert.alert("No match on query")
      }
    }
  }, [loaded])

  // Layout of searchscreen
  return (

    <View style={styles.container}>
      <Text style={styles.title}>Search by {name} </Text>

      <TextInput
        style={styles.input}
        autoCapitalize="words"
        autoCorrect={false}
        clearButtonMode="always"
        onChangeText={text => setQuery(text)}
        placeholder="Search"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleSearch(name, query, URL, setLoaded, setURL)
        }}
      >
        <Image 
          style={{ width: 30, height: 30}}
          source={require('../assets/search_icon.png')}
        />
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#61dafb",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 36,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    width: "90%",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 20,
  },
  button: {
    marginTop: 30,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 30,
  },
})

export default SearchScreen;