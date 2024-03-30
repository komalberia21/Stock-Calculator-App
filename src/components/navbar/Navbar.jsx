import "./navbar.css";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MoneyIcon from '@mui/icons-material/Money';
import PaymentIcon from '@mui/icons-material/Payment';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CoffeeIcon from '@mui/icons-material/LocalCafe';



const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [openmenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    console.log("menu", openmenu);
    setOpenMenu(!openmenu);
  }

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item menu">
            <ListOutlinedIcon onClick={handleMenu} className="icon-nav" />
            {openmenu && <div className="nav-sidebar">
             <div className="center-nav">
                  <ul>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <li>
                        <DashboardIcon className="icon-nav" />
                        <span>Stock Average Calculator</span>
                      </li>
                    </Link>
                    <Link to="/sip" style={{ textDecoration: "none" }}>
                      <li>
                        <MoneyIcon className="icon-nav" />
                        <span>Sip calculator</span>
                      </li>
                    </Link>
                    <Link to="/percentage" style={{ textDecoration: "none" }}>
                      <li>
                        <CreditCardIcon className="icon-nav" />
                        <span>Percentage Calculator</span>
                      </li>
                    </Link>
                    <Link to="/emi" style={{ textDecoration: "none" }}>
                      <li>
                        <PaymentIcon className="icon-nav" />
                        <span>Emi Calculator</span>
                      </li>
                    </Link>

                    <Link to="/coffee" style={{ textDecoration: "none" }}>
                      <li>
                        < CoffeeIcon className="icon-nav" />
                        <span>Buy me a cofeee</span>
                      </li>
                    </Link>
                    <Link to="/about" style={{ textDecoration: "none" }}>
                      <li>
                        <AccountCircleOutlinedIcon className="icon-nav" />
                        <span>About</span>
                      </li>
                    </Link>

                  </ul>
                </div>
                <div className="bottom">
                  <div
                    className="colorOption-nav"
                    onClick={() => dispatch({ type: "LIGHT" })}
                  ></div>
                  <div
                    className="colorOption-nav"
                    onClick={() => dispatch({ type: "DARK" })}
                  ></div>
                </div>
              



















            </div>}
          </div>
        </div>
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo"> Stock-Calculator</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
