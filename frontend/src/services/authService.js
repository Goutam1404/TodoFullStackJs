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
// f013b3cb7e91d81511ac4b6e8474a2ab64104abe42fb3476272f42a5370c7d93;
// name: 'Learn nothing',
// email: 'qwertyeng100@gmail.com',
// password: 'ssssss'