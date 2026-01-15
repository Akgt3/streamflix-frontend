const API_BASE_URL = "http://localhost:5000/api";

// GET token from localStorage
const getToken = () => localStorage.getItem("token");

// Generic request function
export const apiRequest = async (endpoint, method = "GET", data = null) => {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken() ? `Bearer ${getToken()}` : "",
    },
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  const res = await fetch(`${API_BASE_URL}${endpoint}`, config);
  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Something went wrong");
  }

  return result;
};
