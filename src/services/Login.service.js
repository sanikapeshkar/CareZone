import { CredentialResponse } from "@react-oauth/google";
import axiosInstance from "./axiosInstance"

export const loginUser = async (credential) => {
  try {
    const {data} = await axiosInstance.post('/api/auth/google', credential, {
      headers: {
        authorization: `${credential.credential}`
      },
    });
    const token = data.data.token;
    const role = data.data.role
    if (token && role) {
      localStorage.setItem("token", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzViNGQ1MzE5YTViZTI1OWEwMWQxZSIsImVtYWlsIjoiYW1pdC50dXJhcmVAY29kaXRhcy5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTcxOTE2NDAzOX0.xs7-y3rfoviwtxHjYqC2IVnXBMyECq_xzMxlZeZGG3w');

    }
    return {
      token: token,
      role: role
    };
  } catch (error) {
   throw error;
  }
}