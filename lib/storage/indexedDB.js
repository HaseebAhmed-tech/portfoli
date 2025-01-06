import { setUserData, setUserId } from "@/features/user/userSlice";
import { setSocials } from "@/features/home/socials/SocialsSlice";
import { setStats } from "@/features/home/stats/StatsSlice";
import { setServices } from "@/features/home/services/ServicesSlice";
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

  const {services, ...data} = userData;
  // Add a timestamp
  const dataWithTimestamp = {
    ...userData,
    userId: "currentUser",
    services_list: services.services_list,
    timestamp: Date.now(),
  };

  store.put(dataWithTimestamp);

  transaction.oncomplete = () => {};

  transaction.onerror = (event) => {
    console.error("Error saving user data:", event.target.error);
  };
};

export const updateUserData = async (userData) => {
  console.log("Saving Data to Indexed Database")
  const db = await openDatabase();
  const transaction = db.transaction("user", "readwrite");
  const store = transaction.objectStore("user");

  const request = store.get("currentUser"); // Replace with actual user ID or key

  request.onsuccess = async (event) => {

    const existingData = event.target.result;
    
    console.log("Existing Data: ", {
      ...existingData,
      timestamp: Date.now(),
    });
    console.log("Data to be Updated: ", {
      ...existingData,
      ...userData,
      timestamp: Date.now(),
    });
  
    // Add a timestamp
    const dataWithTimestamp = {
      ...existingData,
      ...userData,
      timestamp: Date.now(),
    };
  
    store.put(dataWithTimestamp);
  }
}
export const updateSocialsData = async (socialsData) => {
  console.log("Saving Data to Indexed Database")
  const db = await openDatabase();
  const transaction = db.transaction("user", "readwrite");
  const store = transaction.objectStore("user");

  const request = store.get("currentUser"); // Replace with actual user ID or key

  request.onsuccess = async (event) => {

    const existingData = event.target.result;
    const existingSocialsData = existingData.socials

    console.log("Data to be Updated: ", {
      ...existingSocialsData,
      ...socialsData,
      timestamp: Date.now(),
    });
    console.log("User Data After Update: ",{ ...existingData, socials:{
      ...existingSocialsData,
      ...socialsData,
      timestamp: Date.now(),
    }});
    // Add a timestamp
    const dataWithTimestamp = { ...existingData, socials:{
      ...existingSocialsData,
      ...socialsData,
      timestamp: Date.now(),
    },
    timestamp: Date.now(),}
  
    store.put(dataWithTimestamp);
  }
  transaction.oncomplete = () => {};

  transaction.onerror = (event) => {
    console.error("Error saving Socilas Data:", event.target.error);
  };
};

export const updateServices = async(servicesData) => {
  console.log("Saving Data to Indexed Database")
  const db = await openDatabase();
  const transaction = db.transaction("user", "readwrite");
  const store = transaction.objectStore("user");

  const request = store.get("currentUser"); // Replace with actual user ID or key

  request.onsuccess = async (event) => {

    const existingData = event.target.result;

    console.log("Services Data After Update: ",{ ...existingData, services_list: servicesData});  
    // Add a timestamp
    const dataWithTimestamp = { ...existingData, services_list: servicesData,
    timestamp: Date.now(),}
  
    store.put(dataWithTimestamp);
  }
  transaction.oncomplete = () => {};

  transaction.onerror = (event) => {
    console.error("Error saving Socilas Data:", event.target.error);
  };
}


export const updateStatsData = async (statsData) => {
  console.log("Saving Data to Indexed Database")
  const db = await openDatabase();
  const transaction = db.transaction("user", "readwrite");
  const store = transaction.objectStore("user");

  const request = store.get("currentUser"); // Replace with actual user ID or key

  request.onsuccess = async (event) => {

    const existingData = event.target.result;
    const existingStatsData = existingData.stats

    console.log("Stats Data After Update: ",{ ...existingData, stats:{
      ...existingStatsData,
      ...statsData,
      userId: "currentUser",
      timestamp: Date.now(),
    }});  
    // Add a timestamp
    const dataWithTimestamp = { ...existingData, stats: statsData,
    timestamp: Date.now(),}
  
    store.put(dataWithTimestamp);
  }
  transaction.oncomplete = () => {};

  transaction.onerror = (event) => {
    console.error("Error saving Socilas Data:", event.target.error);
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
        const { socials, stats, services_list, userId, id, timestamp, ...userData } = data;
        console.log("Socials Data from IndexedDB: ", socials ?? "Nothing");
        console.log("User Data from IndexedDB: ", userData ?? "Nothing" );
        console.log("Stats Data from IndexedDB: ", stats ?? "Nothing" );
        console.log("Services Data from IndexedDB: ", services_list ?? "Nothing" );
        dispatch(setUserData(userData));
        dispatch(setUserId(id))
        dispatch(setSocials(socials));
        dispatch(setStats(stats));
        dispatch(setServices(services_list))
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
