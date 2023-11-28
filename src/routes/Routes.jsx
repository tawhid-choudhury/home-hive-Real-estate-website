import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Allproperties from "../pages/AllProperties/Allproperties";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import CustomerHome from "../pages/Dashboard/customer/CustomerHome";
import DashboardLayout from "../layouts/DashboardLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h1>ErrorPage </h1>,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/all',
                element: <PrivateRoute><Allproperties /></PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: '/propertydetails/:id',
                element: <PrivateRoute><PropertyDetails /></PrivateRoute>,
                // loader: ({ params }) => getPropertyDetails(params.id),
            },
        ]
    }, {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: "/dashboard/",
                element: <CustomerHome />
            },
            {
                path: "/dashboard/wishlist",
                element: <h1>Wishlist</h1>
            },
            {
                path: "/dashboard/bought",
                element: <h1>properties bought</h1>
            },
            {
                path: "/dashboard/reviews",
                element: <h1>My reviews</h1>
            },

        ]
    },
])

export default router;