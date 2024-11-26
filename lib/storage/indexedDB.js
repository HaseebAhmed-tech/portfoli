import { setUserData } from "@/features/user/userSlice";
import { setSocials } from "@/features/home/socials/SocialsSlice";
import { setStats } from "@/features/home/stats/StatsSlice";
import { getUsersBack } from "@/features/home/helpers";
const openDatabase = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("Portfoli", 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore("user", { keyPath: "userId" });
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject("Error opening database:", event.target.error);
    };
  });
};

export const saveUserData = async (userData) => {
  console.log("Saving Data to Indexed Database")
  const db = await openDatabase();
  const transaction = db.transaction("user", "readwrite");
  const store = transaction.objectStore("user");

  // Add a timestamp
  const dataWithTimestamp = {
    ...userData,
    userId: "currentUser",
    timestamp: Date.now(),
  };

  store.put(dataWithTimestamp);

  transaction.oncomplete = () => {};

  transaction.onerror = (event) => {
    console.error("Error saving user data:", event.target.error);
  };
};

// Function to get portfolio data and check expiration
export const getUserData = async (dispatch, userId) => {
  console.log("Getting User from Indexed Database")
  const db = await openDatabase();
  const transaction = db.transaction("user", "readonly");
  const store = transaction.objectStore("user");
  const request = store.get("currentUser"); // Replace with actual user ID or key

  request.onsuccess = async (event) => {
    const data = event.target.result;
    if (data) {
      const isExpired = Date.now() - data.timestamp;
      if (isExpired > 0) {
        const { socials, stats, userId, timestamp, ...userData } = data;
        console.log("Socials Data from IndexedDB: ", socials);
        console.log("User Data from IndexedDB: ", userData );
        console.log("Stats Data from IndexedDB: ", stats );
        dispatch(setUserData(userData));
        dispatch(setSocials(socials));
        dispatch(setStats(stats));
      } else {
        await getUsersBack(userId, dispatch);
      }
    } else {
      await getUsersBack(userId, dispatch);
    }
  };

  request.onerror = (event) => {
    console.error("Error fetching user data:", event.target.error);
  };
};
