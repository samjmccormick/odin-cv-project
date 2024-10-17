import { useState } from "react"
import EducationForm from "./educationForm";
import Education from "./education";

function EducationCombined () {
const [school, setSchool] = useState('');
const [dates, setDates] = useState('');
const [degree, setDegree] =useState('');
const [info, setInfo] = useState([]);
const [isSubmit, setIsSubmit] = useState(false);

function handleSubmit (e) {
    e.preventDefault();
    setIsSubmit(true);
}

function handleEdit () {
    setIsSubmit(false);
}

    return (
        <>
            {!isSubmit && <EducationForm school={school} dates={dates} degree={degree} info={info}
            changeSchool={e => setSchool(e.target.value)}
            changeDates={e => setDates(e.target.value)}
            changeDegree={e => setDegree(e.target.value)}
            onClick={handleSubmit} />}
            {isSubmit && <Education school={school} dates={dates} degree={degree} info={info} onClick={handleEdit} />}
        </>
    )
}

export default EducationCombined