import React from "react";
import { Card } from "@blueprintjs/core";
import { Grid, Row, Col } from "react-flexbox-grid";

import BarChart from "../BarChart";

export default function Question(props) {
  const { text_question, responses, question: { question_id } } = props;

  let dataForBarChart = [];

  for (let response in responses) {
    if (responses.hasOwnProperty(response)) {
      dataForBarChart.push({
        x: response,
        y: responses[response]
      });
    }
  }

  return (
    <Card className="question-card" elevation={Card.ELEVATION_ONE}>
      <Grid fluid>
        <Row>
          <Col className="question-title" md={3}>
            <h2>{text_question}</h2>
          </Col>
          <Col className="question-graph" md={9}>
            <BarChart id={question_id} data={dataForBarChart} />
          </Col>
        </Row>
      </Grid>
    </Card>
  );
}

Question.displayName = "Question";
