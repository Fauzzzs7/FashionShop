import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api'; // Ganti dengan URL API Laravel Anda

export const fetchData = () => {
  return axios.get(`${API_URL}/style/`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
};

// export const deleteData = (id) => {
//   return axios.delete(`${API_URL}/data/${id}`)
//     .then(response => response.data)
//     .catch(error => {
//       console.error('Error deleting data:', error);
//       throw error;
//     });
// };