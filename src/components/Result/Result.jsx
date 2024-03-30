import "./result.css";

const Result = ({ firstTotal, secondTotal, TotalUnits, TotalPrice, avg }) => {
  console.log(firstTotal, secondTotal, TotalPrice, TotalUnits, avg);
  return (
      <div className="results">
        <h1>Results</h1>
        <p>The amount invested in first purchase: {firstTotal}</p>
        <p>The amount invested in second purchase: {secondTotal}</p>
        <div className="res">
          <h3>Total Units: {TotalUnits}</h3>
          <h3>Average Price: {avg}</h3>
          <h3>Total amount: {TotalPrice}</h3>
        </div>

      </div>
  );
};
export default Result;