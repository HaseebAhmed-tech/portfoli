import { handleSubmit } from "@/features/forms/StatsData/helper";
import { useStats } from "./../../hooks/useStats";
import StatFields from "./../common/StatFields";
import { useForm } from "@/hooks/useForm";
import { useDispatch } from "react-redux";

function StatsData({userId}) {
  const {
    statsElements,
    addStats,
    removeStat,
  } = useStats();
  const dispatch = useDispatch();
  const { errors, setErrors } = useForm();
  return (
    <form id="Stats-Data" onSubmit={(e)=>handleSubmit(e, setErrors, userId, statsElements, dispatch )}>
      <StatFields
        statsElements={statsElements}
        addStats={addStats}
        removeStat={removeStat}
        errors={errors}
      />
    </form>
  );
}
export default StatsData;
