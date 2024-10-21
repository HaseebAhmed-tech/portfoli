import { SignupFormSchema } from "@/lib/definitions";
import { handleValidationErrors } from "@/lib/utils";
import { handleRegistration } from "@/api/services/AuthService";
import { createSocials } from "@/api/services/SocialsService";
import { createStats } from "@/api/services/StatsService";

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

    return {
      ...newData,
      name: `${firstname} ${lastname}`.trim(),
      userId: userResponse.userId,
      socials: socialsData,
      stats: statsData,
    };
  };

  const validatedFields = SignupFormSchema.safeParse({
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname") ?? "",
    designation: formData.get("designation"),
    description: formData.get("description") ?? "",
    contact: formData.get("phone"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
    linkedin: socialsData.linkedin,
    github: socialsData.github,
    instagram: socialsData.instagram,
  });
  const statsCheck = statsElements.filter((stat) => {
    const key = stat.key;
    const statName = `statName-${key}`;
    const statValue = `statValue-${key}`;
    const statNameData = formData.get(statName);
    const statValueData = formData.get(statValue);
    console.log("=======================================");
    console.log("Stat Name", statNameData);
    console.log("Stat Value", statValueData);
    console.log("=======================================");
    return !(statNameData && statValueData);
  });
  console.log("Stats Passing Check", statsCheck);

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

export const onLoginClick = (router) => {
  router.push("/login");
};
