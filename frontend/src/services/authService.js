import api from "../api";


export const registerUser = async (formData) => {
  const response = await api.post("/register", formData);
  return response.data;
};

export const loginUser = async (formData) => {
  const response = await api.post("/login", formData);
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post("/logout");
  return response.data;
};

export const verifyUser = async (token) => {
  const response = await api.get(`/verify/${token}`);
  return response.data;
};

// name: 'Goutam',
// email: 'aman12@gmail.com',
// password: 'aaasshj56'

  // email: 'prem44@gmail.com',
  // password: 'premch44'