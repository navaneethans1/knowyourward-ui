const SELECT_PARTICIPANT_ATTRIBUTE_TYPE = "SELECT_PARTICIPANT_ATTRIBUTE_TYPE";
const SELECT_PARTICIPANT_ATTRIBUTE = "SELECT_PARTICIPANT_ATTRIBUTE";

const selectParticipantAttributeType = attributeTypeID => ({
  type: SELECT_PARTICIPANT_ATTRIBUTE_TYPE,
  attributeTypeID
});

const selectParticipantAttribute = attributeID => ({
  type: SELECT_PARTICIPANT_ATTRIBUTE,
  attributeID
});

export {
  SELECT_PARTICIPANT_ATTRIBUTE_TYPE,
  SELECT_PARTICIPANT_ATTRIBUTE,
  selectParticipantAttributeType,
  selectParticipantAttribute
};
