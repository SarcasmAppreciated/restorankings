import { seattle, seattleFilterCategories } from "./Seattle";
import { vancouver, vancouverFilterCategories } from "./Vancouver";

export function getCityNeighbourhoods(city, filterCategories) {
    switch(city) {
        case "seattle":
            return filterCategories.concat(seattleFilterCategories);
        case "vancouver":
            return filterCategories.concat(vancouverFilterCategories);
    }
}

export function getCityData(city) {
    switch(city) {
        case "seattle":
            return seattle;
        case "vancouver":
            return vancouver;
    }
}

export function getRestaurantData(restaurantId) {
    console.log(getAllCityData())
    return getAllCityData().filter((element) => element.id === restaurantId)[0];
}

function getAllCityData() {
     return seattle.concat(vancouver);
}

export const cities = ["seattle", "vancouver"];