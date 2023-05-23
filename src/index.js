// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// // import App from "./App";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Home from "./pages/Home";
// import App from "./App";
// import PlayerDetails from "./components/team/PlayerDetails";
// import Team from "./components/team/Team";
// import ErrorPage from "./pages/ErrorPage";

// const router = createBrowserRouter([
//   {
//     path: "/udr",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/udr",
//         element: <App />,
//       },
//       {
//         path: "/udr",
//         element: <Team />,
//       },
//       {
//         path: "/udr/:number",
//         element: <PlayerDetails />,
//       },
//       {
//         path: "*",
//         element: <ErrorPage />,
//       },
//     ],
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import App from "./App";
import PlayerDetails from "./components/team/PlayerDetails";
import Team from "./components/team/Team";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/udr" element={<Home />}>
      <Route index path="/udr" element={<App />} />
      <Route path="/udr" element={<Team />} />
      <Route path="/udr/:number" element={<PlayerDetails />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
