
import * as React from 'react';
import { View, Text } from 'react-native';

const DisplayCity = ( {navigation, route }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{route.params.city.name} population {route.params.city.population}</Text>
    </View>
  );
}

export default DisplayCity;