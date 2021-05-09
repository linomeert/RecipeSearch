import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import RecipeDetail from "./RecipeDetail";

const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/recipes/:recipeId" component={RecipeDetail} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
