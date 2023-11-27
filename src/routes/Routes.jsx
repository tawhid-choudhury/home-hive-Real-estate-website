import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";


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
                element: <h1>all properties</h1>,
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><h1>Dashboard</h1></PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
        ]
    }
])

export default router;