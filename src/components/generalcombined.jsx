import General from "./general";
import GeneralForm from "./generalForm";
import { useState } from "react";

function GeneralCombined() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmit(true);
  }
  function handleEdit(e) {
    e.preventDefault();
    setIsSubmit(false);
  }

  return (
    <>
      {!isSubmit && (
        <GeneralForm
          name={fullName}
          email={email}
          phoneNumber={phoneNumber}
          changeName={(e) => setFullName(e.target.value)}
          changeEmail={(e) => setEmail(e.target.value)}
          changePhone={(e) => setphoneNumber(e.target.value)}
          onClick={handleSubmit}
        />
      )}
      {isSubmit && (
        <General
          name={fullName}
          email={email}
          phoneNumber={phoneNumber}
          onClick={handleEdit}
        />
      )}
    </>
  );
}

export default GeneralCombined;
