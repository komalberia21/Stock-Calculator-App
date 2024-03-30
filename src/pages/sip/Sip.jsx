import { useState } from 'react';
import "./sip.css"; // Import your component styles here

const Sip = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [investmentPeriod, setInvestmentPeriod] = useState("");
  const [annualReturns, setAnnualReturns] = useState("");
  const [stepUpIncrease, setStepUpIncrease] = useState("");
  const [zipResult, setZipResult] = useState({
    futureValue: 0,
    expectedAmount: 0,
    amountInvested: 0,
    totalGain: 0
  });
  console.log(monthlyInvestment);

  const calculateZip = () => {
    // Convert investment period to months
    const totalMonths = investmentPeriod * 12;

    // Initialize variables
    let futureValue = 0;
    let monthlyContribution = monthlyInvestment;
    let totalInvested = 0;

    // Calculate future value and total invested
    for (let i = 1; i <= totalMonths; i++) {
      futureValue = futureValue * (1 + annualReturns / 1200) + monthlyContribution;
      totalInvested += monthlyContribution;
      monthlyContribution += stepUpIncrease;
    }
// Calculate expected amount and total gain
   
    const totalGain = futureValue - totalInvested;

    // Update state with the results
    setZipResult({
      futureValue: futureValue.toFixed(2),
      
      amountInvested: totalInvested.toFixed(2),
      totalGain: totalGain.toFixed(2)
    });
  };

  return (
    <div className="zip-calculator">
     <div className='title'>SIP Calculator</div>
      <div className="input-group">
        <label htmlFor="monthly-investment">Monthly Invested Amount :</label>
        <input
          id="monthly-investment"
          type="number"
          name="monthly-investment"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(parseFloat(e.target.value))}
          placeholder='monthly-investment'
        />
       
      </div>
      <div className="input-group">
        <label htmlFor="investment-period">Investment Period (Years):</label>
        <input
          id="investment-period"
          type="number"
          name="invest-period"
          value={investmentPeriod}
          placeholder='investment-period'
          onChange={(e) => setInvestmentPeriod(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label htmlFor="annual-returns">Expected Annual Returns (%):</label>
        <input
          id="annual-returns"
          type="number"
          name='annual'
          value={annualReturns}
          placeholder='annula-returns'
          onChange={(e) => setAnnualReturns(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label htmlFor="step-up-increase">Step-Up Increase in Monthly Investment :</label>
        <input
          id="step-up-increase"
          type="number"
          name="step-up"
          placeholder='step-up-increase'
          value={stepUpIncrease}
          onChange={(e) => setStepUpIncrease(parseFloat(e.target.value))}
        />
      </div>
      <button className='sip-button' onClick={calculateZip}>Calculate</button>
      <div className="future">
       <h3>Expected Amount: {zipResult.futureValue}</h3>
        <h3>Amount Invested:  {zipResult.amountInvested}</h3>
        <h3>Total Gain:  {zipResult.totalGain}</h3>
      </div>
    </div>
  );
};

export default Sip;
