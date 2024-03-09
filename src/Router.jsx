import {
    createBrowserRouter
} from "react-router-dom";
import Menu from "./components/Menu";

const defaultRouter = createBrowserRouter([
    {
      path: "/",
      element: <Menu />,
    },
]);

export { defaultRouter as defaultRouter };