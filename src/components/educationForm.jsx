import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function EducationForm({
  school,
  dates,
  degree,
  info,
  changeSchool,
  changeDates,
  changeDegree,
  onSubmit,
}) {
  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupSchool">
              <Form.Label>University or College</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your undergraduate institution"
                value={school}
                onChange={changeSchool}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formSchoolGraduationDate">
              <Form.Label>Graduation Year</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your graduation year"
                value={dates}
                onChange={changeDates}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formScoolDegree">
              <Form.Label>Degree</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your degree"
                value={degree}
                onChange={changeDegree}
              />
            </Form.Group>
          </Col>
        </Row>

        {info.map((info, index) => (
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formScoolDegree">
                <Form.Label>Degree</Form.Label>
                <Form.Control
                  type="text"
                  key={index}
                  placeholder="Enter your degree"
                  value={degree}
                  onChange={changeDegree}
                />
              </Form.Group>
            </Col>
          </Row>
        ))}

        <Button variant="primary" type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default EducationForm;
