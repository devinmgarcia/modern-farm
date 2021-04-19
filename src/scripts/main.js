console.log("Welcome to the main module")

// already defined by nss. creates an array of 3 arrays with 6 items each
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

// A randomized plan for planting which is an array of arrays.
const yearlyPlan = createPlan();

// This is taking the plantSeeds function in "tractor.js", which takes the yearlyPlan as an argument. Since the argument is an array of arrays, the plantSeeds function iterates through each row and column by using a nested "for" loop inside a "for of" loop. 
// Inside the nested loop there is a conditional "if else if" statement for each seed to check what seed is called and this will determine which block of code is run. For example, if the condition checks that the current plant is equal to "Asparagus", then the function will invoke another function called addPlant, which is being imported from "field.js".
// This addPlant function takes one argument that is a function that simply generates a single seed object, or in the case of corn, 2 seed objects. It must check if the argument being passed to it is an array to then iterate through the array to get both of the corn objects. The function takes every object and pushes it into an empty array called "plants".
// At the very end of the plantSeeds function, the whole "plant" array is returned by using the usePlants function.
const seedsCreated = plantSeeds(yearlyPlan);

// harvestedArray takes in the "plants" array that was just created and iterates through it. For each plant object in the iteration, the harvestPlants function will do an "if else" conditional statement. If the plant.type is equal to "Corn", then we push the run the object through a for loop that will push a corn object into an empty array that was created at the top of the function called "harvestedArray". The number of corn objects that are being pushed into this array is determined by the "output" of each object. Since we are selling half of the corn, the for loop created is equal to the corns output divided by half. That will ensure that if the output is 6, we end up with 3 corn objects in the "harvestedArray".
// If the food object is anything other than corn, another for loop is run, but instead of running it by the output divided by 2, it just runs the same amount of times as the "output" of each food object.
// The harvestedArray is then returned
const harvestedArray = harvestPlants(seedsCreated);

// Now that we have the full array of harvested foods stored in the variable "harvestedArray", we used that as an argument for the "Catalog" function.
// The Catalog function runs through each object in the array and concatenates a `<div class="food">${food.type}</div>` to an empty string and then returns the full string.
const catalogHTML = Catalog(harvestedArray);

// This javascript function takes the document and tells it to target the id of "foods" and to replace its HTML content to the string that was just created by Catalog.
document.getElementById('foods').innerHTML = catalogHTML;