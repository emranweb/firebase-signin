import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./component/Home.js";
import Header from "./component/Header";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import { auth, createUserProfile } from "./firebase/firebase-utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = { user: [], currentUser: null };
  }

  unSuscribeFromAuth = null;

  componentDidMount() {
    this.unSuscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unSuscribeFromAuth();
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
