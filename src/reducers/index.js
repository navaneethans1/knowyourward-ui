import { combineReducers } from "redux";
import app from "./app";
import possibleParticipantAttributes from "./possibleParticipantAttributes";
import surveyAggregateResults from "./surveyAggregateResults";

export default combineReducers({
  app,
  possibleParticipantAttributes,
  surveyAggregateResults
});
