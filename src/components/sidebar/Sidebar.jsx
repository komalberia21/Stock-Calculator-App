import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MoneyIcon from '@mui/icons-material/Money';
import PaymentIcon from '@mui/icons-material/Payment';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CoffeeIcon from '@mui/icons-material/LocalCafe';

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link} from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";


const Sidebar = () => {
  console.log("hello sidebar");
  const { dispatch } = useContext(DarkModeContext);
 

  //const navigate = useNavigate();
return (
    <div className="sidebar">
      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Stock Average Calculator</span>
          </li>
          </Link>
          <Link to="/sip" style={{ textDecoration: "none" }}>
            <li>
              <MoneyIcon className="icon" />
              <span>Sip calculator</span>
            </li>
          </Link>
          <Link to="/percentage" style={{ textDecoration: "none" }}>
            <li>
              <PaymentIcon className="icon" />
              <span>Percentage Calculator</span>
            </li>
          </Link>
         <Link to="/emi" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <span>Emi Calculator</span>
          </li>
          </Link>
         
         <Link to="/coffee" style={{ textDecoration: "none" }}>
          <li>
            <CoffeeIcon className="icon" />
            <span>Buy me a cofeee</span>
          </li>
          </Link>
         <Link to="/about" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>About</span>
          </li>
          </Link>
          
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
