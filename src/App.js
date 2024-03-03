import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// components
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/work",
          element: <Work />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
