import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Switch, Route} from "react-router-dom";
import Home from "./component/Home.js";
import Header from "./component/Header.js";

function App() {
  return (
   <div className="main-wrapper">
     <Header />
    <Switch>
      <Route  path="/" exact component={Home}/>
      {/* <Route path="/signin" component={SingnIn} />
      <Route path="/signup" component={SignUp} /> */}
    </Switch>

   </div>
  );
}

export default App;