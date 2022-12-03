import React from "react";
// import DeleteIcon from "@material-ui/icons/Delete";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import {FaCoffee} from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Note(props) {
  function handleClick() {
    props.onTip(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
      <FontAwesomeIcon icon={faCoffee} />
      </button>
    </div>
  );
}

export default Note;