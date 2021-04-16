
import * as React from 'react';
import { View, Text } from 'react-native';

const DisplayCity = ( {navigation, route }) => {

 /*  React.useEffect(() => {
    if (route.params?.city){
      console.log(`In display country params ${route.params.city.name}`)
    }
  }, [route.params?.city]); */

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{route.params.city.name} population {route.params.city.population}</Text>
    </View>
  );
}

export default DisplayCity;