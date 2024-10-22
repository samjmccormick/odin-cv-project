import { useState } from "react";
import WorkForm from "./workForm";
import WorkExperience from "./workexperience";

function WorkCombined() {
  const [title, setTitle] = useState("");
  const [dates, setDates] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [infoList, setInfoList] = useState([{ bullet: "" }]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmit(true);
  }

  function handleEdit() {
    setIsSubmit(false);
  }

  function handleAddInfo() {
    setInfoList([...infoList, { bullet: "" }]);
  }

  function handleRemoveInfo(index) {
    const list = [...infoList];
    list.splice(index, 1);
    setInfoList(list);
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
        <WorkForm
          title={title}
          dates={dates}
          company={company}
          infoList={infoList}
          changeTitle={(e) => setTitle(e.target.value)}
          changeDates={(e) => setDates(e.target.value)}
          changeCompany={(e) => setCompany(e.target.value)}
          changeInfo={handleInfoChange}
          clickAdd={handleAddInfo}
          clickRemove={handleRemoveInfo}
          onSubmit={handleSubmit}
        />
      )}
      {isSubmit && (
        <WorkExperience
          title={title}
          dates={dates}
          company={company}
          info={infoList}
          onClick={handleEdit}
        />
      )}
    </>
  );
}

export default WorkCombined;
