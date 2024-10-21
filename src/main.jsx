import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form } from "react-bootstrap";
import GeneralCombined from "./components/generalcombined";
import EducationCombined from "./components/educationCombined";
import WorkCombined from "./components/workCombined";

function AddWorkExperience() {
  const [workList, setWorkList] = useState([<WorkCombined key={0} />]);
  function handleAddExperience(e) {
    setWorkList([...workList, <WorkCombined key={workList.length} />]);
  }
  return (
    <>
      {workList}
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
