import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const signup = async (data: { email: string; password: string }) => {
  await axios.post(`${API_URL}/signup`, data);
};

const login = async (data: { email: string; password: string }) => {
  const response = await axios.post(`${API_URL}/login`, data);
  localStorage.setItem('token', response.data.token);
};

const authService = {
  signup,
  login,
};

export default authService;
