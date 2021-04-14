
import * as React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>CityPop</Text>
      <Button
        title="Search by city"
        onPress={() => navigation.navigate("SearchCity")}
      />
      <Button
      title="Search by country"
      onPress={() => navigation.navigate("SearchCountry")}
      />
    </View>
  );
}

export default Home;