"use strict";

class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(endpoint) {
    return fetch(this.baseURL + endpoint).then((response) => response.json());
  }
}

/*
Complete the checkForNewNotifications function such that it makes a fetch request to https://programmingjs-90a13-default-rtdb.europe-west1.firebasedatabase.app/notifications.json  
and return its result. Also, visualize that the result of fetch is a Promise. You should see Promise in the console.
*/

const API = new FetchWrapper(
  "https://programmingjs-90a13-default-rtdb.europe-west1.firebasedatabase.app/"
);

const getChapters = () => {
  // TODO

  API.get("chapters.json").then((data) => {
    console.log(data);

    const filteredData = data.filter((chapters) => chapters.isCompleted);

    console.log(filteredData);
    displayCompletedChapters(filteredData);
  });
};

// do NOT modify this function
function displayCompletedChapters(chapters) {
  console.log("Received", chapters);
}

// Sample usage - do not modify
getChapters();
