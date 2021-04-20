
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { getData } from '../lib/api';
import SearchScreen from '../lib/SearchScreen';

const SearchCity = ({ navigation }) => {

    /* const [query, setQuery] = useState('');
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
 */
    return(
        <SearchScreen 
            navigation={navigation}
            name="City" 
        />
    );
}


export default SearchCity;