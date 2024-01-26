import ReactDOM from "react-dom/client";

import "./main.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, UIKit, Support, Looking, Invitations, Contracts } from "./pages";
import { Professions } from "./pages/Professions";
import { Login, Register } from "./pages/Auth";
import { InitializeAxiosInterceptors } from "./interceptors.axios";
import { ProfileSettings } from "./pages/ProfileSettings";

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
    path: "/invitations",
    element: <Invitations />,
  },
  {
    path: "/contracts",
    element: <Contracts />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/user/profile-settings",
    element: <ProfileSettings />,
  },
  {
    path: "/ui-kit",
    element: <UIKit />,
  }
]);

InitializeAxiosInterceptors();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
