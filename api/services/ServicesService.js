const createServices = async (servicesData, id) => {
  try {
    const response = await Client.post(
      `/services`,
      servicesData.map((service) => ({ ...service, userId: id }))
    );
    return response.data;
  } catch (error) {
    console.error(
      "An Error was caught by Client/ServicesService",
      error.response.data
    );
    return error.response.data;
  }
};

const getServices = async (userId) => {
  try {
    const response = await Client.get(`/services/${userId}`);
    return response.data;
  } catch (error) {
    console.error(
      "An Error was caught by Client/ServicesService",
      error.response.data
    );
    return error.response.data;
  }
};
