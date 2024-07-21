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
    request.headers['authorization']=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzViNGQ1MzE5YTViZTI1OWEwMWQxZSIsImVtYWlsIjoiYW1pdC50dXJhcmVAY29kaXRhcy5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTcxOTE2NDAzOX0.xs7-y3rfoviwtxHjYqC2IVnXBMyECq_xzMxlZeZGG3w`;
  }
  return request;
});
