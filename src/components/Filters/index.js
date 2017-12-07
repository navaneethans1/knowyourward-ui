import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Filter from '../Filter';

let filterByResidentOptions = ['All', 'Ward', 'Sex'];

let filterByQuestionCatergyOptions = [
	'All',
	'Street Lights',
	'Traffic',
	'Garbage Disposal'
];

export default function() {
	return (
		<section className="filters">
			<Grid fluid>
				<Row className="">
					<Col md={6}>
						<h2>Filter by resident characteristics</h2>
						<Filter
							items={filterByResidentOptions}
							defaultItemSelected="All"
							placeholder="Filter by resident characteristics"
							onChange={e => console.log(e)}
						/>
					</Col>
					<Col md={6}>
						<h2>Filter by question category</h2>
						<Filter
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
