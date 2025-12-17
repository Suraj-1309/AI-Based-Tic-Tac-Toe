// src/api.js
import axios from "axios";
import { API_BASE_URL } from "./config";

const MOVE_ENDPOINT = `${API_BASE_URL}/api/move`;

export const getAIMove = async (board, ai = "O") => {
  try {
    const response = await axios.post(MOVE_ENDPOINT, { board, ai });
    return response.data.move;
  } catch (error) {
    console.error("Error fetching AI move:", error);
    return null;
  }
};
