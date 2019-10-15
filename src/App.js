import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import CountryList from "./containers/CountryList/CountryList";
import Search from "./containers/Search/Search";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <CountryList apiSuffix="all" title="List of all countries" />
        </Route>
        <Route path="/allEU">
          <CountryList apiSuffix="regionalbloc/eu" title="List of EU countries" />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
