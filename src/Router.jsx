import {
    createBrowserRouter
} from "react-router-dom";
import Menu from "./components/Menu";
import Restaurant from "./components/restaurant/Restaurant";

const defaultRouter = createBrowserRouter([
    {
      path: "/restorankings/",
      element: <Menu />
    },
    {
      path: "/restorankings/restaurant/:restaurantId",
      element: <Restaurant />
    }
]);

export { defaultRouter as defaultRouter };