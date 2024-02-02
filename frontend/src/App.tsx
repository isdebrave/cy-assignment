import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Remove from "./pages/Remove";
import Play from "./pages/Play";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> },
      { path: "/remove", element: <Remove /> },
      { path: "/play", element: <Play /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
