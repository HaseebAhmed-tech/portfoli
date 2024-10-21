import { configureStore } from "@reduxjs/toolkit";
import indexReducer from "../../features/home/IndexSlice";
import userReducer from "../../features/user/userSlice";
import socialReducer from "../../features/home/socials/SocialsSlice";
import statsReducer from "../../features/home/stats/StatsSlice";

export const store = configureStore({
  reducer: {
    index: indexReducer,
    user: userReducer,
    socials: socialReducer,
    stats: statsReducer,
  },
});
