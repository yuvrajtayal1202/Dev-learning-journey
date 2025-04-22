import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  let [length, setLength] = useState(8);
  let [numbera, setNumbera] = useState(false);
  let [chara, setChara] = useState(true);
  let [password, setPassword] = useState("");

  // useRef 
  const passwordRef =  useRef("")

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
    if (numbera) str += "0123456789";
    if (chara) str += "@#!$%^&*()__+={}[]`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbera, chara, setPassword]);

  const copyPass = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, chara, numbera, passwordGenerator])
  return (
    <>
      <div className="outer">
        <h1>Password Generator</h1>
        <div className="inner">
          <input
            type="text"
            value={password}
            id="passwordi"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className="btn btn-primary" onClick={copyPass}>copy</button>
        </div>
        <div className="cont">
          <div className="con" style={{display: "flex"}}>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="range"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="con">
            <input
              type="checkbox"
              defaultChecked={numbera}
              id="numberinput"
              onChange={() => {
                setNumbera((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="con">
            <input
              type="checkbox"
              defaultChecked={chara}
              id="charinput"
              onChange={() => {
                setChara((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
