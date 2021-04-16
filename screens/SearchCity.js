
import * as React from 'react';
import {useEffect, useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { buildUrl, getData } from '../lib/api'



const SearchCity = ( {navigation} ) => {

const [query,setQuery]=useState('');
  const [data,setData]=useState([]);
  const [loaded, setLoaded]=useState(false);
  const [URL, setURL]=useState('');


  useEffect(()=>{
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
      if(loaded){
          setLoaded(false)
          navigation.navigate({
            name: 'DisplayCity',
            params: { city: data.geonames[0]},
            merge: true,
          })
      }
  }, [loaded])

  useEffect(() => {
    setURL('')
    setQuery('')
    setData([])
    setLoaded(false)
  }, [navigation])

  return (   

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
          setURL(buildUrl(query));
      }}
      />
  </View>
  
);
}


export default SearchCity;