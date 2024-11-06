import { useStats } from "./../../hooks/useStats";
import StatFields from "./../common/StatFields";
import { useForm } from "@/hooks/useForm";

function StatsData() {
  const {
    statsElements,
    addStats,
    removeStat,
  } = useStats();
  const { errors, setErrors } = useForm();
  return (
    <StatFields
      statsElements={statsElements}
      addStats={addStats}
      removeStat={removeStat}
      errors={errors}
    />
  );
}
export default StatsData;
