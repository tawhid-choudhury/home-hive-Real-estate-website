import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Allproperties from "../pages/AllProperties/Allproperties";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import CustomerHome from "../pages/Dashboard/customer/CustomerHome";
import CustomerReviews from "../pages/Dashboard/customer/CustomerReviews";
import DashboardNav from "../pages/Dashboard/DashBoardNav";
import CustomerWishlist from "../pages/Dashboard/customer/CustomerWishlist";
import MakeOffer from "../pages/Dashboard/customer/MakeOffer";


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
        element: <PrivateRoute><DashboardNav /></PrivateRoute>,
        children: [
            {
                path: "profile",
                element: <CustomerHome />
            },
            {
                path: "/dashboard/wishlist",
                element: <CustomerWishlist />
            },
            {
                path: "/dashboard/makeOffer/:id",
                element: <MakeOffer />
            },
            {
                path: "/dashboard/bought",
                element: <h1>properties bought</h1>
            },
            {
                path: "/dashboard/reviews",
                element: <CustomerReviews />
            },

        ]
    },
])

export default router;