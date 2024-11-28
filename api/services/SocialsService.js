import Client from "../client/client";

export const createSocials = async ({ data, id }) => {
  try {
    const response = await Client.post(`/socials`, { ...data, userId: id });
    return response.data;
  } catch (error) {
    console.error(
      "An Error was caught by Client/SocialsService/create",
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
      "An Error was caught by Client/SocialsService/get",
      error.response.data
    );
    return error.response.data;
  }
};

export const updateSocials = async (userId, socialsData) => {
  try {
    const response = await Client.patch(`/socials/${userId}`, {...socialsData});
    return response.data;
  } catch (error) {
    console.error(
      "An Error was caught by Client/SocialsService/update",
      error.response.data
    );
    return error.response.data;
  }
};