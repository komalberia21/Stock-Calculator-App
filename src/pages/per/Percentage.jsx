import "./per.css";
import {useState} from "react";

const Percentage = () => {
  const[per,setPer]=useState(0);
  const[first,setFirst]=useState(0);
  const[second,setSecond]=useState(0);

  const handlePercentage=()=>{
    if(first&& second){
    let v=Number((first/100)*second);
    console.log(v);
    setPer(v);
    console.log(per);
    }else{
      alert("fileds cant be empty");
    }
    }

  return (
    <div className="per">
      <div className="title">
        Percentage Calculator
      </div>
      <div className="input-group">
      <h1>What is </h1>
      <input
          id="perc-value"
          name="purchase"
          className="input-class"
          type="number"
          onChange={(e)=>setFirst(e.target.value)}
          placeholder='units'
        />
        </div>
        <div className="input-group">
        <h1>%(Percentage)of</h1>
        <input
          id="whose-per"
          name="purchase"
          type="number"
          className="input-class"
          onChange={(e)=>setSecond(e.target.value)}
          placeholder='units'
        />
        </div>
        <h1>?</h1>
        <div className="per-result">
          <h1>Results:{per}</h1>
        </div>
        <button  onClick={handlePercentage} className="cal-per">Answer </button>
    </div>
  )
}

export default Percentage