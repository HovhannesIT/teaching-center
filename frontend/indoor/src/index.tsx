import ReactDOM from "react-dom/client";

import "./main.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, UIKit } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/UIKit",
    element: <UIKit />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
