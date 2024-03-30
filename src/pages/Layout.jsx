import Sidebar from "../components/sidebar/Sidebar.jsx";
import Navbar from "../components/navbar/Navbar";

import "./layout.css";


const Layout = ({children}) => {
  return (
    <div className="main-home">
      <div className="navbar">
      <Navbar/>
      </div>
      <div className="container">
        <div className="sidebar">
        <Sidebar/>
        </div>
       <div className="content">
      {children}
      </div>
      </div>
      </div>
  )
}

export default Layout