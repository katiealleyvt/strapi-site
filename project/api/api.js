import axios from 'axios';


const API_URL = 'http://localhost:1337/api'; // Strapi server URL

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
