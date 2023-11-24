import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";


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
                element: <h1>Dashboard</h1>,
            },
            {
                path: '/login',
                element: <h1>login</h1>,
            },
            {
                path: '/signup',
                element: <h1>signup</h1>,
            },
        ]
    }
])

export default router;