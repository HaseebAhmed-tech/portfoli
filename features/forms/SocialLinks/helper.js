import { updateSocials } from "@/api/services/SocialsService";
import { updateSocialsData } from "@/lib/storage/indexedDB";
import { setSocials } from "@/features/home/socials/SocialsSlice";



export const updateSocialsInfo = async (userId, socialsData, dispatch) => {
  updateSocials(userId, socialsData);
  await updateSocialsData(socialsData);
  dispatch(setSocials(socialsData));
};



export const handleSubmit = async (
  event,
  userId, 
  dispatch
) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const data = {
    linkedin: formData.get("linkedin"),
    github: formData.get("github") ?? "",
    instagram: formData.get("instagram"),
  };

    const updatedData = Object.fromEntries(
        Object.entries(data).filter(([_, value]) => ( value !== null && value !==undefined ))
      );
    
    console.log("Social Links Updated Data: ", updatedData);
    updateSocialsInfo(userId, updatedData, dispatch)

    return {
      updatedData
    };

//   const validatedFields = SocialLinksSchema.safeParse({
//     linkedin: formData.get("linkedin"),
//     github: formData.get("github") ?? "",
//     instagram: formData.get("instagram"),
//   });

//   if (!validatedFields.success) {  
//     const newErrors = handleValidationErrors(validatedFields);
//     console.log("There are errors in the form: ", newErrors)
//     return null;
//   } else {
//     console.log("Form has been validated for: ", userId )
//     return onValidatedFieldSuccess();
//   }
};
