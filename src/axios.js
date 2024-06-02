import axios from 'axios';

console.log('API URL:', process.env.REACT_APP_API_URL); // Add this line

const apiUrl = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: apiUrl,
});

export default instance;
