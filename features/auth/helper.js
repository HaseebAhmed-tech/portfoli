import { jwtDecode } from "jwt-decode"; // To decode JWT and check its expiration

export const checkAuth = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const isValid = verifyToken(token);
    return isValid;
  }
};

const verifyToken = (token) => {
  try {
    const decoded = jwtDecode(token);

    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime; // Check if token is expired
  } catch (error) {
    console.error("Error decoding token in verifyToken", error);
    return false; // If there's an error decoding the token, it's invalid
  }
};
