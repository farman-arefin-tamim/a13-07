import { createBrowserRouter } from "react-router";
import Root from "../Root";
import NotFound from "../components/shared/NotFound/NotFound";
import FriendDetails from "../components/FriendDetails/FriendDetails";


export const router = createBrowserRouter([
    {
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
    {
        path:"/frienddetails/:id",
        element:<FriendDetails></FriendDetails>,
        loader: ()=> fetch('/data.json'),
    }
    

]);