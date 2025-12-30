import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const API_BASE_URL = "http://192.168.31.127:2025/api";

// Public axios (login, register)
export const axiosPublic = axios.create({
  baseURL: API_BASE_URL,
});

// Private axios (protected routes)
export const axiosPrivate = axios.create({
  baseURL: API_BASE_URL,
});

// Attach token automatically
axiosPrivate.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
