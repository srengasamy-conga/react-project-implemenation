import React from "react";
import { Router } from "@reach/router";

// Import all the pages
import Grid from "./components/Grid/Grid";
import Catalog from "./components/Catalog/Catalog";

const AppRouter = () => {
  return (
    <Router>
      <Grid path="/grid" />
      <Catalog path="/catalog" default />
    </Router>
  );
};

export default AppRouter;
