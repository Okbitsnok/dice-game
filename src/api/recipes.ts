import axios from "axios";
import { useQuery } from "react-query";

const API_URL = "https://jellybellywikiapi.onrender.com/api/Recipes";

export const getRecipes = async () => {
  const response = await axios.get(`${API_URL}?pageSize=1000`);
  return response.data;
};

export const getRecipeById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const useRecipes = () => {
  return useQuery(["recipes"], () => getRecipes());
};

export const useRecipeById = (id: string) => {
  return useQuery(["recipe", id], () => getRecipeById(id));
};
