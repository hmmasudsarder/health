import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Components/Root";
import Cart from "../Pages/Cart/Cart";
import Login from "../SharedComponents/Login/Login";
import Register from "../SharedComponents/Register/Register";



const Router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('/health.json')
            },
            {
                path: '/cart',
                element:<Cart></Cart>,
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