import React from "react";
import { Container, Row, Col } from "src/utils/grid/Grid";

// import PropTypes from "prop-types";

const App = (props) => {
  return (
    <div>
      <Container margin="20px auto">
        <Row>
          <Col size="2-4">asdasdasd</Col>
          <Col size="2-4">asdasdasd</Col>
        </Row>
        <Row>
          <Col size="2-4">11111111111</Col>
          <Col size="2-4">2222222222</Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col size="1-4">asdasdasd</Col>
          <Col size="1-4">asdasdasd</Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col size="2-4">asdasdasd</Col>
          <Col size="2-4">asdasdasd</Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
