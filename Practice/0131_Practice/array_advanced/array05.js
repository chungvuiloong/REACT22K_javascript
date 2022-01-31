"use strict";

/**
Complete the function removeSecondApp
- removes the second element from the apps array it receives 
- returns the new array (which should not contain the item that was removed).

/**
 * @param {array} apps
 */
removeSecondApp = (apps) => {
  apps.splice(1, 1);
  return apps;
};

// Sample usage
const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"];
console.log(removeSecondApp(apps)); // ["Calculator", "Chrome", "Firefox"]
