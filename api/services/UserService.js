import Client from "../client/client";

export const getUser = async (userId) => {
  try {
    const response = await Client.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const response = await Client.patch(`/users/${userId}`, userData);
    return response;
  } catch (error) {
    return error.response;
  }
}
