
import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { handleSearch } from './api';

const SearchScreen = ({ name, query, loaded, setQuery, setLoaded, URL, setURL }) => {
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
                    setLoaded(false)
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
    padding: 24,
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
    margin: 15,
    height: 40,
    width: 250,
    borderColor: "#000",
    borderWidth: 1
  },
  button: {
    marginTop: 10,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#DDDDDD"
  },
})

export default SearchScreen;