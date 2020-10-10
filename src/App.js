import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./component/Home.js";
import Header from "./component/Header";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";

class App extends React.Component {
  constructor() {
    super();
    this.state = { user: [] };
  }

  getUserData = (value) => {
    this.setState({ user: [value] });
  };

  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/signin"
            render={() => <SignIn userData={this.getUserData} />}
          />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
