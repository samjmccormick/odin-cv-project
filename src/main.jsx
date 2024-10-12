import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Education from './components/education'
import General from './components/general'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <General name="Sam McCormick" email="testomg" phoneNumber="testing" />
    <Education school="montana" dates="2016" degree="mechanical engineering" info={["testing testing", "testing testint", "more adn more"]} />
  </StrictMode>,
)
