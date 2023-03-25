import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Stripewrapper from "./Stripewrapper";

function Header(props) {
  const userLoggedinStaus = () => {
    switch (props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Stripewrapper />
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits: {props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  };
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to={props.auth ? "/surveys" : "/"} className="brand-logo">
            Emaily
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {userLoggedinStaus()}
          </ul>
        </div>
      </nav>
    </div>
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
