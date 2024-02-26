import { useState } from "react";
export default function Player({ initialName, Symbol, isActive }) {
  const [platerName, setpalyerName] = useState(initialName);
  const [isEaditing, setEdating] = useState(false);
  function handelEditClick() {
    setEdating((eaditing) => !eaditing);
  }
  function handelChange(event) {
    // console.log(event);
    setpalyerName(event.target.value);
    // console.log(setpalyerName);
  }
  let edatiableName = <span className="player-name">{platerName}</span>;
  //   let buttonCaption = "Edit";
  if (isEaditing) {
    edatiableName = (
      <input type="text" required value={platerName} onChange={handelChange} />
    );
    // let buttonCaption = "save";
  }
  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {edatiableName}
          <span className="player-symbol">{Symbol}</span>
        </span>
        <button onClick={handelEditClick}>
          {isEaditing ? "Save" : "Edit"}
        </button>
      </li>
    </>
  );
}
