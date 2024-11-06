import { Input } from "@/components/ui/input";
import { useStats } from "@/hooks/useStats";

export const createStatElement = (id, statTitle, statValue) => {

  // const {updateStats} = useStats();
  return (
    <div
      key={id}
      className="flex items-center w-[80%] justify-between rounded-lg"
    >
      <Input
        className="w-[65%] placeholder:text-sm md:placeholder:text-base"
        type="text"
        name={`statName-${id}`}
        placeholder="Stat Title"
        defaultValue={statTitle ?? ""}

      />
      <Input
        className="w-[35%] md:w-[25%] placeholder:text-sm md:placeholder:text-base"
        type="number"
        name={`statValue-${id}`}
        placeholder="Value"
        defaultValue={statValue ?? ""}

      />
    </div>
  );
};
