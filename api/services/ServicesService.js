import Client from "../client/client";

export const createServices = async (servicesData, userId) => {
  try {
    const response = await Client.post(
      `/services`,
      ...{services_list: servicesData, userId: userId}
    );
    return response;
  } catch (error) {
    console.error(
      "An Error was caught by Client/ServicesService",
      error.response
    );
    return error.response;
  }
};

export const getServices = async (userId) => {
  try {
    const response = await Client.get(`/services/${userId}`);
    return response;
  } catch (error) {
    console.error(
      "An Error was caught by Client/ServicesService",
      error.response
    );
    return error.response;
  }
};

export const patchServices = async(userId, servicesData)=>{
  try {
    console.log("Services DATA passed to API: ", servicesData)
    const response = await Client.patch(
      `/services/${userId}`,
      {services_list: servicesData, userId: userId}
    );
    return response.data;
  } catch (error) {
    console.error(
      "An Error was caught by Client/ServicesService",
      error.response
    );
    return error.response;
  }
}
