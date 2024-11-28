import { handleValidationErrors } from "@/lib/utils";
import {updateStatsData} from "@/lib/storage/indexedDB"
import { updateStats } from "@/api/services/StatsService";
import { setStats } from "@/features/home/stats/StatsSlice";

const updateStatsInfo = (userId, updatedData, dispatch)=> {
    console.log("Updated Stats Data: ", updatedData)
    // updateStats({
    //     data: updatedData,
    //     id: userId,
    //   });
    dispatch(setStats(updatedData))

    
}

export const handleSubmit = async (
  event,
  setErrors,
  userId,
  statsElements,
  dispatch
) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const onValidatedFieldSuccess =  () => {
    setErrors({});
    const updatedData = statsElements.map((stat) => {
      const key = stat.key;
      const statName = `statName-${key}`;
      const statValue = `statValue-${key}`;
      return {
        text: formData.get(statName),
        num: +formData.get(statValue),
      };
    });
    updateStatsInfo(userId, updatedData, dispatch)
    return {
      updatedData
    };
  };


  const statsCheck = statsElements.filter((stat) => {
    const key = stat.key;
    const statName = `statName-${key}`;
    const statValue = `statValue-${key}`;
    const statNameData = formData.get(statName);
    const statValueData = formData.get(statValue);

    return !(statNameData && statValueData);
  });

  if (statsCheck.length > 0) {
    if (statsCheck.length > 0) {
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

