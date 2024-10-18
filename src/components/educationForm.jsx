import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"

function ListInput () {
    const [counter, setCounter] = useState(0);
    function handleClick () {
        setCounter(counter + 1)
    };
    return (
        <>
        {Array.from(Array(counter)).map((c, index) => {
            return (
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId={"formScho olInfo" + counter}>
                            <Form.Label>Description of Degree</Form.Label>
                            <Form.Control type="text" placeholder="Describe your education" value={degree} onChange={changeDegree} />
                        </Form.Group>
                    </Col>
                </Row>
            )
        })
            }
        <Button variant="secondary" type="button" onClick={handleClick} >Add Bullet Point</Button>
        </>
    )
}

function EducationForm ({school, dates, degree, info, changeSchool, changeDates, changeDegree, onClick}) {
    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formGroupSchool">
                            <Form.Label>University or College</Form.Label>
                            <Form.Control type="text" placeholder="Enter your undergraduate institution" value={school} onChange={changeSchool} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formSchoolGraduationDate">
                            <Form.Label>Graduation Year</Form.Label>
                            <Form.Control type="text" placeholder="Enter your graduation year" value={dates} onChange={changeDates} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formScoolDegree">
                            <Form.Label>Degree</Form.Label>
                            <Form.Control type="text" placeholder="Enter your degree" value={degree} onChange={changeDegree} />
                        </Form.Group>
                    </Col>
                </Row>
        
                <Button variant="primary" type="submit" onClick={onClick}>Submit</Button>
            </Form>
        </Container>
    )
   }

   export default EducationForm