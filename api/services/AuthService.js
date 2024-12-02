import Client from "../client/client";

export const handleRegistration = async (userData) => {
  try {
    const response = await Client.post("/auth/register", userData);

    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error(
      "An Error was caught by Client/AuthService",
      error.response.data
    );
    return error.response.data;
  }
};

export const handleLogin = async (userData, rememberFlag) => {
  try {
    const response = await Client.post("/auth/login", userData);
    if (response.data.accessToken && rememberFlag) {
      localStorage.setItem("token", response.data.accessToken); // Store the token
    }
    return response.data;
  } catch (error) {
    console.error(
      "An Error was caught by Client/AuthService",
      error.response
    );
    return error.response;
  }
};
