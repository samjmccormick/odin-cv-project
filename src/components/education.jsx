

function Education ({school, dates, degree, info}) {
 return (
    <div className="container-fluid">
        <div className="row">
            <div className="col">{school}</div>
            <div className="col">{dates}</div>
        </div>
        <div className="row">
            <div className="col">{degree}</div>
        </div>
        <div className="row">
            <ul>
                {info.map((item) => {
                    <li>{item}</li>
                })}
            </ul>
        </div>
    </div>
 )
}

export default Education