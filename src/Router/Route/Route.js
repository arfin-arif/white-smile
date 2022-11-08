import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import ServiceDetailsPage from "../../Pages/ServiceDetailsPage/ServiceDetailsPage";
import Services from "../../Pages/Services/Services";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/all-services')
            },
            {
                path: '/services/:id',
                element: <ServiceDetailsPage></ServiceDetailsPage>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]

    },
    {
        path: '*',
        element: <div > <h3 className="text-3xl text-center mt-10">This LInk is Not Working!</h3></div>
    }
]);

export default router;