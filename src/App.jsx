import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Form from "./Components/Form";
import LandingPage from "./Components/LandingPage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <Form /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
