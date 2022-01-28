import React, { useEffect, useState } from 'react';
import { isValidUen } from './commons/UenUtils';
import {
  Button,
  Container,
  Form,
  Row,
  Col
} from "react-bootstrap";

export default function Uen () {
    const [input, setInput] = useState("");
    const [disabled, setDisabled] = useState(true);
    const submitInput = (e) => {
      var isValidFormat = isValidUen(input.toUpperCase());
      if (isValidFormat) {
        alert("UEN provided is in the correct format!");
      } else {
        alert("Incorrect format!");
      }
      e.preventDefault();

    }

    useEffect(() => {
      if (input === "") {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }, [input]);

    return (
        <Container>
          <div className="py-5 text-center">
            <h2>Unique entity number (UEN)</h2>
          </div>

          <Row className="justify-content-md-center">
            <Col xs={10} md={6}>
              <Form>
                <Form.Group className="mb-3" controlId="uenInput">
                  <Form.Label className="mb-3">Enter your UEN</Form.Label>
                  <Form.Control type="text" placeholder="Input here" value={input}
                                onChange={e => setInput(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" size="lg" className="w-100"
                  type="submit" onClick={submitInput} disabled={disabled} >Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
    )
}
