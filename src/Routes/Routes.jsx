import { createBrowserRouter } from "react-router";
import Root from "../Root";
import NotFound from "../components/shared/NotFound/NotFound";


export const router = createBrowserRouter([{
    path: "/",
    Component: Root,
    children:[
        {
            index: true,
            element: <Root></Root>
        }
    ],
    errorElement:<NotFound></NotFound>
    },
    
    

]);