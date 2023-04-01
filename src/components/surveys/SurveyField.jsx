import React from "react";

function SurveyField({ input, label, meta: { error, touched } }) {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      <div className="red-text" style={{ marginBottom: "5px" }}>
        {touched && error}
      </div>
    </div>
  );
}

export default SurveyField;
