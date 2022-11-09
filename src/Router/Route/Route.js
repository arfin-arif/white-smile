import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Register from "../../Pages/Register/Register";
import Reviews from "../../Pages/Reviews/Reviews";
import ServiceDetailsPage from "../../Pages/ServiceDetailsPage/ServiceDetailsPage";
import Services from "../../Pages/Services/Services";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/reviews/:id',
                element: <PrivateRoutes><Reviews /></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/reviews/my-reviews',
                element: <PrivateRoutes><MyReviews /></PrivateRoutes>
            },
            {
                path: '/services/add',
                element: <AddService></AddService>
            },
        ]

    },
    {
        path: '*',
        element: <div > <h3 className="text-3xl text-center mt-10">This LInk is Not Working!</h3></div>
    }
]);

export default router;