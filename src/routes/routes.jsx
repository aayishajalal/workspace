import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";

// Lazy loading Home component
const Home = lazy(() => import("../pages/Home"));

const appRouter = createBrowserRouter([
  {
    path: "/", // Base route
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <AppLayout />
      </Suspense>
    ),

    children: [
      {
        path: "/", // Home page route
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);

export default appRouter;
