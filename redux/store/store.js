import { configureStore } from "@reduxjs/toolkit";
import indexReducer from "../../features/home/IndexSlice";
import userReducer from "../../features/user/userSlice";
import socialReducer from "../../features/home/socials/SocialsSlice";
import statsReducer from "../../features/home/stats/StatsSlice";
import servicesReducer from "../../features/home/services/ServicesSlice";

export const store = configureStore({
  reducer: {
    index: indexReducer,
    user: userReducer,
    socials: socialReducer,
    stats: statsReducer,
    services: servicesReducer,
  },
});
