import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import { connect } from "react-redux";
import * as actions from "../src/actions";
import Landing from "./components/Landing";
const Dashboard = () => {
  return <h2>Dashboard</h2>;
};
const SurveryNew = () => {
  return <h2>SureveyNew</h2>;
};

function App(props) {
  useEffect(() => {
    props.fetchUser();
  }, []);
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard}></Route>
          <Route path="/surveys/new" component={SurveryNew}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default connect(null, actions)(App);
