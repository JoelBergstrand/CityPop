
import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { getData, handleSearch } from '../lib/api';

const SearchCountry = ( {navigation} ) => {

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
            name: 'DisplayCountry',
            params: { country: data},
            merge: true,
            })
        }
    }, [loaded])

    return (   

    <View>
        <Text>Search by country </Text>
        
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
    
  );
}

export default SearchCountry;