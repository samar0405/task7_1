import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Login from "../components/login/login";
import Tasks from "../components/tasks/tasks";
import Main from "../components/main/main";
import Products from "../components/products/products";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Login />} />
        <Route path="main" element={<Main />}>
          <Route index element={<Tasks />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Index;
