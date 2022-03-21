import React from "react";

import { Route, Routes as Switch } from "react-router-dom";

import Home from "../pages/Home";
import Test from "../pages/Test";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Switch>
  );
};

export default Routes;
