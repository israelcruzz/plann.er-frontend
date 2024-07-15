import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    // element:
  },
  {
    path: "/trips/:tripId",
    // element:
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
