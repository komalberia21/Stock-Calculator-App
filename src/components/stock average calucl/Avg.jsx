import{ useState } from 'react';

import "./avg.css";
import Result from '../Result/Result';

const Avg = () => {


  const [open, setOpen] = useState(false);
  const [first, setFirst] = useState({
    purchase: "",
    price: ""
  });
  const [second, setSecond] = useState({
    purchase: "",
    price: ""
  });
  const [firstTotal, setFirstTotal] = useState(0);
  const [secondTotal, setSecondTotal] = useState(0);
  const [TotalUnits, setTotalUnits] = useState(0);
  const [TotalPrice, setTotalPrice] = useState(0);
  const [avg, setAvg] = useState(0);

  const handleFirstChange = (e) => {
    setFirst({ ...first, [e.target.name]: e.target.value });
  };

  const handleSecondChange = (e) => {
    setSecond({ ...second, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("submitted");
    if (first.purchase && first.price && second.purchase && second.price) {
      const firstTotal = first.purchase * first.price;
      const secondTotal = second.purchase * second.price;
      const TotalUnits = Number(first.purchase) + Number(second.purchase); // Convert string to number
      const TotalPrice = firstTotal + secondTotal;
      const avg = TotalPrice / TotalUnits;
      console.log(avg);
      setOpen(true);
      setFirstTotal(firstTotal);
      setSecondTotal(secondTotal);
      setTotalUnits(TotalUnits);
      setTotalPrice(TotalPrice);
      setAvg(avg);
    } else {
      alert("Fields can't be empty");
    }
  };

  // useEffect(() => {
  //   navigate("/")
  // }, [open, navigate]);

  const handleClear = () => {
    setFirst({ purchase: "", price: "" });
    setSecond({ purchase: "", price: "" });
    setOpen(false);
  };

  return (
    <div className="text-black flex items-center justify-center mx-auto main">
      <div className='title'>Stock Average Calculator</div>
      <div className='first' id="first">
        <h1>First Purchase</h1>
        <div className='goal-container'>
         <label htmlFor="first-purchase">Units</label>
        <input
          id="first-purchase"
          name="purchase"
          type="number"
          className='goal-input'
          value={first.purchase}
          onChange={handleFirstChange}
          placeholder='units'
        />
        </div>
        <div className='goal-container'>
        <label htmlFor="first-price">Price per share</label>
        <input
          id="first-price"
          name="price"
          type="number"
          className='goal-input'
          value={first.price}
          onChange={handleFirstChange}
          placeholder='price'
        />
        </div>
      </div>
      <hr />
      <div className='second' id="second">
        <h1>Second Purchase</h1>
        <div className='goal-container'>
        <label htmlFor="second-purchase">Units</label>
        <input
          id="second-purchase"
          name="purchase"
          type="number"
          className='goal-input'
          value={second.purchase}
          onChange={handleSecondChange}
          placeholder='units'
        />
        </div>
        <div className='goal-container'>
        <label htmlFor="second-price">Price per share</label>
        <input
          id="second-price"
          name="price"
          type="number"
          className='goal-input'
          value={second.price}
          onChange={handleSecondChange}
          placeholder='price'
        />
        </div>
      </div>
      <div className='buttons'>
        <button onClick={handleSubmit} className='calculate'>Calculate Avg</button>
        <button className="clear" onClick={handleClear} >Clear fields</button>
      </div>

      {open && <Result firstTotal={firstTotal} secondTotal={secondTotal} TotalUnits={TotalUnits} TotalPrice={TotalPrice} avg={avg} />}
    </div>
  );
};

export default Avg;
