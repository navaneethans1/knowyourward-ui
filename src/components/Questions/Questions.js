import React, { Component } from "react";
import { connect } from "react-redux";

import Question from "../Question";
import { REQUEST_SURVEY_AGGREGATE_RESULTS } from "../../actions/questions";

const mapStateToProps = ({ surveyAggregateResults }) => ({
  surveyAggregateResults: surveyAggregateResults.results
});

const mapDispatchToProps = dispatch => {
  return {
    fetchSurveyQuestionsWithAggregatedResults() {
      dispatch({
        type: REQUEST_SURVEY_AGGREGATE_RESULTS
      });
    }
  };
};

class Questions extends Component {
  constructor(options) {
    super(options);

    this.props.fetchSurveyQuestionsWithAggregatedResults();
  }

  render() {
    return (
      <div>
        {this.props.surveyAggregateResults.map(surveyQuestion => {
          return (
            <Question
              key={surveyQuestion.question.question_id}
              {...surveyQuestion}
            />
          );
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
