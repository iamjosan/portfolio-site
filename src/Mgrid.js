import React from "react";
import { Card, CardTitle, Row, Col } from "react-materialize";

class Mgrid extends React.Component {
  render() {
    const oneCol = (
      <Col s={4}>
        <Card
          className="small"
          header={<CardTitle image="/yosemite.jpg" reveal />}
          reveal={<p>This is hidden text</p>}
        >
          This is my card
        </Card>
      </Col>
    );
    const allCols = [1, 1, 1].map(num => oneCol);
    console.log({ allCols });
    return (
      <div className="container">
        <Row>{allCols}</Row>
      </div>
    );
  }
}
