import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Header from "../SharedComponents/Header/Header";


const Router = createBrowserRouter([
    {
        path: '/',
        element:<Home></Home>,
        children:[
            {
                path:'/',
                element:<Header></Header>
            }
        ]
    }
]);

export default Router;