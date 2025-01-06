import { handleValidationErrors } from "@/lib/utils";
import {updateUserData} from "@/lib/storage/indexedDB"
import { setServices } from "@/features/home/services/ServicesSlice";
import { patchServices } from "@/api/services/ServicesService";

const updateServices = async (userId, updatedData, dispatch)=> {
    console.log("Updated Services Data: ", updatedData)
    
    dispatch(setServices(updatedData))

    await updateUserData({services_list: updatedData})

    patchServices(userId, updatedData)

}

export const handleSubmit = async (
  event,
  setErrors,
  userId,
  services,
  dispatch
) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log("User id: ", userId)
  const onValidatedFieldSuccess =  () => {
    setErrors({});
    const updatedData = services.map((service) => {
      const key = service.id;
      const serviceTitle = `serviceTitle-${key}`;
      const serviceDescription = `serviceDescription-${key}`;
      return {
        id: service.id,
        title: formData.get(serviceTitle),
        description: formData.get(serviceDescription),
      };
    });
    updateServices(userId, updatedData, dispatch)
    return {
      updatedData
    };
  };


  const servicesCheck = services.filter((service) => {
    const key = service.id;
    const serviceTitle = `serviceTitle-${key}`;
    const serviceDescription = `serviceDescription-${key}`;
    const serviceTitleData = formData.get(serviceTitle);
    const serviceDescriptionData = formData.get(serviceDescription);
    console.log("Services Data Entered: ", [serviceTitleData, serviceDescriptionData])


    return !(serviceTitleData && serviceDescriptionData);
  });

  if (servicesCheck.length > 0) {
    if (servicesCheck.length > 0) {
      setErrors({
        ...{
          services: "Please fill all the Services",
        },
      });
      return null;
    } else {
      const newErrors = handleValidationErrors(validatedFields);
      setErrors(newErrors);
      return null;
    }
  } else {
    return onValidatedFieldSuccess();
  }
};

