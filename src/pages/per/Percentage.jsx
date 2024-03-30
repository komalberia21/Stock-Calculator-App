import "./per.css";
import {useState} from "react";

const Percentage = () => {
  const[per,setPer]=useState(0);
  const[first,setFirst]=useState(0);
  const[second,setSecond]=useState(0);

  const handlePercentage=()=>{
    let v=Number((first/100)*second);
    console.log(v);
    setPer(v);
    console.log(per);
    }

  return (
    <div className="per">
      <div className="title">
        Percentage Calculator
      </div>
      <h1>What is </h1>
      <input
          id="perc-value"
          name="purchase"
          type="number"
          onChange={(e)=>setFirst(e.target.value)}
          placeholder='units'
        />
        <h1>%(Percentage)of</h1>
        <input
          id="whose-per"
          name="purchase"
          type="number"
          onChange={(e)=>setSecond(e.target.value)}
          placeholder='units'
        />
        <h1>?</h1>
        <div className="per-result">
          <h1>Results:{per}</h1>
        </div>
        <button  onClick={handlePercentage} className="cal-per">Answer </button>
    </div>
  )
}

export default Percentage