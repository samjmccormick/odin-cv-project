import { useState } from "react";
import EducationForm from "./educationForm";
import Education from "./education";

function EducationCombined() {
  const [school, setSchool] = useState("");
  const [dates, setDates] = useState("");
  const [degree, setDegree] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [infoList, setInfoList] = useState([{ bullet: "" }]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmit(true);
  }

  function handleEdit() {
    setIsSubmit(false);
  }

  function handleInfoChange(e, index) {
    const { name, value } = e.target;
    const list = [...infoList];
    list[index][name] = value;
    setInfoList(list);
  }

  return (
    <>
      {!isSubmit && (
        <EducationForm
          school={school}
          dates={dates}
          degree={degree}
          infoList={infoList}
          changeSchool={(e) => setSchool(e.target.value)}
          changeDates={(e) => setDates(e.target.value)}
          changeDegree={(e) => setDegree(e.target.value)}
          changeInfo={(e) => handleInfoChange(e)}
          onSubmit={handleSubmit}
        />
      )}
      {isSubmit && (
        <Education
          school={school}
          dates={dates}
          degree={degree}
          onClick={handleEdit}
        />
      )}
    </>
  );
}

export default EducationCombined;
