import React from "react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";

function Stats() {
  const userStats = useSelector((state) => state.stats.stats);
  return (
    <section className="pt-4 pb-12 lg:pt-0 lg:pb-10">
      <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto lg:max-w-none">
        {userStats
          ? userStats.map((stat, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex gap-4 items-center justify-center "
                >
                  <CountUp
                    end={stat.num}
                    duration={5}
                    delay={2}
                    className="text-4xl lg:text-6xl font-extrabold "
                  />
                  <p
                    className={`${
                      stat.text.length < 15
                        ? "max-w-[100px]"
                        : "max-w-[150px] leading-snug text-foreground "
                    }`}
                  >
                    {stat.text}
                  </p>
                </div>
              );
            })
          : null}
      </div>
    </section>
  );
}

export default Stats;
