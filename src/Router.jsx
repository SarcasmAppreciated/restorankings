import {
    createHashRouter
} from "react-router-dom";
import Menu from "./components/Menu";
import Restaurant from "./components/restaurant/Restaurant";

const defaultRouter = createHashRouter([
    {
        path: "/",
        element: <Menu />
    },
    {
        path: "/city/:cityId/restaurant/:restaurantId",
        element: <Restaurant />
    }
]);

export { defaultRouter as defaultRouter };