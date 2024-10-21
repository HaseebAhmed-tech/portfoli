import Client from "../client/client";

export const getUser = async (userId) => {
  try {
    const response = await Client.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
