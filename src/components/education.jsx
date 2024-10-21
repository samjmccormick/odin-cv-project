import { Button } from "react-bootstrap";

function Education({ school, dates, degree, info, onClick }) {
  const infoMap = info.map((item, index) => {
    return <li key={index}>{item.bullet}</li>;
  });

  return (
    <div className="container">
      <div className="row">
        <h3 className="col">{school}</h3>
        <h4 className="col text-end">{dates}</h4>
      </div>
      <div className="row">
        <div className="col">{degree}</div>
      </div>
      <div className="row">
        <ul>{infoMap}</ul>
      </div>
      <Button variant="primary" type="submit" onClick={onClick}>
        Edit
      </Button>
    </div>
  );
}

export default Education;
