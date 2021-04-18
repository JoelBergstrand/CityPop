
import numbro from 'numbro';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DisplayCity = ( {route }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.city.name} </Text>
      <View style={styles.box}>
        <Text style={styles.boxTitle}>POPULATION</Text>
        <Text style={styles.boxValue}>{numbro(route.params.city.population).format({thousandSeparated: true})}</Text>
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
  },
  boxTitle: {
    textAlign: "center",
    fontSize: 15,
    marginBottom: 10,
  },
  boxValue: {
    fontSize: 30
  }
})

export default DisplayCity;