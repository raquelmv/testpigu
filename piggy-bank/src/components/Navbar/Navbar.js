import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import setBtn from "./asstes/images/settings-btn.svg";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <row className="icon-settings">
  <img src={setBtn}/>
  </row>
  

  </nav>
);

export default Navbar;
