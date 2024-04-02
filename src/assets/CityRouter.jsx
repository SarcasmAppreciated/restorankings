import { bbt, bbtFilterCategories } from "./BBT";
import { seattle, seattleFilterCategories } from "./Seattle";
import { vancouver, vancouverFilterCategories } from "./Vancouver";

export function getCityNeighbourhoods(city, filterCategories) {
    switch(city) {
        case "seattle":
            return filterCategories.concat(seattleFilterCategories);
        case "vancouver":
            return filterCategories.concat(vancouverFilterCategories);
        case "bbt":
            return filterCategories.concat(bbtFilterCategories);
    }
}

export function getCityData(city) {
    switch(city) {
        case "seattle":
            return seattle;
        case "vancouver":
            return vancouver;
        case "bbt":
            return bbt;
    }
}

export function getRestaurantData(city, restaurantId) {
    return getCityData(city).filter((element) => element.id === restaurantId)[0];
}

export const cities = ["seattle", "vancouver", "bbt"];