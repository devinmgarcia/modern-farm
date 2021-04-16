const plants = []

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (const item of seed) {
            plants.push(item);
        }
    } else {
        plants.push(seed);
    }
}

export const usePlants = () => {
    return plants;
}