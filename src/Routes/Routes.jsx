import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import { Root } from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [{ index: true, Component: Home }],
  },
]);
