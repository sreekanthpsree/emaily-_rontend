import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import { connect } from "react-redux";
import * as actions from "../src/actions";
import Landing from "./components/Landing";
import ThankYouPage from "./components/Thankyou";
import Dashboard from "./components/Dashboard";
import SurveyNew from "./components/surveys/SurveyNew";

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
          <Route path="/surveys/new" component={SurveyNew}></Route>
          <Route path="/surveys/thanks" component={ThankYouPage}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default connect(null, actions)(App);
