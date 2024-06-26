import { useParams } from "react-router-dom";
import Header from "./Header";
import "./Restaurant.css";
import { getRestaurantData } from "../../assets/CityRouter";
import Property from "./Property";
import MapIframe from "./MapIframe";

function Restaurant() {
    const {cityId, restaurantId} = useParams();
    const restaurant = getRestaurantData(cityId, restaurantId);
    const filterOutNeighbourhood =
        restaurant.tags.filter((element) => element !== restaurant.neighbourhood);
    return (
        <>
            <Header heading={restaurant.name} />
            <Property keyName="address" value={restaurant.address} />
            <Property keyName="neighbourhood" value={restaurant.neighbourhood} />
            <Property keyName="value" value={restaurant.value} />
            <Property keyName="tags" value={filterOutNeighbourhood} />
            <Property keyName="review freshness" value={restaurant.dateOfReview} isText={true} />
            <Property keyName="notes" value={restaurant.notes} isText={true} isNotes={true} />
            <MapIframe name={restaurant.name} address={restaurant.address} />
        </>
    )
}

export default Restaurant;