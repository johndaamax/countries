import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import CountryList from "./CountryList";
import Search from "./search";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <CountryList apiSuffix="all" title="List of all countries" />
        </Route>
        <Route path="/allEU">
          <CountryList
            apiSuffix="regionalbloc/eu"
            title="List of EU countries"
          />
        </Route>
        <Route path="/search" component={Search} />
      </Switch>
    </Layout>
  );
};

export default App;
