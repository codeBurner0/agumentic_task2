// api.ts
import axios from 'axios';

const API_BASE_URL = 'https://api.example.com';

export const fetchData = async (): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/your-endpoint`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
