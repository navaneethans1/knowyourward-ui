import {
  SELECT_PARTICIPANT_ATTRIBUTE_TYPE,
  SELECT_PARTICIPANT_ATTRIBUTE,
  RESET_PARTICIPANT_ATTRIBUTE_TYPE
} from "../actions";

export default function(
  state = {
    currentPartcipantAtributeTypeID: null,
    currentParticipantAttributeID: null
  },
  action
) {
  switch (action.type) {
    case RESET_PARTICIPANT_ATTRIBUTE_TYPE:
      return {
        ...state,
        currentParticipantAttributeID: null
      };
    case SELECT_PARTICIPANT_ATTRIBUTE_TYPE:
      return {
        ...state,
        currentPartcipantAtributeTypeID: action.attributeTypeID
      };
    case SELECT_PARTICIPANT_ATTRIBUTE:
      return { ...state, currentParticipantAttributeID: action.attributeID };
    default:
      return state;
  }
}
