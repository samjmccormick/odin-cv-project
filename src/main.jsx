import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Col, Row } from "react-bootstrap";
import GeneralCombined from "./components/generalcombined";
import EducationCombined from "./components/educationCombined";
import WorkCombined from "./components/workCombined";

function AddWorkExperience() {
  const [workList, setWorkList] = useState([
    <Col>
      <WorkCombined key={0} />
    </Col>,
  ]);

  function handleRemove(index) {
    const list = [...workList];
    list.splice(index, 1);
    setWorkList(list);
  }
  function handleAddExperience() {
    setWorkList([
      ...workList,
      <Col>
        <WorkCombined key={workList.length} />
      </Col>,
    ]);
  }
  return (
    <>
      {workList.map((singleWork, index) => (
        <Row key={index}>
          {singleWork}
          {workList.length !== 1 && (
            <Col xs={2}>
              <Button
                variant="danger"
                type="button"
                onClick={() => handleRemove(WorkCombined.id)}
              >
                Remove
              </Button>
            </Col>
          )}
        </Row>
      ))}
      <Button
        className="mt-3"
        onClick={handleAddExperience}
        type="button"
        variant="success"
      >
        Add Experience
      </Button>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container className="body">
      <GeneralCombined />
      <div className="row">
        <h3 className="col text-center">Education</h3>
      </div>
      <EducationCombined />
      <div className="row">
        <h3 className="col text-center">Work Experience</h3>
      </div>
      <AddWorkExperience />
    </Container>
  </StrictMode>
);
