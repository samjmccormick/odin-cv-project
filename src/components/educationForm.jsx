import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

function EducationForm({
  school,
  dates,
  degree,
  infoList,
  changeSchool,
  changeDates,
  changeDegree,
  changeInfo,
  onSubmit,
  clickRemove,
  clickAdd,
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
        <Row className="w-50">
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

        {infoList.map((singleInfo, index) => (
          <>
            <Row key={index} className="ms-3">
              <Col>
                <InputGroup className="mb-2">
                  <InputGroupText id="basic-addon1">•</InputGroupText>
                  <Form.Control
                    type="text"
                    placeholder="Describe skills learned through your education"
                    value={singleInfo.bullet}
                    onChange={changeInfo}
                  />
                </InputGroup>
              </Col>
              {infoList.length !== 1 && (
                <Col>
                  <Button variant="danger" type="button" onClick={clickRemove}>
                    Remove
                  </Button>
                </Col>
              )}
            </Row>
            {infoList.length - 1 === index && (
              <div className="mb-2 ms-4">
                <Button variant="secondary" type="button" onClick={clickAdd}>
                  Add Info
                </Button>
              </div>
            )}
          </>
        ))}

        <Button variant="primary" type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default EducationForm;
