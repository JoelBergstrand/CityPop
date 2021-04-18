
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { getData} from '../lib/api';
import SearchScreen from '../lib/SearchScreen';

const SearchCountry = ({ navigation }) => {

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
            if (data.geonames.length >= 1) {
                setLoaded(false)
                navigation.navigate({
                    name: "DisplayCountry",
                    params: { country: data, place: query },
                    merge: true,
                })
            }
            else {
                Alert.alert("No match on query")
            }   
        }
    }, [loaded])

    return(
        <SearchScreen name="country" query={query} loaded={loaded} setQuery={setQuery} setLoaded={setLoaded} URL={URL} setURL={setURL} />
    );
}

export default SearchCountry;