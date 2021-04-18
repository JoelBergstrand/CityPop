
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { getData } from '../lib/api';
import SearchScreen from '../lib/SearchScreen';

const SearchCity = ({ navigation }) => {

    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [URL, setURL] = useState('');


    useEffect(() => {
        if (!URL) return;

        getData(URL)
            .then(data => {
                setData(data)
                setLoaded(true)
            })
            .catch(() => {
                // Handle error
            });
    }, [URL])

    useEffect(() => {
        if (loaded) {
            setLoaded(false)
            if(data.geonames.length >= 1){
                navigation.navigate({
                name: 'DisplayCity',
                params: { city: data.geonames[0] },
                merge: true,
            })}
            else{
                Alert.alert("No match on query")
            }
        }
    }, [loaded])

    return(
        <SearchScreen name="city" query={query} setQuery={setQuery} setLoaded={setLoaded} URL={URL} setURL={setURL} />
    );
    
    /* return (   
    
      <View>
          <Text>Search by city </Text>
          
          <TextInput
              autoCapitalize="words"
              autoCorrect={false}
              clearButtonMode="always"
              onChangeText={text => setQuery(text)}
              placeholder="Search"
              style={{ backgroundColor: '#fff', paddingHorizontal: 20}}
          />
          <Button
          title="Search"
          onPress={ () => {
              setLoaded(false)
              handleSearch(query, URL, setLoaded, setURL)
          }}
          />
      </View>
      
    ); */
}


export default SearchCity;