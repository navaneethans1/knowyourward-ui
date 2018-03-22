import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-flexbox-grid";
import Filter from "../Filter";
import * as actions from "../../actions";
import find from "lodash.find";

import { REQUEST_POSSIBLE_PARTICIPANT_ATTRIBUTES } from "../../actions";

let filterByQuestionCatergyOptions = [
  "All",
  "Street Lights",
  "Traffic",
  "Garbage Disposal"
];

const findAttributeOptionsForAttributeType = state => {
  const currentPartcipantAtributeTypeID =
    state.app.currentPartcipantAtributeTypeID;

  if (currentPartcipantAtributeTypeID) {
    const participantAttribute = find(
      state.possibleParticipantAttributes.items,
      {
        id: state.app.currentPartcipantAtributeTypeID
      }
    );

    return participantAttribute.options;
  } else {
    return [];
  }
};

const mapStateToProps = state => ({
  currentPartcipantAtributeTypeID: state.app.currentPartcipantAtributeTypeID,
  currentParticipantAttributeID: state.app.currentParticipantAttributeID,
  shouldParticipantAttributeBeEnabled: !state.app
    .currentPartcipantAtributeTypeID,
  participantAttributeTypeOptions: state.possibleParticipantAttributes.items,
  participantAtrributeOptions: findAttributeOptionsForAttributeType(state)
});

const mapDispatchToProps = dispatch => {
  return {
    fetchFilters() {
      dispatch({
        type: REQUEST_POSSIBLE_PARTICIPANT_ATTRIBUTES
      });
    },

    selectParticipantAttributeType(selectedParticipantAttributeType) {
      dispatch(
        actions.selectParticipantAttributeType(
          selectedParticipantAttributeType.id
        )
      );
    },

    selectParticipantAttribute(selectedParticipantAttribute) {
      dispatch(
        actions.selectParticipantAttribute(selectedParticipantAttribute.id)
      );
    }
  };
};

class Filters extends Component {
  constructor(props) {
    super(props);

    props.fetchFilters();
  }

  render() {
    const {
      currentPartcipantAtributeTypeID,
      currentParticipantAttributeID,
      participantAttributeTypeOptions,
      participantAtrributeOptions,
      shouldParticipantAttributeBeEnabled,
      selectParticipantAttributeType,
      selectParticipantAttribute
    } = this.props;

    return (
      <section className="filters">
        <Grid fluid>
          <Row className="">
            <Col md={6}>
              <h2>Filter by resident characteristics</h2>
              <Row>
                <Col md={6}>
                  <Filter
                    key="participantAttributeType"
                    selectedItemID={currentPartcipantAtributeTypeID}
                    items={participantAttributeTypeOptions}
                    placeholder="Filter by resident characteristics"
                    onChange={selectParticipantAttributeType}
                    itemToString={i => (i ? i.title : "")}
                  />
                </Col>
                <Col md={6}>
                  <Filter
                    key="participantAtrribute"
                    selectedItemID={currentParticipantAttributeID}
                    items={participantAtrributeOptions}
                    disabled={shouldParticipantAttributeBeEnabled}
                    placeholder="Filter by resident characteristics"
                    onChange={selectParticipantAttribute}
                    itemToString={i => (i ? i.title : "")}
                  />
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <h2>Filter by question category</h2>
              <Filter
                key="category"
                selectedItemID={null}
                items={filterByQuestionCatergyOptions}
                placeholder="Filter by question category"
                onChange={e => console.log(e)}
                itemToString={i => (i ? i : "")}
              />
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
