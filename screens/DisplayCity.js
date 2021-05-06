
import numbro from 'numbro';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/*
* DisplayCity
* Displays the population of a city
*/

const DisplayCity = ({ route }) => {
  const city = route.params.values
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{city.name} </Text>
      <View style={styles.box}>
        <Text style={styles.boxTitle}>POPULATION</Text>
        <Text style={styles.boxValue}>{numbro(city.population).format({ thousandSeparated: true })}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#61dafb",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 36,
  },
  box: {
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    width: "90%"
  },
  boxTitle: {
    textAlign: "center",
    fontSize: 15,
    marginBottom: 10,
  },
  boxValue: {
    fontSize: 30,
    textAlign: 'center'
  }
})

export default DisplayCity;