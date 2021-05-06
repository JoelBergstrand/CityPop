
const API_URL = `http://api.geonames.org/searchJSON?`

/*
*  Builds the searchURL sent to the API for either Country and City with the requested query corresponding to placename
*/

const buildUrl = (query, type) => {
  const USR_NAME = `weknowit`
  if(type === "City"){
    return `${API_URL}name_equals=${query}&maxRows=10&featureCode=P&username=${USR_NAME}`
  }
  else {
    return `${API_URL}q=${query}&maxRows=10&featureClass=P&username=${USR_NAME}`
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
export const handleSearch = async (type, query, URL, setLoaded, setURL) => {
  const new_URL = buildUrl(query, type)
  await setLoaded(false)
  if (URL === new_URL) {
    setLoaded(true)
  }
  else {
    setLoaded(false)
    setURL(new_URL)
  }
}

