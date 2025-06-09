import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import ChooseSkip from "./pages/ChooseSkip";

const router = createBrowserRouter([{ path: "/", element: <ChooseSkip /> }]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
