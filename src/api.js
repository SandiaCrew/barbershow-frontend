// src/api.js
const apiUrl = process.env.REACT_APP_API_URL;

export const fetchData = async (endpoint) => {
  const response = await fetch(`${apiUrl}${endpoint}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
