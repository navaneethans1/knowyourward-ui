import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Filter from '../Filter';

let filterByResidentOptions = ['All', 'Ward', 'Sex'];

let filterByQuestionCatergyOptions = [
  'All',
  'Street Lights',
  'Traffic',
  'Garbage Disposal'
];

const mapStateToProps = state => ({
  filters: state.filters.items
});

const mapDispatchToProps = dispatch => {
  return {
    fetchFilters() {
      dispatch({
        type: 'FETCH_FILTERS_REQUESTED'
      });
    }
  };
};

class Filters extends Component {
  constructor(props) {
    super(props);

    props.fetchFilters();
  }

  render() {
    const filterItems = this.props.filters.map(f => f.title);
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
                onChange={e => console.log(e)}
              />
            </Col>
            <Col md={6}>
              <h2>Filter by question category</h2>
              <Filter
                key="category"
                items={filterByQuestionCatergyOptions}
                defaultItemSelected="All"
                placeholder="Filter by question category"
                onChange={e => console.log(e)}
              />
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
