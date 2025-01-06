import { useState } from "react";
import { useSelector } from "react-redux";

export const useServices = () => {
  const userServices = useSelector((state) => state.services.services);
  const [servicesData, setServicesData] = useState(userServices);

 const updateServices = (newServicesData) => {
    setServicesData(newServicesData);
  };

  // Function to handle adding new stat element
  const addServices = (id, data) => {
    setServicesData([
      ...servicesData,
      {
        id: id,
        title: data?.title ?? "",
        description: data?.description ?? ""
      },
    ]);
  };

  // Function to handle removing stat element
  const removeServices = (id) => {
    setServicesData(servicesData.filter((service) => service.id !== id));
  };

  return {
    servicesData: servicesData,
    setServicesData: setServicesData,
    addServices: addServices,
    removeServices: removeServices,
    updateServices: updateServices
  };
};
