import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layouts/main/Main"
import Error from "../../../pages/Error/Error";
import Home from "../../../pages/home/Home";
import About from "../../../pages/About/About";
import Contact from "../../../pages/Contact/Contact";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/about',
                element:<About/>
            },
            {
                path: '/contact',
                element:<Contact/>
            }
        ]
    }
])