import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout>Home Layout</HomeLayout>,
  },
  {
    path: "news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "auth",
    element: <h1>Login</h1>,
  },
  {
    path: "*",
    element: <h1>ERROR</h1>,
  },
]);

export default router;
