import React from "react";
// import DeleteIcon from "@material-ui/icons/Delete";
import {FaCoffee} from "react-icons/fa";

function Note(props) {
  function handleClick() {
    props.onTip(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><FaCoffee /></button>
    </div>
  );
}

export default Note;