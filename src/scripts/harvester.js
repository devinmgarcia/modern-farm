export const harvestPlants = (plantsArray) => {
    const harvestedArray = []
    for (const plant of plantsArray) {
        if (plant.type === "Corn") {
            for (let i = 0; i < plant.output / 2; i++) {
                harvestedArray.push(plant);
            }
        } else {
            for (let i = 0; i < plant.output; i++) {
                harvestedArray.push(plant);
            }
        }
    }
    return harvestedArray;
}

// need to add corn 1/2 section