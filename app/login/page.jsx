"use client";

import React from "react";
import Link from "next/link";
import Photo from "@/components/common/Photo";
import { Button } from "@/components/ui/button";
import PasswordInput from "@/components/common/PasswordInput";
import ErrorInputs from "@/components/common/ErrorInputs";
import { motion } from "framer-motion";
import { BsEnvelope } from "react-icons/bs";
import { handleSubmit, onSignUpClick } from "@/features/auth/login/helpers";
import { useRouter } from "next/navigation";
import { useForm } from "@/hooks/useForm";
import { useDispatch } from "react-redux";
import { useToast } from "@/hooks/use-toast";

function Login() {
  const { errors, setErrors } = useForm();
  const router = useRouter();
  const { toast } = useToast();
  const dispatch = useDispatch();
  return (
    <section className="min-h-screen flex justify-center px-10 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
        }}
        className="flex flex-col lg:flex-row items-center justify-none lg:justify-around w-full "
      >
        <div className="mb-8 lg:mb-0">
          <Photo />
        </div>
        <div className="w-full lg:w-[45%]">
          <form
            onSubmit={async (e) => {
              handleSubmit(e, setErrors, dispatch, router, toast);
            }}
            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl "
          >
            <h3 className="text-4xl text-accent">Login</h3>
            <p className="text-secondrytext text-base sm:text-lg">
              Welcome to Portfoli! Do not have an account?{" "}
              <span className="text-accent hover:text-accent-hover">
                <button
                  type="button"
                  className="hover:text-accent-hover"
                  onClick={() => {
                    onSignUpClick(router);
                  }}
                >
                  Sign Up
                </button>
              </span>{" "}
              now.
            </p>
            <ErrorInputs
              name="email"
              error={errors.email}
              placeholder="Email Address"
              type="email"
              inputStyle="pl-10"
              prefix={true}
              Icon={BsEnvelope}
            />

            <div className="flex flex-col">
              <PasswordInput
                name="password"
                placeholder="Password"
                showIcon={true}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-2">{errors.password}</p>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="accent-accent "
                />
                <label
                  htmlFor="remember"
                  className="text-secondrytext text-sm sm:text-lg ml-2"
                >
                  Remember me
                </label>
              </div>
              <Link
                href={""}
                className="text-accent hover:text-accent-hover text-sm sm:text-lg"
              >
                Forgot Password?
              </Link>
            </div>
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="w-full mx-auto "
            >
              Login
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default Login;
