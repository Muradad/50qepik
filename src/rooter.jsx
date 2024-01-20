import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import MainLayoth from "./Layouth/MainLayoth";
import Home from "./Layouth/pages/Home";
const router = createBrowserRouter([
    {
            path: "/",
            element: <MainLayoth />,
            children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "home",
                element: <Home />,
            },
        ],
    },
]);

export const MainRouterDoms = () => {
    return <RouterProvider router={router} />
}