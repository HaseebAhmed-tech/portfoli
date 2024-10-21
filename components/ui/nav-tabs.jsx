"use client";

import { navTabs } from "@/lib/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { setIndex } from "@/features/home/IndexSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavTabs = () => {
  const tabIndex = useSelector((state) => state.index.value);

  const dispatch = useDispatch();

  const updateTabIndex = (index) => {
    dispatch(setIndex(index));
  };

  return (
    <ul className="flex mx-12 space-x-10">
      {navTabs.map((tab, index) => (
        <li key={index}>
          <button onClick={() => updateTabIndex(index)}>
            {tabIndex === index ? (
              <Link
                href={"/home"}
                className="text-foreground py-2 text-lg uppercase border-b-2 border-accent transition transform duration-200"
              >
                {tab.name}
              </Link>
            ) : (
              <Link
                href={"/home"}
                className="text-neutral-500 hover:text-accent px-2 py-1 uppercase text-lg transition transform duration-200 "
              >
                {tab.name}
              </Link>
            )}
          </button>
        </li>
      ))}
    </ul>
  );
};
