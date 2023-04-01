import React, { useState } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

function SurveyNew() {
  const [showFormReview, setShowReviewForm] = useState(false);
  return (
    <div>
      {!showFormReview ? (
        <SurveyForm
          onSurveySubmit={() => {
            setShowReviewForm(true);
          }}
        />
      ) : (
        <SurveyFormReview
          onCancel={() => {
            setShowReviewForm(false);
          }}
        />
      )}
    </div>
  );
}

export default reduxForm({ form: "surveyForm" })(SurveyNew);
