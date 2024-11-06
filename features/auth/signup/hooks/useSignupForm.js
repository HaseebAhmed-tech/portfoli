import { useState } from "react";
import { createStatElement } from "../../../../components/common/StatElement";
export const useSignupForm = () => {
  const [linkedIn, setLinkedIn] = useState("");
  const [github, setGithub] = useState("");
  const [instagram, setInstagram] = useState("");
  const [statsElements, setStatsElements] = useState([
    {
      key: 0,
      element: createStatElement(0),
    },
  ]);

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
    linkedIn,
    setLinkedIn,
    github,
    setGithub,
    instagram,
    setInstagram,
    statsElements,
    addStats,
    removeStat,
  };
};

// Helper function to create stat element
