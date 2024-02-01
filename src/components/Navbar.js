import { Link } from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { IconButton } from "@mui/material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <nav className="navbar__nav">
          <h3 className="nav__brand">
            <Link to="/">
              <i className="fas fa-video"></i> MOVIEMATE
            </Link>
          </h3>
          <ul className="nav__links">
            <li className="links__link">
              <Link to="/">
                <IconButton color="inherit">
              <ArrowBackIosNewOutlinedIcon /> 
                </IconButton>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
