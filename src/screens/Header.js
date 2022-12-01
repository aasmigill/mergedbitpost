import React from "react";
// import HighlightIcon from "@mui/icons/Highlight";
import { FaBitcoin } from "react-icons/fa";
/* <FontAwesomeIcon icon="fa-brands fa-bitcoin" /> */
function Header() {
  return (
    <header>
      <h1>
        <FaBitcoin/>
        Bitpost
      </h1>
    </header>
  );
}

export default Header;