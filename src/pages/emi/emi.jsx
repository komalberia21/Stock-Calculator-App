import { useState } from "react";
import "./emi.css"; // Import your component styles here

const Emi = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [annualInterest, setAnnualInterest] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [lastEmi, setLastEmi] = useState('');

  const calculateEmi = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(annualInterest) / (12 * 100); // Monthly interest rate
    const term = parseFloat(loanTerm); // Loan term in months

    // Calculate EMI
    const emi = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);

    // Set the last EMI
    setLastEmi(emi.toFixed(2));
};


  const clearFields = () => {
    setLoanAmount('');
    setAnnualInterest('');
    setLoanTerm('');
    setLastEmi('');
  };

  return (
    <div className="emi-calculator">
      <div className='title'>EMI Calculator</div>
      <div className="input-group">
        <label htmlFor="loan-amount">Loan Amount ($):</label>
        <input
          id="loan-amount"
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder='Loan amount'
        />
      </div>
      <div className="input-group">
        <label htmlFor="annual-interest">Annual Interest Rate (%):</label>
        <input
          id="annual-interest"
          type="number"
          value={annualInterest}
          onChange={(e) => setAnnualInterest(e.target.value)}
          placeholder='Annual interest rate'
        />
      </div>
      <div className="input-group">
        <label htmlFor="loan-term">Loan Term (Months):</label>
        <input
          id="loan-term"
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          placeholder='Loan term'
        />
      </div>
      <div className="buttons">
      <button className="emi-button" onClick={calculateEmi}>Calculate EMI</button>
      <button className="emi-clear" onClick={clearFields}>Clear Fields</button>
      </div>
      
      {lastEmi && (
        <div className="emi-result">
          <h3>EMI: {lastEmi}/month</h3>
        </div>
      )}
    </div>
  );
};

export default Emi;
