import React from 'react';
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
			<Filter
				items={filterByResidentOptions}
				defaultItemSelected="All"
				placeholder="Filter by resident characteristics"
				onChange={e => console.log(e)}
			/>
			<Filter
				items={filterByQuestionCatergyOptions}
				defaultItemSelected="All"
				placeholder="Filter by question category"
				onChange={e => console.log(e)}
			/>
		</section>
	);
}
