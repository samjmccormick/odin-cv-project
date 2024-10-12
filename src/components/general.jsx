function General ({name, email, phoneNumber}) {
    return (
       <div className="container-fluid">
           <div className="row">
               <div className="col">{name}</div>
           </div>
           <div className="row">
               <div className="col">{email}</div>
               <div className="col">{phoneNumber}</div>
           </div>
       </div>
    )
   }
   
   export default General