import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/presentation/layout/MainLayout";
import HomePage from "@/presentation/pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  }
]);
