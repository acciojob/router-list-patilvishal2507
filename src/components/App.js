import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import ItemList from "./ItemList";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ItemList} />
        <Route path="/item/:id" component={ItemDetail} />
      </Switch>
    </Router>
  );
};

export default App;
