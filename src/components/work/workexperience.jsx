import { Button } from "react-bootstrap";

function WorkExperience({ company, dates, title, info, onClick }) {
  const infoMap = info.map((item, index) => {
    return item.bullet !== "" && <li key={index}>{item.bullet}</li>;
  });

  return (
    <div className="container">
      <div className="row">
        <h3 className="col">{title}</h3>
        <h4 className="col text-end">{dates}</h4>
      </div>
      <div className="row">
        <div className="col">{company}</div>
      </div>
      <div className="row">
        <ul>{infoMap}</ul>
      </div>
      <Button variant="primary" type="button" onClick={onClick}>
        Edit
      </Button>
    </div>
  );
}

export default WorkExperience;
