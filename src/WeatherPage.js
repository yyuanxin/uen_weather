import React, { useEffect, useState } from 'react';
import {
  Container,
  Form,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import { getTime } from "./commons/DateUtils";

export default function Weather () {
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState(-1);
    const [data, setData] = useState([]);

    useEffect(() => {
        (async() => {
          try {
            //get latest forecast - NOT WORKING AFTER 2021-12-30
            let api = 'https://api.data.gov.sg/v1/environment/2-hour-weather-forecast';
            // hard coded request that returns at least 1 data result
            let test = 'https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=2021-12-30T19:10:00&date=2021-12-30'
            const res = await fetch(test);
            const val = await res.json();
            setData(val.items);
            // allow user to interact AFTER data are done loading in
            setLoading(false);
          } catch (e) {
            console.error(e);
          }
        })();
    }, []);

    return (
        <Container className="vh-100 d-flex flex-column">
          <div className="py-5 text-center">
            <h2>Weather Forecast</h2>
          </div>

          <Row className="justify-content-md-center">
            <Col xs={10} md={8}>
              <Form className="px-5 mb-3">
                <Form.Group className="mb-3" controlId="uenInput">
                  <Form.Label className="mb-3">Location</Form.Label>
                  <Form.Select aria-label="Select area"
                              onChange={e => setInput(e.currentTarget.value)}
                              disabled={loading}
                  >
                    <option>Open this menu</option>
                    { (!loading && data.length > 0 && data[0].forecasts) &&
                      data[0].forecasts.map((area,idx) =>
                          <option key={area.area} value={idx}>{area.area}</option>
                      )
                    }
                  </Form.Select>
                </Form.Group>
              </Form>
            </Col>

            <Col xs={10} md={8} className="my-3">
              { (input > -1 && data.length > 0) && (
                <Card border="dark">
                  <Card.Header as="h2">{data[0].forecasts[input].area}</Card.Header>
                  <Card.Body>
                    <Card.Title>{data[0].forecasts[input].forecast}</Card.Title>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        From {getTime(data[0].valid_period.start)}
                      </ListGroupItem>
                      <ListGroupItem>
                        To {getTime(data[0].valid_period.end)}
                      </ListGroupItem>
                    </ListGroup>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    Last updated at {data[0].update_timestamp.split("+")[0].replace("T"," ")}
                  </Card.Footer>
                </Card>
              )}
            </Col>
          </Row>

        </Container>
    )
}
