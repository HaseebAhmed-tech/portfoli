import { setUserData } from "@/features/user/userSlice";
import { getUser } from "@/api/services/UserService"; // Adjust the import path as necessary
import { getSocials } from "@/api/services/SocialsService";
import { getStats } from "@/api/services/StatsService";
import { getServices } from "@/api/services/ServicesService";
import { setSocials } from "./socials/SocialsSlice";
import { saveUserData } from "@/lib/storage/indexedDB";
import { getUserData } from "@/lib/storage/indexedDB";
import { setStats } from "@/features/home/stats/StatsSlice";
import { setServices } from "./services/ServicesSlice";

export const fetchUser = async (userId, dispatch, data) => {
  try {
    if (data && Object.keys(data).length > 0) {
      return;
    }
    await getUserData(dispatch, userId);
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
};

export const getUsersBack = async (userId, dispatch) => {
  const userData = await getUser(userId);
  if (userData.error) {
    return;
  }
  const { socials, stats, services, ...data } = userData;
  dispatch(setUserData(data));
  if (userData.socials) {
    dispatch(setSocials(socials));
  } else {
    const socials = await fetchSocials(userId, dispatch, userData.socials);
    userData.socials = socials;
  }
  if (userData.stats) {
    dispatch(setStats(stats));
  } else {
    const stats = fetchStats(userId, dispatch, userData.stats);
    userData.stats = stats;
  }
  if (userData.services) {
    dispatch(setServices(services));
  } else {
    const services = fetchServices(userId, dispatch, userData.services);
    userData.services = services;
  }
  console.log("Socials Data from Backend: ", socialsData);
  console.log("User Data from Backend: ", {
    ...newData,
    name: `${firstname} ${lastname}`.trim(),
  });
  console.log("Stats Data from Backend: ", statsData);
  saveUserData(userData);
};

export const fetchSocials = async (userId, dispatch, socials) => {
  try {
    if (socials && Object.keys(socials).length > 0) {
      return;
    }
    const newSocials = await getSocials(userId); // Ensure you have access to getUser
    dispatch(setSocials(newSocials));
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
};

export const fetchStats = async (userId, dispatch, stats) => {
  try {
    if (stats && stats.length > 0) {
      return;
    }
    const newStats = await getStats(userId);
    dispatch(setStats(newStats));
  } catch (error) {
    console.error("Failed to fetch stats:", error);
  }
};

export const fetchServices = async (userId, dispatch, services) => {
  try {
    if (services && services.length > 0) {
      return;
    }
    const newServices = await getServices(userId);
    dispatch(setServices(newServices));
  } catch (error) {
    console.error("Failed to fetch services:", error);
  }
};
