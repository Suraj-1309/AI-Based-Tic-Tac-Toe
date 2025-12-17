// Base URL for backend API. Vite exposes only vars prefixed with VITE_
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";
