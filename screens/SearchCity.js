
import * as React from 'react';
import SearchScreen from '../lib/SearchScreen';

/*
* Creates City instance of SearchScreen
*/

const SearchCity = ({ navigation }) => {

    return (
        <SearchScreen
            navigation={navigation}
            name="City"
        />
    );
}


export default SearchCity;