function WorkExperience({ company, dates, title, info }) {
  const infoMap = info.map((item) => {
    return <li key={item}>{item}</li>;
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
    </div>
  );
}

export default WorkExperience;
