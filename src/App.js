import React from "react";
import "./App.css";
import Form from "./Form";
import Customhookform from "./customehook/Customehookform";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hook" element={<Form />} />
          <Route path="/customhook" element={<Customhookform />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
