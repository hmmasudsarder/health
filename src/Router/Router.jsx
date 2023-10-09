import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Components/Root";
import Login from "../SharedComponents/Login/Login";
import Register from "../SharedComponents/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";
import Contact from "../Pages/Contact/Contact";



const Router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('/health.json')
            },
            {
                path: '/health/:id',
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch('/health.json')
            },
            {
                path: '/contact',
                element: <PrivateRoute><Contact></Contact></PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default Router;