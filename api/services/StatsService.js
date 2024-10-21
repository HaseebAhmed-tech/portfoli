import Client from "../client/client";

export const createStats = async ({ data, id }) => {
  try {
    const response = await Client.post(
      `/stats`,
      data.map((stat) => ({ ...stat, userId: id }))
    );
    return response.data;
  } catch (error) {
    console.error(
      "An Error was caught by Client/StatsService",
      error.response.data
    );
    return error.response.data;
  }
};

export const getStats = async (userId) => {
  try {
    const response = await Client.get(`/stats/${userId}`);
    return response.data;
  } catch (error) {
    console.error(
      "An Error was caught by Client/StatsService",
      error.response.data
    );
    return error.response.data;
  }
};
