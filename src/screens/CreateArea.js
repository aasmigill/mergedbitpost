import React, { useState } from "react";
// import AddIcon from '@mui/icons-material/Add';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaPlus } from "react-icons/fa";
 import { FaRegPlusSquare } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
 //--> fab
// import { facircleplus} from "react-icons/fa";
// import { GrBitcoin } from "react-icons/fa";
// import AddIcon from "@mui/icons/Add";
// import Fab from "@mui/core/Fab";
// import Zoom from "@mui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Aasmi Gill"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Write your thoughts"
          rows={isExpanded ? 3 : 1}
        />
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        <FontAwesomeIcon icon ={FaPlusCircle} in={isExpanded}>
          <FaPlus onClick={submitNote}>
            <FaRegPlusSquare />
          </FaPlus>
          </FontAwesomeIcon>
        {/* </FaPlusCircle> */}
      </form>
    </div>
  );
}

export default CreateArea;