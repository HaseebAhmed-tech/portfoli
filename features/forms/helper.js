import { updateUser } from "@/api/services/UserService";
import { saveUserData } from "@/lib/storage/indexedDB";
import { setUserData } from "@/features/user/userSlice";
import { AccountInfoSchema } from "@/lib/definitions";

export const submitAccountInfo = (event, setErrors) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const validatedFields = SignupFormSchema.safeParse({
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname") ?? "",
    designation: formData.get("designation"),
    description: formData.get("description") ?? "",
    contact: formData.get("phone"),
    email: formData.get("email"),
    oldPassword: formData.get("oldPassword"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  updateAccountInfo(userId, userData);
  dispatch(setUserData(userData));
};

export const updateAccountInfo = (userId, userData) => {
  updateUser(userId, userData);
  saveUserData(userData);
};

export const handleSubmit = async (
  event,
  setErrors,
  socialsData,
  statsElements
) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const onValidatedFieldSuccess = async () => {
    setErrors({});
    const data = validatedFields.data;
    delete data.confirmPassword;
    const { firstname, lastname, linkedin, github, instagram, ...newData } =
      data;
    const statsData = statsElements.map((stat) => {
      const key = stat.key;
      const statName = `statName-${key}`;
      const statValue = `statValue-${key}`;
      return {
        text: formData.get(statName),
        num: +formData.get(statValue),
      };
    });
    const userResponse = await handleRegistration({
      ...newData,
      name: `${firstname} ${lastname}`.trim(),
    });
    createSocials({
      data: socialsData,
      id: userResponse.userId,
    });
    createStats({
      data: statsData,
      id: userResponse.userId,
    });
    console.log("Socials Data from Signup Helper: ", socialsData);
    console.log("User Data from Signup Helper: ", {
      ...newData,
      name: `${firstname} ${lastname}`.trim(),
    });
    console.log("Stats Data from Signup Helper: ", statsData);

    return {
      ...newData,
      name: `${firstname} ${lastname}`.trim(),
      userId: userResponse.userId,
      socials: socialsData,
      stats: statsData,
    };
  };

  const validatedFields = AccountInfoSchema.safeParse({
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname") ?? "",
    email: formData.get("email"),
    designation: formData.get("designation"),
    description: formData.get("description") ?? "",
    contact: formData.get("phone"),
    oldPassword: formData.get("oldPassword"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });
  const statsCheck = statsElements.filter((stat) => {
    const key = stat.key;
    const statName = `statName-${key}`;
    const statValue = `statValue-${key}`;
    const statNameData = formData.get(statName);
    const statValueData = formData.get(statValue);

    return !(statNameData && statValueData);
  });

  if (!validatedFields.success || statsCheck.length > 0) {
    if (statsCheck.length > 0) {
      const newErrors = handleValidationErrors(validatedFields);
      setErrors(newErrors);
      setErrors({
        ...newErrors,
        ...{
          stats: "Please fill all the stats",
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
