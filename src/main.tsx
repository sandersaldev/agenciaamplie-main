import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/admin/Login"
import Dashboard from "./pages/admin/Dashboard"

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
])

export function App() {
  return <RouterProvider router={router} />
}
