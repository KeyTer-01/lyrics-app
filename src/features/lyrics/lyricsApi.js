import axios from "axios";

const API_URL = "https://api.example.com/lyrics";

export const fetchLyrics = async (query) => {
  const response = await axios.get(`${API_URL}/search`, {
    params: { q: query },
  });
  return response.data;
};
