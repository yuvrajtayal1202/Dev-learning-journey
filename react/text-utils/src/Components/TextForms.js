import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const TextForms = (props) => {
let disabled  =
  useEffect(() => {
    document.title = "TextUtils - Home || Yuvraj Tayal";
  }, []);

  let [Text, setText] = useState(localStorage.getItem("data") || "");

  const handleOnChange = function (e) {
    setText(e.target.value);
  };
  const handleup = function (e) {
    let neText = Text.toUpperCase();
    setText(neText);
    props.showAlert("Text converted to UPPERCASE", "success")
  };
  const handlelo = function (e) {
    let neText = Text.toLowerCase();
    setText(neText);
    props.showAlert("Text converted to lowercase", "success")
  };
  const handleclear = function (e) {
    let neText = " ";
    setText(neText);
    props.showAlert("Text Cleared", "success")
  };
  const handleSen = function () {
    props.showAlert("Text converted to Sentence case", "success")
    let newText = Text.toLowerCase().replace(/(^\s*\w|[.!?\n]\s*\w)/g, function (match) {
      return match.toUpperCase();
    });
    setText(newText);
  };
  const handleti = function () {
    let newText = Text.toLowerCase().split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
    setText(newText);
    props.showAlert("Text converted to Title case", "success")
  };
  
  const handlecopy = function () {
    let vext =  document.getElementById("exampleFormControlTextarea1")
    vext.select();
    navigator.clipboard.writeText(vext.value)
    props.showAlert("Text Copeid to Your clipboard", "success")
  };
  
  const handlesave = () => {
    localStorage.setItem("data", Text)
    props.showAlert("Textb Saved", "success")

  }
  function showTask(){
    setText(localStorage.getItem("data"))
}
  
  

  return (
<>
 
    <div className="container my-4">
     <h2>Enter Text Below To analyze</h2>
      <div className="mb-3 my-4"> 
        <textarea
          className="form-control"
          name="textarea"
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
          value={Text}
          style={{backgroundColor: props.mode == "light"?"white":"#133a62", color: props.mode == "light"?"black":"white"}}
        ></textarea>
        <button
          type="button"
          onClick={handleclear}
          className="btn btn-success mx-1 my-1"
          disabled={Text.length===0}
          >
          Clear
        </button>
        <button
          type="button"
          onClick={handlecopy}
          className="btn btn-success mx-1 my-1"
          disabled={Text.length===0}
          >
          Copy Text
        </button>
        <button
          type="button"
          onClick={handlesave}
          className="btn btn-success mx-1 my-1"
          disabled={Text.length===0}
          >
          Save
        </button>
        <button
          type="button"
          onClick={handleup}
          className="btn btn-success  mx-1 my-1"
          disabled={Text.length===0}
          >
          Convert To UPPERCASE
        </button>
        <button
          type="button"
          onClick={handlelo}
          className="btn btn-success mx-1 my-1"
          disabled={Text.length===0}
          >
          Convert To lowercase
        </button>
        <button
          type="button"
          onClick={handleSen}
          className="btn btn-success mx-1 my-1"
          disabled={Text.length===0}
          >
          Convert to Sentence
        </button>
        <button
          type="button"
          onClick={handleti}
          className="btn btn-success mx-1 my-1"
          disabled={Text.length===0}
          >
          Convert to Title
        </button>
      </div>

      <h2>
        <b>Text Summary</b>
      </h2>
      <p>
        {
          Text.trim()
          .split(/\s+/)
          .filter((word) => word !== "").length
        }{" "}
        Words, {Text.length} Characters
      </p>

      <h2>Preview</h2>
      <p>{Text.length>0?Text:"Enter Text in the The aboveText box to preview it Here"} </p>
    </div>
    </>
  );
};

export default TextForms;
