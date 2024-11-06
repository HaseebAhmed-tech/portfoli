import { useState } from "react";
import { useSelector } from "react-redux";
import { createStatElement } from "./../components/common/StatElement";

export const useStats = () => {
  const userStats = useSelector((state) => state.stats.stats);
  const [statsData, setStatsData] = useState(userStats);
  const [statsElements, setStatsElements] = useState(
    statsData.map((stat) => {
      return {
        key: stat.id,
        element: createStatElement(stat.id, stat.text, stat.num),
      };
    })
  );

 const updateStats = (newStatsData) => {
    setStatsData(newStatsData);
    setStatsElements(
      newStatsData.map((stat) => {
        return {
          key: stat.id,
          element: createStatElement(stat.id, stat.text, stat.num),
        };
      })
    );
  };

  // Function to handle adding new stat element
  const addStats = (id) => {
    setStatsElements([
      ...statsElements,
      {
        key: id,
        element: createStatElement(id),
      },
    ]);
  };

  // Function to handle removing stat element
  const removeStat = (id) => {
    setStatsElements(statsElements.filter((stat) => stat.key !== id));
  };

  return {
    statsData,
    setStatsData,
    statsElements,
    setStatsElements,
    addStats,
    removeStat,
    updateStats
  };
};
