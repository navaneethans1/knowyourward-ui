import React from 'react';
import { Card } from '@blueprintjs/core';
import { Grid, Row, Col } from 'react-flexbox-grid';

import BarChart from '../BarChart';

export default function() {
	return (
		<Card className="question-card" elevation={Card.ELEVATION_ONE}>
			<Grid fluid>
				<Row>
					<Col className="question-title" md={3}>
						<h2>Are all street lights in working condition?</h2>
					</Col>
					<Col className="question-graph" md={9}>
						<BarChart />
					</Col>
				</Row>
			</Grid>
		</Card>
	);
}
