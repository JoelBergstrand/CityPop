
import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { handleSearch } from './api';

const SearchScreen = ({ name, query, setQuery, setLoaded, URL, setURL }) => {
    return (

        <View>
            <Text>Search by {name} </Text>

            <TextInput
                autoCapitalize="words"
                autoCorrect={false}
                clearButtonMode="always"
                onChangeText={text => setQuery(text)}
                placeholder="Search"
                style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
            />
            <Button
                title="Search"
                onPress={() => {
                    setLoaded(false)
                    handleSearch(query, URL, setLoaded, setURL)
                }}
            />
        </View>

    );
}

export default SearchScreen;