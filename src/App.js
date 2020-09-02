import React from "react";
import GlobalStylesheet from "./styles/global"
import Home from "./pages/Home/Home.jsx"
import SearchPage from "./pages/Search/SearchPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search">
          <SearchPage />
        </Route>
      </Switch>
      <GlobalStylesheet />
    </Router>
  </>
)

export default App;
