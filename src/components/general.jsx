import { Button } from "react-bootstrap"

function General ({name, email, phoneNumber, onClick}) {
    return (
       <div className="container">
           <div className="row">
               <h1 className="col text-center">{name}</h1>
           </div>
           <div className="row">
               <h5 className="col text-center">{email}</h5>
               <h5 className="col text-center">{phoneNumber}</h5>
           </div>
           <Button variant="primary" type="submit" onClick={onClick}>Edit</Button>
       </div>
    )
   }
   
   export default General