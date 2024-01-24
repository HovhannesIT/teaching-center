import ReactDOM from "react-dom/client";

import "./main.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, UIKit, Support } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/ui-kit",
    element: <UIKit />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
