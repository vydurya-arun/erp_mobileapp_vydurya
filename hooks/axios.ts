import axios from "axios";
const API_BASE_URL = "http://192.168.31.127:2025/api";

// Public axios (for login/register)
export const axiosPublic = axios.create({
  baseURL: API_BASE_URL,
});

// Private axios (for protected routes)
export const axiosPrivate = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});