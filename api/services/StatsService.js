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
      "An Error was caught by Client/StatsService/Create",
      error.response.data
    );
    return error.response.data;
  }
};

export const getStats = async (userId, statsData) => {
  try {
    const response = await Client.patch(`/stats/${userId}`, statsData.map((stat) => ({ ...stat, userId: id })));
    return response.data;
  } catch (error) {
    console.error(
      "An Error was caught by Client/StatsService/Get",
      error.response.data
    );
    return error.response.data;
  }
};

export const updateStats = async(userId, statsData) => {
  try {const response = await Client.patch(`/stats/${userId}`,
      statsData.map((stat) => ({ ...stat, userId: id }))
);
    return response.data;
  } catch (error) {
    console.error(
      "An Error was caught by Client/StatsService/Update",
      error.response.data
    );
    return error.response.data;
  }
}