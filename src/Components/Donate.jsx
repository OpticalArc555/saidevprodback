import React from "react";
import { Link } from "react-router-dom";
import "./Donate.css";

const Donate = () => {
  return (
    <div className="donate-background">
      <div className="donate-container">
        <h2>Bank Account Details</h2>
        <ul>
          <li><strong>Bank Name:</strong> State Bank of India</li>
          <li><strong>Account Name:</strong> Sai Rural Development Trust</li>
          <li><strong>Account Number:</strong> 42415363950</li>
          <li><strong>IFSC Code:</strong> SBIN0015564</li>
          <li><strong>Branch:</strong> Malewadi</li>
        </ul>
        <p className="donate-help">
          If you have any questions or need assistance with your donation,&nbsp;
          please <Link to="/contact" className="inline-link">Contact us</Link>.
        </p>
      </div>
    </div>
  );
};

export default Donate;
