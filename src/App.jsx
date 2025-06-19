import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Form from "./Components/Form";
import LandingPage from "./Components/LandingPage";
import { useSelector } from "react-redux";
import MainPage from "./Components/MainPage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <Form /> },
  {
    path: "/main",
    element: <MainPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
