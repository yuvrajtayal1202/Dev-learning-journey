import React from "react";
import padsData from "./pads";
import "./index.css";
import Pad from "./Padl";

export default function App({ darkMode }) {
  const [pads, setpads] = React.useState(padsData);

  function toggle(id) {
    setpads((prevPads) => prevPads.map((item) => {
      return item.id === id ? {...item, on: !item.on} : item
    }));
  }

  const buttonElement = pads.map((pad) => (
    <Pad
      color={pad.color}
      key={pad.id}
      id={pad.id}
      on={pad.on}
      toggle={toggle}
    />
  ));
  console.log(buttonElement);
  return <div className="pad-container">{buttonElement}</div>;
}