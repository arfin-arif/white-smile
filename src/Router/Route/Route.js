import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/',
                element: <Home></Home>,
            },
        ]

    },
    {
        path: '*',
        element: <div > <h3 className="text-3xl text-center mt-10">This LInk is Not Working!</h3></div>
    }
]);

export default router;