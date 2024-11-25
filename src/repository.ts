import axios from "axios";

const repository = axios.create({
  baseURL: "https://paralect-server-2.onrender.com/",
  withCredentials: true, 
});

repository.interceptors.request.use((config) => {
  return config;
});

repository.interceptors.response.use(
  async (response) => {
    return response; 
  },
  async (error) => {
   
    return Promise.reject(error); 
  }
);

export default repository;
