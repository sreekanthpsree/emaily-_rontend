import { connect } from "react-redux";
import React, { useEffect } from "react";
import { fetchSurveys } from "../../actions";

const SurveyList = (props) => {
  useEffect(() => {
    props.fetchSurveys();
    console.log(props.surveys);
  }, []);
  const renderList = () => {
    return props.surveys.reverse().map((survey) => {
      console.log(survey);
      return (
        <div className="card blue-grey darken-1" key={survey._id}>
          <div className="card-content white-text">
            <span className="card-title ">{survey.title}</span>
            <p className="white-text">{survey.body}</p>
            <p className="right white-text">
              Spent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  };
  return <div>{renderList()}</div>;
};

function mapStateToProps({ surveys }) {
  return { surveys };
}
export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
