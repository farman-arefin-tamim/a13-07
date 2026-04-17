import { createBrowserRouter } from "react-router";
import Root from "../Root";
import NotFound from "../components/shared/NotFound/NotFound";
import FriendDetails from "../components/FriendDetails/FriendDetails";
import Timeline from "../components/Timeline/Timeline";
import Home from "../components/Home/Home";
import Stats from "../components/Stats/Stats";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/frienddetails/:id",
        element: <FriendDetails></FriendDetails>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>,
        errorElement: <NotFound></NotFound>,
      },{
        path: "/stats",
        element: <Stats></Stats>
      }
    ],
    errorElement: <NotFound></NotFound>,
  },
]);
