import {getCountryCode} from './countryCodes';
import {Alert} from 'react-native'

const API_URL = `http://api.geonames.org/searchJSON?`

/*
*  Builds the searchURL sent to the API for either Country and City with the requested query corresponding to placename
*/

const buildUrl = (query, type) => {
  const USR_NAME = `weknowit`
  if(type === "City"){
    return `${API_URL}name_equals=${query}&maxRows=10&featureCode=PPLA&featureCode=PPLC&username=${USR_NAME}`
  }
  else {
    const cc = getCountryCode(query.toLowerCase())
    if(cc === "") return ''
    return `${API_URL}q=${query}&country=${cc}&orderby=population&maxRows=10&featureClass=P&username=${USR_NAME}`
  }
}

/*
* Gets data using a previously constructed URL
*/

export const getData = (url) => {
  if (!url) return Promise.resolve({});
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.log(error)
      throw error;
    });
}

// Controls the flow of searches through only fetching if the URL has been changed since last loading data.
// If new_URL is empty prompt user
export const handleSearch = async (type, query, URL, setLoaded, setURL) => {
  const new_URL = buildUrl(query, type)
  await setLoaded(false)
  if(new_URL === ''){
    Alert.alert("No match on query")
    return
  }
  if (URL === new_URL) {
    setLoaded(true)
  }
  else {
    setLoaded(false)
    setURL(new_URL)
  }
}

