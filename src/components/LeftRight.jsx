import { useState } from "react";

function LeftRight() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  const [allClicks, setAllClicks] = useState([]);
  function handleLeft() {
    setClicks({ ...clicks, left: clicks.left + 1 });
    setAllClicks(allClicks.concat("L"));
  }

  function handleRight() {
    setClicks({ ...clicks, right: clicks.right + 1 });
    setAllClicks(allClicks.concat("R"));
  }

  return (
    <div>
      <h1>Left and Right App</h1>
      {clicks.left}
      <button onClick={handleLeft}>Left</button>
      <button onClick={handleRight}>Right</button>
      {clicks.right}
      <p>{allClicks.join(" ")}</p>
    </div>
  );
}

export default LeftRight;
