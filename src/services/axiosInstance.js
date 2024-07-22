import axios from 'axios';

// Create an axios instance
export const axiosInstance = axios.create({
  baseURL: ' https://281e-2405-201-1006-914d-e094-b982-ed88-7a82.ngrok-free.app/', 
  headers: {
    'Content-Type': 'application/json',
    "ngrok-skip-browser-warning": "skip-browser-warning",
  },
  
});
axiosInstance.interceptors.request.use((request) => {
  if(!request.headers['authorization']) {
    request.headers['authorization']=`Bearer ${localStorage.getItem('token')}`;
  }
  return request;
});
