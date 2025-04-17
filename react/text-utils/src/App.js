import TextForms from "./Components/TextForms";
import Header from "./Components/Navbar";
import Alert from "./Components/Alert";
import About from "./Components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      showAlert("Dark mode enabled", "success");
      setMode("dark");
      document.body.style.backgroundColor = "rgb(7 41 66)";
      document.body.style.color = "white";
      // document.title = "TextUtils - Dark Modez";
    } else {
      showAlert("Light mode enabled", "success");
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      // document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <Router>
      <Header title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/about" element={<About mode = {mode}/>} />
        <Route path="/" element={<TextForms mode={mode} showAlert={showAlert} />} />
      </Routes>
    </Router>
  );
}

export default App;
