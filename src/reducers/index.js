import { combineReducers } from "redux";
import app from "./app";
import possibleParticipantAttributes from "./possibleParticipantAttributes";

export default combineReducers({
  app,
  possibleParticipantAttributes
});
