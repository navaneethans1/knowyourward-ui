import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Filter from '../Filter';
import * as actions from '../../actions';
import find from 'lodash.find';

let filterByQuestionCatergyOptions = [
  'All',
  'Street Lights',
  'Traffic',
  'Garbage Disposal'
];

const mapStateToProps = state => ({
  filters: state.filters.items,
  selectedFilter: state.app.selectedFilter,
  optionsForSelectedFilter: state.app.selectedFilter && find(
    state.filters.items,
    {id: state.app.selectedFilter}
  ).options
});

const mapDispatchToProps = dispatch => {
  return {
    fetchFilters() {
      dispatch({
        type: 'FETCH_FILTERS_REQUESTED'
      });
    },

    selectFilter(selectedFilter) {
      dispatch(actions.selectFilter(selectedFilter.id));
    }
  };
};

class Filters extends Component {
  constructor(props) {
    super(props);

    props.fetchFilters();
  }

  render() {
    const filterItems = this.props.filters;
    const filterOptionItems = this.props.optionsForSelectedFilter;
    const { selectFilter } = this.props;

    return (
      <section className="filters">
        <Grid fluid>
          <Row className="">
            <Col md={6}>
              <h2>Filter by resident characteristics</h2>
              <Row>
                <Col md={6}>
                  <Filter
                    key="filter"
                    items={filterItems}
                    placeholder="Filter by resident characteristics"
                    onChange={selectFilter}
                    itemToString={(i) => i ? i.title : ''}
                  />
                </Col>
                <Col md={6}>
                  <Filter
                    key="filterOption"
                    items={filterOptionItems}
                    placeholder="Filter by resident characteristics"
                    itemToString={(i) => i ? i.title : ''}
                  />
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <h2>Filter by question category</h2>
              <Filter
                key="category"
                items={filterByQuestionCatergyOptions}
                placeholder="Filter by question category"
                onChange={e => console.log(e)}
                itemToString={(i) => i ? i : ''}
              />
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
