import axios from "axios";

const Client = axios.create({
  baseURL: "http://localhost:3200/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

Client.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // You can check error.response.status here for custom logic
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error globally (e.g., log out user or refresh token)
      console.error("Unauthorized, logging out...");
      // Example: Clear localStorage and redirect to login page
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return Promise.reject(error); // Forward the error to the function that called the request
  }
);

export default Client;
