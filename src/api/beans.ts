import axios from "axios";
import { useQuery } from "react-query";

const API_URL = "https://jellybellywikiapi.onrender.com/api/Beans";

export const getBeans = async () => {
  const response = await axios.get(`${API_URL}?pageSize=1000`);
  return response.data;
};

export const getBeanById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const useBeans = () => {
  return useQuery(["beans"], () => getBeans());
};

export const useBeanById = (id: string) => {
  return useQuery(["bean", id], () => getBeanById(id));
};
