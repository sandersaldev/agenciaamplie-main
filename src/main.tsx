import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login"
import Dashboard from "./Dashboard"

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
])

export function App() {
  return <RouterProvider router={router} />
}
