
import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useEffect, useState } from 'react';

import { handleSearch, getData } from './api';

const SearchScreen = ({ navigation, name }) => {
  //{ name, query, loaded, setQuery, setLoaded, URL, setURL }
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [URL, setURL] = useState('');



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

  useEffect(() => {
    if (loaded) {
      if (data.geonames.length >= 1) {
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
          //setLoaded(false)
          handleSearch(name, query, URL, loaded, setLoaded, setURL)
        }}
      >
        <Text>SEARCH</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 24,
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
    //margin: 15,
    //height: 40,
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
    borderRadius: 10,
  },
})

export default SearchScreen;