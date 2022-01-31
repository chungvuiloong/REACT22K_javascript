"use strict";

/**
Complete the function removeSecondApp
- removes the second element from the apps array it receives 
- returns the new array (which should not contain the item that was removed).

/**
 * @param {array} apps
 */
removeFirstApp = (apps) => apps.slice(1, 5);

// Sample usage - do not modify
const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"];
console.log(removeFirstApp(apps)); // ["Whatsapp", "Chrome", "Firefox"]
