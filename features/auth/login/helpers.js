import { handleLogin } from "@/api/services/AuthService";
import { LoginFormSchema } from "@/lib/definitions";
import { handleValidationErrors } from "@/lib/utils";
import { setUserId } from "@/features/user/userSlice";

const validateLoginSchema = (formData) => {
  return LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
};

const onValidatedFieldSuccess = async (
  toast,
  validatedFields,
  rememberFlag,
  dispatch,
  router,
  setErrors
) => {
  setErrors({});
  const data = validatedFields.data;
  try {
    handleLogin(
      {
        ...data,
      },
      rememberFlag
    ).then((response) => {
      if (response) {
        if (response.error) {
          toast({
            title: response.message,
            description: response.error,
          });
        } else {
          toast({
            title: "Login Successful",
            description: `Welcome to Portfoli`,
          });
          dispatch(setUserId(response.userId));
          router.push("/home");
        }
      }
      return response;
    });
  } catch (error) {
    console.error("An Error was caught by Helper", error.message);
    return null;
  }
};

export const handleSubmit = async (
  event,
  setErrors,
  dispatch,
  router,
  toast
) => {
  // Prevent default form submission
  event.preventDefault();

  const formData = new FormData(event.target);

  const validatedFields = validateLoginSchema(formData);

  const rememberFlag = formData.get("remember");

  if (!validatedFields.success) {
    const newErrors = handleValidationErrors(validatedFields);
    setErrors(newErrors);
    return null;
  } else {
    await onValidatedFieldSuccess(
      toast,
      validatedFields,
      rememberFlag,
      dispatch,
      router,
      setErrors
    );
  }
};

export const onSignUpClick = (router) => {
  // Initialize useRouter
  router.push("/signup");
};
