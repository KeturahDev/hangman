import React from "react";
// import { v4 } from 'uuid';
import PropTypes from "prop-types";

function GoalForm(props){
  const formStyle = {
    border: "2px solid yellow"
  }

  // function handleGoalFormSubmission(event) {
  //   event.preventDefault();
  //   props.onGoalSubmit({goalWord: event.target.goalWord.value, id: event.target.letter.value});
  // }

  return (
    <React.Fragment>
    <div style={formStyle}>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='goalWord'
          placeholder='Enter your word' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </div>
    </React.Fragment>
  );
}

GoalForm.propTypes = {
  // formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default GoalForm;