import { handleSubmit } from "@/features/forms/Services/helper";
import { useServices } from "@/hooks/useServices";
import ServiceFields from '@/components/common/ServiceFields'
import { useForm } from "@/hooks/useForm";
import { useDispatch } from "react-redux";

function ServicesData({userId}) {
  const {
    servicesData,
    addServices,
    removeServices,
  } = useServices();

  const dispatch = useDispatch();
  const { errors, setErrors } = useForm();

  return (
    <form id="Services" onSubmit={(e)=>handleSubmit(e, setErrors, userId, servicesData, dispatch )}>
      <ServiceFields
        servicesData={servicesData}
        addServices={addServices}
        removeServices={removeServices}
        errors={errors}
      />
    </form>
  );
}
export default ServicesData;
