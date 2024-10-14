function General ({name, email, phoneNumber}) {
    return (
       <div className="container">
           <div className="row">
               <h1 className="col text-center">{name}</h1>
           </div>
           <div className="row">
               <h5 className="col text-center">{email}</h5>
               <h5 className="col text-center">{phoneNumber}</h5>
           </div>
       </div>
    )
   }
   
   export default General