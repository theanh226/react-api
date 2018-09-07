import React from "react";
import HomePage from "./pages/Homepage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />
  }
];

export default routes;
