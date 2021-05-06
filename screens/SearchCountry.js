
import * as React from 'react';
import SearchScreen from '../lib/SearchScreen';

/*
* Creates Country instance of SearchScreen
*/

const SearchCountry = ({ navigation }) => {

    return (
        <SearchScreen
            navigation={navigation}
            name="Country"
        />
    );
}

export default SearchCountry;