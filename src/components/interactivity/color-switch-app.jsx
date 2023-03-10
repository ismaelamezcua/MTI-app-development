import { useState } from "react";
import ColorSwitch from "./color-switch";

function ColorSwitchApp() {
  // Used to store the number of clicks on the button
  const [clicks, setClicks] = useState(0);

  // Increment the clicks counter very click on button
  function handleClickOutside() {
    setClicks((c) => c + 1);
  }

  // Random color to change as background
  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }

  // Changes the background color of the page
  function handleChangeColor() {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
  }

  return (
    <div style={{ width: "100%", height: "100%" }} onClick={handleClickOutside}>
      <ColorSwitch onChangeColor={handleChangeColor} />
      <br />
      <br />
      <h2>Clicks on the page: {clicks}</h2>
    </div>
  );
}

export default ColorSwitchApp;
