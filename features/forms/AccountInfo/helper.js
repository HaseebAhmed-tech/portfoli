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

  const formData = new FormData(event.target);

  const onValidatedFieldSuccess = async () => {
    setErrors({});

    const data = validatedFields.data;
    let updatedData = {};
    
    delete data.confirmPassword;
    delete data.oldPassword;

    const { firstname, lastname, password, email, ...newData } = data;

    if(password !== null && password !== undefined){
      if(email !== null && email !== undefined){
        console.log("Email: ", email)
        updatedData = {...newData, name: `${firstname} ${lastname}`.trim(), password: password, email: email}
      } else{
        delete data.email;
        console.log("Email: ", email)
        updatedData = {...newData, name: `${firstname} ${lastname}`.trim(), password: password}
      }
    } else{
      delete data.password;
      
      if(email !== null && email !== undefined ){
        console.log("Email: ", email)

        updatedData = {...newData, name: `${firstname} ${lastname}`.trim(), email: email}
      } else{
        delete data.email;

        updatedData = {...newData, name: `${firstname} ${lastname}`.trim()}
      }
      console.log("Updated Data: ",updatedData)
    }
    
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
