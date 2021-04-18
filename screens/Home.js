
import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CityPop</Text>
      <TouchableOpacity
        style={styles.button}
        title="Search by city"
        onPress={() => navigation.navigate("SearchCity")}
      >
        <Text>SEARCH BY CITY</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("SearchCountry")}
      >
        <Text>SEARCH BY COUNTRY</Text>
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
    fontSize: 46,
    fontWeight: "bold",
    marginBottom: 36,
  },
  button: {
    marginTop: 10,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#DDDDDD"
  },
})

export default Home;