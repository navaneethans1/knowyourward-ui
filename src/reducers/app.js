import { SELECT_PARTICIPANT_ATTRIBUTE_TYPE, SELECT_PARTICIPANT_ATTRIBUTE } from "../actions";

export default function(
  state = {
    currentPartcipantAtributeTypeID: null,
    currentParticipantAttributeID: {}
  },
  action
) {
  switch (action.type) {
    case SELECT_PARTICIPANT_ATTRIBUTE_TYPE:
      return { ...state, currentPartcipantAtributeTypeID: action.attributeTypeID };
    case SELECT_PARTICIPANT_ATTRIBUTE:
      return { ...state, currentParticipantAttributeID: action.attributeID };
    default:
      return state;
  }
}
