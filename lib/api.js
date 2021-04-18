
const API_URL = `http://api.geonames.org/searchJSON?`

const buildUrl = (query, type) => {
  const USR_NAME = `citypop_2021`
  if(type === "city"){
    return `${API_URL}name_equals=${query}&maxRows=10&featureCode=P&username=${USR_NAME}`
  }
  else {
    return `${API_URL}q=${query}&maxRows=10&featureClass=P&username=${USR_NAME}`
  }
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

export const handleSearch = (type, query, URL, setLoaded, setURL) => {
  const new_URL = buildUrl(query, type)
  if (URL === new_URL) {
    setLoaded(true)
  }
  else {
    setURL(new_URL)
  }
}

