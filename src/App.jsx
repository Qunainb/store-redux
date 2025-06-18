import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Form from "./Components/Form";
import LandingPage from "./Components/LandingPage";
import { useSelector } from "react-redux";
import MainPage from "./Components/MainPage";

function ProtectedRoute({ children }) {
  const isAuth = useSelector((state) => state.isAuthenticated);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <Form /> },
  {
    path: "/main",
    element: (
      <ProtectedRoute>
        <MainPage />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
