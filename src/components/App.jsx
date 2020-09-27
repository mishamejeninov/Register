import React from "react";
import Form from "./Form";

function App() {
  let userIsRegistered = false;

  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
