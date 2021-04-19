export const Catalog = (harvestedFoodArray) => {
    let htmlRep = ``;
    for (const food of harvestedFoodArray) {
        htmlRep += `<div class="food">${food.type}</div>`
    }
    return htmlRep;
}