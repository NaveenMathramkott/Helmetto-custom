import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_KEY, // Replace with your base URL
});

// Create
export const postData = async (url, payload) => {
  try {
    const response = await axiosInstance.post(url, payload);
    return { data: response.data, error: null };
  } catch (err) {
    return { data: null, error: err.response?.data || err.message };
  }
};

// Read
export const getData = async (url) => {
  try {
    const response = await axiosInstance.get(url);
    return { data: response.data, error: null };
  } catch (err) {
    return { data: null, error: err.response?.data || err.message };
  }
};

// Update
export const updateData = async (url, payload) => {
  try {
    const response = await axiosInstance.put(url, payload);
    return { data: response.data, error: null };
  } catch (err) {
    return { data: null, error: err.response?.data || err.message };
  }
};

// Delete
export const deleteData = async (url) => {
  try {
    const response = await axiosInstance.delete(url);
    return { data: response.data, error: null };
  } catch (err) {
    return { data: null, error: err.response?.data || err.message };
  }
};
