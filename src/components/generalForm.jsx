import { Button, Col, Container, Form, Row } from "react-bootstrap"


function GeneralForm () {
    return (
        <Container>
            <Form>
                <Row className="justify-content-center">
                    <Col sm={5} >
                        <Form.Group className="text-center mb-3" controlId="formGroupName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your full name" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="text-center mb-3" controlId="formGroupEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="text-center mb-3" controlId="formGroupPhoneNumer">
                            <Form.Label>Phone Numer</Form.Label>
                            <Form.Control type="tel" placeholder="Enter your phone number" />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    )
   }

   export default GeneralForm