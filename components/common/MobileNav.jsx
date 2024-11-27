"use client";
import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { CiMenuFries } from "react-icons/ci";
import { navTabs } from "@/lib/constants/constants";
import { setIndex } from "@/features/home/IndexSlice";
import "../ui/styles.css";
import ProfileButton from "@/components/ui/profile-button";

function MobileNav({name}) {
  const tabIndex = useSelector((state) => state.index.value);
  const dispatch = useDispatch();

  const updateIndex = (index) => {
    dispatch(setIndex(index));
  };

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-2xl sm:text-3xl text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col border-l-2 border-accent">
        <SheetTitle>
        <ProfileButton small={true} />
        </SheetTitle>
        <div className="mt-10 text-center text-2xl ">
          <Link href={"#"}>
            <h1 className="text-xl sm:3xl text-foreground flex-1 tracking-normal uppercase">
              {name}
              <span className="text-accent text-2xl sm:3xl ">.</span>
            </h1>
          </Link>
          <nav className="flex flex-col justify-center items-center space-y-8 mt-[15%]">
            {navTabs.map((tab, index) => (
                <button key={index} onClick={() => updateIndex(index)}>
                  {tabIndex === index ? (
                    <Link
                      href={"#"}
                      className="text-foreground py-2 text-lg uppercase border-b-2 border-accent transition transform duration-200"
                    >
                      {tab.name}
                    </Link>
                  ) : (
                    <Link
                      href={"#"}
                      className="text-neutral-500 hover:text-accent px-2 py-1 uppercase text-lg transition transform duration-200 "
                    >
                      {tab.name}
                    </Link>
                  )}
                </button>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
