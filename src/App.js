import React from "react";
import "./App.css";
import Form from "./Form";
import Customhookform from "./customehook/Customehookform";

function App() {
  return (
    <>
      <div id="container">
        <Customhookform />
        <Form />
      </div>
    </>
  );
}

export default App;
