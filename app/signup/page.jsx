"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { handleSubmit, onLoginClick } from "@/features/auth/signup/helpers";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdDelete } from "react-icons/md";
import PasswordInput from "@/components/common/PasswordInput";
import ErrorInputs from "@/components/common/ErrorInputs";
import { useSignupForm } from "../../features/auth/signup/hooks/useSignupForm";
import SubmitButton from "@/features/auth/signup/components/SubmitButton";
import { useForm } from "@/hooks/useForm";
import { useDispatch } from "react-redux";
import { setUserId, setUserData } from "@/features/user/userSlice";
import { setSocials } from "@/features/home/socials/SocialsSlice";
import { setStats } from "@/features/home/stats/StatsSlice";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { saveUserData } from "@/lib/storage/indexedDB";
import { useToast } from "@/hooks/use-toast";
const IconInput = dynamic(() => import("@/components/common/IconInput"));

function Signup() {
  const {
    linkedIn,
    setLinkedIn,
    github,
    setGithub,
    instagram,
    setInstagram,
    statsElements,
    addStats,
    removeStat,
  } = useSignupForm();

  const { errors, setErrors } = useForm();

  const { toast } = useToast();

  const dispatch = useDispatch();

  const router = useRouter();

  return (
    <section className="min-h-screen flex justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
        }}
        className="flex flex-row items-center justify-center w-full "
      >
        <div className="w-[95%] lg:w-[50%] ">
          <form
            onSubmit={(e) => {
              handleSubmit(
                e,
                setErrors,
                {
                  linkedin: linkedIn,
                  github: github,
                  instagram: instagram,
                },
                statsElements
              ).then((response) => {
                if (response) {
                  if (response.error) {
                    toast({
                      title: response.message,
                      description: response.error,
                    });
                  } else {
                    toast({
                      title: "Registration Successful",
                      description: `Welcome to Portfoli`,
                    });
                    const { userId, socials, stats, ...data } = response;
                    dispatch(setUserId(response.userId));
                    dispatch(setUserData({ ...data }));
                    dispatch(setSocials(socials));
                    dispatch(setStats(stats));
                    console.log("Saving Data to IndexedDB:", {
                      socials: { ...socials },
                      stats: { ...stats },
                      ...data,
                    });
                    saveUserData({
                      socials: { ...socials },
                      stats: { ...stats },
                      ...data,
                    });
                    router.push("/home");
                  }
                }
              });
            }}
            className="flex flex-col gap-3 md:gap-6 p-10 bg-[#27272c] rounded-xl "
          >
            <h3 className="text-4xl text-accent">Register</h3>

            <p className="text-secondrytext text-lg">
              Welcome to Portfoli! Already have an account?{" "}
              <span className="text-accent hover:text-accent-hover">
                <button type="button" onClick={() => onLoginClick(router)}>
                  Sign In
                </button>
              </span>{" "}
              now.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-6">
              <ErrorInputs
                name="firstname"
                error={errors.firstname}
                placeholder="Firstname"
              />

              <ErrorInputs
                name="lastname"
                error={errors.lastname}
                placeholder="Lastname"
              />

              <ErrorInputs
                name="designation"
                error={errors.designation}
                placeholder="Designation"
              />

              <ErrorInputs
                name="phone"
                error={errors.phone}
                placeholder="Phone"
              />
            </div>

            <ErrorInputs
              name="email"
              error={errors.email}
              placeholder="Email Address"
              type="email"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              <div className="flex flex-col">
                <PasswordInput
                  name="password"
                  placeholder="Password"
                  showIcon={false}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-2">{errors.password}</p>
                )}
              </div>

              <div className="flex flex-col">
                <PasswordInput
                  name="confirmPassword"
                  placeholder="Confirm Pssword"
                  showIcon={false}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            <Select>
              <SelectTrigger className="w-full ">
                <SelectValue
                  className="placeholder:text-sm md:placeholder:text-base"
                  placeholder="Enter Socials"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="p-3">
                  <IconInput
                    name="linkedin"
                    Icon={FaLinkedin}
                    inputProps={{ placeholder: "LinkedIn", value: linkedIn }}
                    set={(e) => setLinkedIn(e)}
                  />
                  <IconInput
                    name="github"
                    Icon={FaGithub}
                    inputProps={{ placeholder: "GitHub", value: github }}
                    set={(e) => setGithub(e)}
                  />
                  <IconInput
                    name="instagram"
                    Icon={FaInstagram}
                    inputProps={{
                      placeholder: "Instagram",
                      value: instagram,
                    }}
                    set={(e) => setInstagram(e)}
                  />
                </SelectGroup>
              </SelectContent>
            </Select>

            <p className="text-secondrytext ">Enter Stats</p>

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
            <Textarea
              name="description"
              className="h-[200px] "
              placeholder="Describe Yourself"
            />
            <SubmitButton />
          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default Signup;
