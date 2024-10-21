import Client from "../client/client";

export const createSocials = async ({ data, id }) => {
  try {
    const response = await Client.post(`/socials`, { ...data, userId: id });
    return response.data;
  } catch (error) {
    console.error(
      "An Error was caught by Client/SocialsService",
      error.response.data
    );
    return error.response.data;
  }
};

export const getSocials = async (userId) => {
  try {
    const response = await Client.get(`/socials/${userId}`);
    return response.data;
  } catch (error) {
    console.error(
      "An Error was caught by Client/SocialsService",
      error.response.data
    );
    return error.response.data;
  }
};
