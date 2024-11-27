import { updateUser } from "@/api/services/UserService";
import { updateUserData } from "@/lib/storage/indexedDB";
import { setUserData } from "@/features/user/userSlice";
import { AccountInfoSchema } from "@/lib/definitions";
import { handleValidationErrors } from "@/lib/utils";


export const updateAccountInfo = async (userId, userData, dispatch) => {
   updateUser(userId, userData);
  await updateUserData(userData);
  dispatch(setUserData(userData));
};


export const handleSubmit = async (
  event,
  setErrors,
  userId, 
  dispatch
) => {
  event.preventDefault();
  console.log("User ID: ", userId)
  const formData = new FormData(event.target);

  console.log("Account Info Form Data, ", formData.get("firstname") )

  const onValidatedFieldSuccess = async () => {

    setErrors({});

    const data = validatedFields.data;
    
    delete data.confirmPassword;
    delete data.oldPassword;
    delete data.password;
    delete data.email;

    const { firstname, lastname, ...newData } = data;
    const updatedData = {...newData, name: `${firstname} ${lastname}`.trim(),}
    
    // const userResponse = await handleRegistration({
    //   ...newData,
      // name: `${firstname} ${lastname}`.trim(),
    // });
    // createSocials({
    //   data: socialsData,
    //   id: userResponse.userId,
    // });
    // createStats({
    //   data: statsData,
    //   id: userResponse.userId,
    // });
    // console.log("Socials Data from Signup Helper: ", socialsData);
    // console.log("User Data from Signup Helper: ", {
    //   ...newData,
    //   name: `${firstname} ${lastname}`.trim(),
    // });
    // console.log("Stats Data from Signup Helper: ", statsData);
    console.log("Account Info Updated Data: ", updatedData);
    updateAccountInfo(userId, updatedData, dispatch)

    return {
      updatedData
    };
  };

  const validatedFields = AccountInfoSchema.safeParse({
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname") ?? "",
    email: formData.get("email"),
    designation: formData.get("designation"),
    description: formData.get("description") ?? "",
    contact: formData.get("contact"),
    oldPassword: formData.get("oldPassword"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {  
       
      const newErrors = handleValidationErrors(validatedFields);
      console.log("There are errors in the form: ",newErrors)
      setErrors(newErrors);
      return null;
    
  } else {
    console.log("Form has been validated for: ", userId )
    return onValidatedFieldSuccess();s
  }
};
