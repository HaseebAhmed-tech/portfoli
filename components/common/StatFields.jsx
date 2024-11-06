import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";

function StatFields({ statsElements, addStats, removeStat, errors }) {
  console.log("Stats Element", statsElements);

  return (
    <div className="flex items-start flex-col">
      {statsElements.map((stat) => {
        return (
          <div
            key={stat.key}
            className="flex items-center justify-between w-full pb-2 mb-2 rounded-lg"
          >
            {stat.element}
            <Button
              type="button"
              variant="icon"
              size="icon"
              className="hover:bg-red-500"
              onClick={() => {
                removeStat(stat.key);
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
          addStats(
            statsElements.length > 0
              ? statsElements[statsElements.length - 1].key + 1
              : 0
          )
        }
      >
        <FaPlus />
      </Button>
      {errors.stats && (
        <p className="text-red-500 text-xs mt-2">{errors.stats}</p>
      )}
    </div>
  );
}

export default StatFields;
