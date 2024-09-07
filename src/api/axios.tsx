import axios from "axios";



const serverAPI = 'http://localhost:3500/api'


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


