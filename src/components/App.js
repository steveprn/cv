import React from "react";
import Intro from "./Intro";
import Resume from "./Resume";
import { Route, HashRouter as Router, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
