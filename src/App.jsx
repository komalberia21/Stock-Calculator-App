
import './App.css'
//import Home from "./pages/home/Home.jsx";
import Percentage from "./pages/per/Percentage.jsx";
import Sip from "./pages/sip/Sip.jsx";
import {  Route, Routes } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Layout from "./pages/Layout.jsx";
import Avg from './components/stock average calucl/Avg.jsx';
import Emi from './pages/emi/emi.jsx';
import Coffee from './pages/coffee/Coffee.jsx';

function App() {
  const { darkMode } = useContext(DarkModeContext);
return (
    <div className={darkMode ? "app dark" : "app"}>
     <Routes>
          <Route path="/" element={<Layout><Avg/></Layout>} />
          <Route path="/percentage" element={<Layout><Percentage/></Layout>}/>
          <Route path="/sip" element={<Layout><Sip/></Layout>}/>
          <Route path="/emi" element={<Layout><Emi/></Layout>}/>
          <Route path="/coffee" element={<Layout><Coffee/></Layout>}/>
          <Route path="/about" element={<Layout><Coffee/></Layout>}/>
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
     
    </div>
  );
}


export default App;
