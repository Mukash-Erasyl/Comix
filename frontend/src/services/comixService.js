import axios from 'axios';

const API_URL = '/api/comix'; // URL вашего API

export const getComixById = async (id) => {
  try {

    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comix by ID:', error);
    return null;
  }
};

const getComix = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching comix:', error);
    return [];
  }
};

export { getComix };
