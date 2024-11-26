import { Button } from "./button";
import { FaUser } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";

function ProfileButton({small}) {
  const router = useRouter();
  return (
    <TooltipProvider>
      <Tooltip>
        {/* Replace TooltipTrigger class container with a div or span */}
        <TooltipTrigger asChild>
          <div className= {`${small ?? "w-full bg-[#232329] rounded-xl flex justify-center items-center"} group`}>
            <Button
              variant="profile"
              size="profile"
              onClick={() => router.push("/profile")}
            >
              <FaUser />
            </Button>
          </div>
        </TooltipTrigger>
        <TooltipContent>Profile</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ProfileButton;
