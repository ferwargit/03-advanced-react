import { useState } from "react";

const ToggleChallenge = () => {

  const [showAlert, setShowAlert] = useState(false);

  // const toggleAlert = () => {
  //   setShowAlert(!showAlert);
  // };

  return <div>
    {/* <button className="btn" onClick={toggleAlert}>Toggle</button> */}
    <button className="btn" onClick={() => setShowAlert(!showAlert)}>Toggle</button>
    {showAlert ? <Alert /> : null}
  </div>;
};

const Alert = () => {
  return <div className="alert alert-success" role="alert">
    <strong>Well done!</strong> You successfully read this important alert message.
  </div>;
}

export default ToggleChallenge;
