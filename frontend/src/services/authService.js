import api from "../api";


export const registerUser = async (formData) => {
  const response = await api.post("/user/register", formData);
  return response.data;
};

export const loginUser = async (formData) => {
  const response = await api.post("/user/login", formData);
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post("/user/logout");
  return response.data;
};

export const verifyUser = async (token) => {
  const response = await api.get(`/user/verify/${token}`);
  return response.data;
};

// name: 'Goutam',
// email: 'aman12@gmail.com',
// password: 'aaasshj56'

  // email: 'prem44@gmail.com',
  // password: 'premch44'

  // email: 'gaurav12@gmail.com', password: '12345'