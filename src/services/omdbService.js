import axios from "axios";

const API_KEY = "dbd774e1";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (searchTerm, page = 1, type = "") => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        s: searchTerm,
        page,
        type,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch movies.");
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        i: id,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch movie details.");
  }
};
