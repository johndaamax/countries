import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
//route lazy loading
const CountryList = React.lazy(() => import("./containers/CountryList/CountryList"));
const Search = React.lazy(() => import("./containers/Search/Search"));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Layout>
  );
};

export default App;
