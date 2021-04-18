
const API_URL = `http://api.geonames.org/searchJSON?`

const buildUrl = (query) => {
    // Clean up query
    const USR_NAME = `citypop_2021`
    const output = `${API_URL}q=${query}&maxRows=10&featureClass=P&username=${USR_NAME}`
    return output;
}

export const getData = (url) => {
  if (!url) return Promise.resolve({}); 

  return fetch(url)
    .then(response => response.json())
    .catch(error => {
        console.log(error)
        throw error;
    });
}

export const handleSearch = (query, URL, setLoaded, setURL) => {
      const new_URL = buildUrl(query)

      if(URL === new_URL){
          setLoaded(true)
      }
      else {
        setURL(new_URL)
      }
  }

