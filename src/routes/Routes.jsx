import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h1>ErrorPage </h1>,
        children: [
            {
                path: '/',
                element: <h1>home</h1>,
            },
            {
                path: '/all',
                element: <h1>all properties</h1>,
            },
            {
                path: '/dashboard',
                element: <h1>Dashboard</h1>,
            },
        ]
    }
])

export default router;