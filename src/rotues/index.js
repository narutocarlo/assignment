import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Job from "../pages/job";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "job",
    element: <Job />,
  },
]);

export default router;
