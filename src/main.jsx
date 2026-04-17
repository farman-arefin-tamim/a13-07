import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes";
import FriendProvider from "./components/context/FriendProvider";
import { Bounce, ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router}></RouterProvider>
    </FriendProvider>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  </StrictMode>,
);
