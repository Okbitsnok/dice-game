import axios from "axios";
import { useQuery } from "react-query";

const API_URL = "https://jellybellywikiapi.onrender.com/api/MileStones";

export const getMileStones = async () => {
  const response = await axios.get(`${API_URL}?pageSize=1000`);
  return response.data;
};

export const getMileStoneById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const useMileStones = () => {
  return useQuery(["mileStones"], () => getMileStones());
};

export const useMileStoneById = (id: string) => {
  return useQuery(["mileStone", id], () => getMileStoneById(id));
};
