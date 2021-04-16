console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"

const yearlyPlan = createPlan();
console.log(yearlyPlan)



// const asparagusSeed = createAsparagus();
// console.log(asparagusSeed);

// const cornSeed = createCorn;
// console.log(cornSeed);

// console.log(createSoybean);
// console.log(createSunflower);
// console.log(createWheat);
const cornSeed = createCorn();
addPlant(cornSeed);
const plantsArray = usePlants()
console.log(plantsArray)
    // console.log(plantSeeds(yearPlan));