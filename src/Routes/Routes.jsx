import { createBrowserRouter } from "react-router";
import Root from "../Root";
import NotFound from "../components/shared/NotFound/NotFound";


export const router = createBrowserRouter([{
    path: "/",
    Component: Root,
    children:[]
    },
    
    

]);