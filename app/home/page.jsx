"use client";

import dynamic from "next/dynamic";
import Header from "@/components/common/Header";
import Homepage from "@/app/home/homepage/page";
import StairTransition from "@/components/common/StairTransition";
import PageTransition from "@/components/common/PageTransition";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "@/features/home/helpers";

const Services = dynamic(() => import("@/app/home/services/page"));
const Resume = dynamic(() => import("@/app/home/resume/page"));
const Work = dynamic(() => import("@/app/home/work/page"));
const Contact = dynamic(() => import("@/app/home/contact/page"));

export default function Home({ children }) {
  const tabIndex = useSelector((state) => state.index.value);
  const userId = useSelector((state) => state.user.userId);
  const data = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUser(userId, dispatch, data);
  }, [dispatch, userId, data]);

  return (
    <main>
      <Header />
      <section className="min-w-80vh relative overflow-y-hidden">
        <StairTransition />
        <PageTransition>
          <div className="max-w-7xl mx-auto min-h-[svh]  px-6 overflow-hidden">
            {tabIndex === 0 ? (
              <Homepage />
            ) : tabIndex === 1 ? (
              <Services />
            ) : tabIndex === 2 ? (
              <Resume />
            ) : tabIndex === 3 ? (
              <Work />
            ) : tabIndex === 4 ? (
              <Contact />
            ) : (
              <div>Home Page</div>
            )}
          </div>
        </PageTransition>
      </section>
    </main>
  );
}
