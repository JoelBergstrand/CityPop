
import * as React from 'react';
import { View, Text, FlatList, Button} from 'react-native';

const DisplayCountry = ( { navigation, route }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Display Country Screen</Text>
      <FlatList
        data={route.params.country.geonames.sort((a, b) => {return b.population - a.population})}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <View> 
            <Button
              title={`${item.name}`}
              onPress={ () => 
                navigation.navigate({
                  name:"DisplayCity",
                  params: { city: item },
                  merge: true,
                })}
            />
          </View>
        )}
      /> 
    </View>
  );
}

export default DisplayCountry;