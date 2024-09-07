import axios from "axios";

// if we are in development mode, we will use the local server
const isDevelopment = process.env.NODE_ENV === 'development'

const serverAPI = isDevelopment ? 'http://localhost:3500/api' : 'https://prepmaster-backend.vercel.app/api'


export default axios.create({
  baseURL: serverAPI, // Replace with your base URL
  // timeout: 5000, // Set a timeout in milliseconds
});

export const axiosPrivate = axios.create({
  baseURL: serverAPI, // Replace with your base URL
  headers: {
    'Authorization': 'Bearer your_token' // Add your authorization token here
  }
});


