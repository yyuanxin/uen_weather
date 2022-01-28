import React from 'react';
import {
  Container,
  Col,
  Card,
  Row
} from "react-bootstrap";

export default function Home() {
  return (
    <Container className="px-4 py-5">
      <h2 className="pb-2 border-bottom">Services</h2>

      <Row className="row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <Col>
          <a href="/uen" className="text-decoration-none">
            <Card className="h-100 overflow-hidden text-white bg-dark rounded-5" >
              <div className="d-flex flex-column h-100 p-5 pb-3">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Check UEN Format</h2>
              </div>
            </Card>
          </a>
        </Col>

        <Col>
          <a href="/weather" className="text-decoration-none">
            <Card className="h-100 overflow-hidden text-white bg-dark rounded-5" >
              <div className="d-flex flex-column h-100 p-5 pb-3">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">2 - Hour Weather Forecast</h2>
              </div>
            </Card>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
