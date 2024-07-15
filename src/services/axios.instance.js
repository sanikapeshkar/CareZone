import axios from 'axios';

// Create an axios instance
export const axiosInstance = axios.create({
  baseURL: '{{url5000}}', 
  headers: {
    'Content-Type': 'application/json',
  },
});
