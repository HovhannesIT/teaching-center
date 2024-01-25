import ReactDOM from "react-dom/client";

import "./main.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, UIKit, Support, Looking } from "./pages";
import { Professions } from "./pages/Professions";

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
    path: "/professions",
    element: <Professions />,
  },
  {
    path: "/looking",
    element: <Looking />,
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
