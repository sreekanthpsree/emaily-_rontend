import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";

function SurveyFormReview(props) {
  const reviewFields = formFields.map(({ label, name }) => {
    return (
      <div key={label}>
        <div>
          <label>{label}</label>
          <p>{props.formValues[name]}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>Pleas confirm your entries</h5>
      {reviewFields}

      <button
        className="yellow darken-3 btn-flat white-text"
        onClick={props.onCancel}
      >
        Back
      </button>
      <button
        className="green btn-flat right white-text"
        onClick={() => {
          props.submitSurvey(props.formValues, props.history);
        }}
      >
        Send Survey
        <i className="material-icons right ">email</i>
      </button>
    </div>
  );
}
function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
