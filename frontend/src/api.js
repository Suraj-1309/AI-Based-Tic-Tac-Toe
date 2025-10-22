// src/api.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/move";

export const getAIMove = async (board, ai = "O") => {
  try {
    const response = await axios.post(API_URL, { board, ai });
    return response.data.move;
  } catch (error) {
    console.error("Error fetching AI move:", error);
    return null;
  }
};
