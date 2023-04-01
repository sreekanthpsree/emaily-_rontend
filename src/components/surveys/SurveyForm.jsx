import React from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import emailValidater from "../../utils/emailValidater";
import formFields from "./formFields";

function SurveyForm(props) {
  const renderSurveyField = () => {
    return formFields.map((formFields) => {
      return (
        <Field
          key={formFields.name}
          label={formFields.label}
          type="text"
          name={formFields.name}
          component={SurveyField}
        />
      );
    });
  };

  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
        {renderSurveyField()}
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
}
function validate(values) {
  const errors = {};
  errors.recipientList = emailValidater(values.recipients || " ");
  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${name}`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
