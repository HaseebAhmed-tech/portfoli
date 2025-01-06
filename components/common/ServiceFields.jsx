import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";


function ServiceFields({ servicesData, addServices, removeServices, errors }) {
  console.log("Services Data", servicesData);

  return (
    <div className="flex items-start flex-col">
      {servicesData.map((service) => {
        return (
          <div
            key={service.id}
            className="flex items-center justify-between w-full pb-2 mb-3 rounded-lg"
          >
             <div
            key={service?.id ?? 0}
            className="flex flex-col gap-2 tems-center w-[85%] justify-between rounded-lg"
            >
            <Input
                className="w-[65%] placeholder:text-sm md:placeholder:text-base"
                type="text"
                name={`serviceTitle-${service?.id ?? 0}`}
                placeholder="Service Title"
                defaultValue={service.title ?? ""}

            />
            <Textarea
                className="w-[100%] md:w-[100%] placeholder:text-sm md:placeholder:text-base border border-b-accent"
                type="number"
                name={`serviceDescription-${service?.id ?? 0}`}
                placeholder="Service Description"
                defaultValue={service?.description ?? ""}

            />

            </div>
                    <Button
                    type="button"
                    variant="icon"
                    size="icon"
                    className="hover:bg-red-500"
                    onClick={() => {
                        removeServices(service?.id ?? 0);
                    }}
                    >
                    <MdDelete />
                    </Button>

                    
                </div>
                
            );
      })}
      <Button
        type="button"
        variant="icon"
        size="icon"
        onClick={() =>
          addServices(
            servicesData.length > 0
              ? servicesData[servicesData.length - 1].id + 1
              : 0
          )
        }
      >
        <FaPlus />
      </Button>
      {errors.services && (
        <p className="text-red-500 text-xs mt-2">{errors.services}</p>
      )}
    </div>
  );
}

export default ServiceFields;
