import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Filter from '../Filter';
import * as actions from '../../actions';

let filterByQuestionCatergyOptions = [
  'All',
  'Street Lights',
  'Traffic',
  'Garbage Disposal'
];

const mapStateToProps = state => ({
  filters: state.filters.items,
  selectedFilter: state.app.selectedFilter,
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
    const { selectFilter } = this.props;

    return (
      <section className="filters">
        <Grid fluid>
          <Row className="">
            <Col md={6}>
              <h2>Filter by resident characteristics</h2>
              <Filter
                key="filter"
                items={filterItems}
                defaultItemSelected="All"
                placeholder="Filter by resident characteristics"
                onChange={selectFilter}
                itemToString={(i) => i.title ? i.title : i}
              />
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
