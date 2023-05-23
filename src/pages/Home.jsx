import React from "react";
import Header from "../components/header/Header";

import { Outlet, ScrollRestoration } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollRestoration
        getKey={(location) => {
          return location.key;
        }}
      />
    </>
  );
}

export default Home;
