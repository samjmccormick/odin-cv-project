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
import EducationCombined from './components/educationCombined'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container className='body'>
      <GeneralCombined />
      <div className="row">
              <h3 className="col text-center">Education</h3>
          </div>
      <EducationCombined />
      <div className="row">
              <h3 className="col text-center">Work Experience</h3>
          </div>
      <WorkExperience company="kiewit" dates="2022" title="bad bitch" info={["getting money", "Getting paper", "essentially running everything in my life"]} />
    </Container>
  </StrictMode>
)
