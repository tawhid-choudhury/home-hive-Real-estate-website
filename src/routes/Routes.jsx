import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import Allproperties from "../pages/AllProperties/Allproperties";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import { getPropertyDetails } from "../api/propertyDetailAPI";


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
                element: <Allproperties />,
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
                element: <PropertyDetails />,
                loader: ({ params }) => getPropertyDetails(params.id),
            },
        ]
    }, {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
    },
])

export default router;