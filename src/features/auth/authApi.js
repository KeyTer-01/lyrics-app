import axios from "axios";

const API_URL = "https://api.example.com/auth";

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

export const register = async (userInfo) => {
  const response = await axios.post(`${API_URL}/register`, userInfo);
  return response.data;
};
