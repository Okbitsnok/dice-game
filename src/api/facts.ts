import axios from "axios";
import { useQuery } from "react-query";

const API_URL = "https://jellybellywikiapi.onrender.com/api/Facts";

export const getFacts = async () => {
  const response = await axios.get(`${API_URL}?pageSize=1000`);
  return response.data;
};

export const getFactById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const useFacts = () => {
  return useQuery(["facts"], () => getFacts());
};

export const useFactById = (id: string) => {
  return useQuery(["fact", id], () => getFactById(id));
};
