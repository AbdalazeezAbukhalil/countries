import axios from 'axios';

const url = 'https://restcountries.com/v3.1';

export const fetchAllCountries = async (fieldsArray = []) => {
  const response = await axios.get(`${url}/all`, {
    params: {
        fields: fieldsArray.join(',')
    }
  });
  return response.data; 
};

