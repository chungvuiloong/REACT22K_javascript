"use strict";

/**
Complete the function getProductDetails such that it returns an object with the following properties:

id: a number representing the id of the product.
title: a string representing the title of the product.
inStock: a boolean representing whether the product is in stock or not.
Give these properties any value you'd like, as long as it fits the expected return type.

**/

function getProductDetails(id, title) {
  const user = {
    id: id,
    title: title,
    inStock: false,
  };

  return user.id + " " + user.title + " " + user.inStock;
}

// Sample usage - do not modify
console.log(getProductDetails(1213, "MrJay", true)); // the object you define
