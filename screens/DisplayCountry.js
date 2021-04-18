
import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const DisplayCountry = ( { navigation, route }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.place}</Text>
      <FlatList
        data={route.params.country.geonames.sort((a, b) => {return b.population - a.population})}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <View> 
            <TouchableOpacity
              style={styles.button}
              onPress={ () => 
                navigation.navigate({
                  name:"DisplayCity",
                  params: { city: item },
                  merge: true,
                })}
            >
              <Text style={styles.entry}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      /> 
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
  button: {
    marginTop: 10,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#DDDDDD"
  },
  entry: {
    fontSize: 15
  }
})

export default DisplayCountry;