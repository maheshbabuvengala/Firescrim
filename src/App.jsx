import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Transactions from "./Components/Transactions/Transactions";
import ContactUS from "./Components/Legal Links/ContactUS";
import TermsAndConditions from "./Components/Legal Links/TermsAndConditions";
import PrivacyPolicy from "./Components/Legal Links/PrivacyPolicy";
import Payment from "./Components/Payment/Payment";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/contact_us" element={<ContactUS />} />
          <Route path="/terms_&_conditions" element={<TermsAndConditions />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
