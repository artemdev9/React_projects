import React from "react";
import Navigation from "../navigation";
import { Outlet } from "react-router-dom";
// import Outlet

const Root = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      {/* The Outlet defines where the child in the routing parent element should be rendered. In this case we are rendering the child - HomePage component under the Navigation component. If you switch the Navigation component and Outlet component the Homepage component content will get rendered on top of the Navigation component. */}
    </>
  );
};

export default Root;
