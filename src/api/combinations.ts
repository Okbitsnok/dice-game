import axios from "axios";
import { useQuery } from "react-query";

const API_URL = "https://jellybellywikiapi.onrender.com/api/Combinations";

export const getCombinations = async () => {
  const response = await axios.get(`${API_URL}?pageSize=1000`);
  return response.data;
};

export const getCombinationById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const useCombinations = () => {
  return useQuery(["combinations"], () => getCombinations());
};

export const useCombinationById = (id: string) => {
  return useQuery(["combination", id], () => getCombinationById(id));
};
