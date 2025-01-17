import { setUserData } from "@/features/user/userSlice";
import { getUser } from "@/api/services/UserService"; // Adjust the import path as necessary
import { getSocials } from "@/api/services/SocialsService";
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
  console.log("Getting User from Backend")
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
    const stats = [];
    userData.stats = stats;
  }
  if (userData.services.services_list) {
    dispatch(setServices(services.services_list));
  } else {
    const services = await fetchServices(userId, dispatch, userData.services);
    userData.services = services.services_list;
  }
  console.log("Socials Data from Backend: ", socials ?? "Empty");
  console.log("User Data from Backend: ", {
    ...data,
    name: `${userData.firstname ?? ""} ${userData.lastname ?? ""}`.trim(),
  });
  console.log("Stats Data from Backend: ", stats ?? "Empty");
  console.log("Services Data from Backend: ", services.services_list )
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

export const fetchServices = async (userId, dispatch, services) => {
  try {
    if (services && services.length > 0) {
      return;
    }
    const newServices = await getServices(userId);
    dispatch(setServices(newServices.services_list));
  } catch (error) {
    console.error("Failed to fetch services:", error);
  }
};
