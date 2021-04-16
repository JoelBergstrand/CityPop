
import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';


function renderHeader() {

    const URL = "http://api.geonames.org/searchJSON?q=london&maxRows10&username=citypop_2021"
    const USR_NAME = "citypop_2021"

    const [data,setData]=useState([]);

    const getData=()=>{
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        }) 
        .catch(error => console.log(error));
    }
    useEffect(()=>{
        getData()
    },[])

    return (
        <View
            style={{
                backgroundColor: '#fff',
                padding: 10,
                marginVertical: 10,
                borderRadius: 20
            }}
        >
        <TextInput
            autoCapitalize="words"
            autoCorrect={false}
            clearButtonMode="always"
            //value={query}
            //onChangeText={queryText => handleSearch(queryText)}
            placeholder="Search"
            style={{ backgroundColor: '#fff', paddingHorizontal: 20}}
        />
        <Button
        title="Search"
        onPress={ () => console.log("Hello")}
        />
        </View>
    )
}

const SearchCountry = () => {
    return (   

    <View>
        <Text>Search by country </Text>
        <FlatList
        ListHeaderComponent={renderHeader}
        />
    </View>
    
  );
}

export default SearchCountry;