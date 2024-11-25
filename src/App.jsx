import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Catalog from "./components/catalog";
import Cards from "./components/cards";

export const root = createBrowserRouter([
    {
        path:'/',
        element:<Dashboard/>,
        children:[
            {
                path:"/",
                element:<Catalog/>,
                children:[
                    {
                        path:'/',
                        element:<Cards/>
                    }
                ]
            },
        ]
    }
]) ;
