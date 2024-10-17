import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Education from './components/education'
import General from './components/general'
import WorkExperience from './components/workexperience'
import GeneralForm from './components/generalForm'
import { Container } from 'react-bootstrap'
import GeneralCombined from './components/generalcombined'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container className='body'>
      <GeneralCombined />
      <div className="row">
              <h3 className="col text-center">Education</h3>
          </div>
      <Education school="montana" dates="2016" degree="mechanical engineering" info={["testing testing", "testing testint", "more adn more"]} />
      <div className="row">
              <h3 className="col text-center">Work Experience</h3>
          </div>
      <WorkExperience company="kiewit" dates="2022" title="bad bitch" info={["getting money", "Getting paper", "essentially running everything in my life"]} />
    </Container>
  </StrictMode>
)
