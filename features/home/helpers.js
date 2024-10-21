import { setUserData } from "@/features/user/userSlice";
import { getUser } from "@/api/services/UserService"; // Adjust the import path as necessary
import { getSocials } from "@/api/services/SocialsService";
import { setSocials } from "./socials/SocialsSlice";
import { saveUserData } from "@/lib/storage/indexedDB";
import { getUserData } from "@/lib/storage/indexedDB";
import { setStats } from "@/features/home/stats/StatsSlice";

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
  const { socials, stats, ...data } = userData;
  dispatch(setUserData(data));
  saveUserData(userData);
  if (userData.socials) {
    dispatch(setSocials(socials));
  } else {
    fetchSocials(userId, dispatch, userData.socials);
  }
  if (userData.stats) {
    console.log("Stats Data from IndexedDB:", stats);
    dispatch(setStats(stats));
  } else {
    fetchStats(userId, dispatch, userData.stats);
  }
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
