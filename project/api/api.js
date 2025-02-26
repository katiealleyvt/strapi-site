import axios from 'axios';

export const HOST = "http://localhost:1337";
export const API_URL = `${HOST}/api`; 

export const fetchData = async (endpoint) => {
  try {
    var url = `${API_URL}${endpoint}`;
    console.log(url);
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
