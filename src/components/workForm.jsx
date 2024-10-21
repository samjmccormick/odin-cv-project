import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

function WorkForm({
  title,
  dates,
  company,
  infoList,
  changeTitle,
  changeDates,
  changeCompany,
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
            <Form.Group className="mb-3" controlId="formGroupTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your job title"
                value={title}
                onChange={changeTitle}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupDate">
              <Form.Label>Dates Employed</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the dates you were employed"
                value={dates}
                onChange={changeDates}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="w-50">
          <Col>
            <Form.Group className="mb-3" controlId="formGroupScoolCompany">
              <Form.Label>Employer</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your employer"
                value={company}
                onChange={changeCompany}
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
                    name="bullet"
                    type="text"
                    placeholder="Describe your job duties"
                    value={singleInfo.bullet}
                    onChange={(e) => changeInfo(e, index)}
                  />
                </InputGroup>
              </Col>
              {infoList.length !== 1 && (
                <Col xs={2}>
                  <Button
                    variant="danger"
                    type="button"
                    onClick={() => clickRemove(index)}
                  >
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

export default WorkForm;
