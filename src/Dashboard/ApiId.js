import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api'; 

export const fetchDataById = (id) => {
  return axios.get(`${API_URL}/style/` + id)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
};

