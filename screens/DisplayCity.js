
import numbro from 'numbro';
import * as React from 'react';
import { View, Text } from 'react-native';

const DisplayCity = ( {navigation, route }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{route.params.city.name} </Text>
      <Text>population {numbro(route.params.city.population).format({thousandSeparated: true})}</Text>
    </View>
  );
}

export default DisplayCity;