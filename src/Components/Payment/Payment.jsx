import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Scanner from "../../../public/Scanner.jpg";
import "./Payment.css";
import Paytm from "../../../public/paytm.jpg";
import phonepe from "../../../public/phonepe.jpg";
import googlepay from "../../../public/googlepay.jpg";

const Payment = () => {
  return (
    <>
      <div className="conatiner">
        <br />
        <div className="container payment">
          <div className="left">
            <h1>Payment Page</h1>
            <form action="">
              <label htmlFor="utr">
                <h4 className="wel">UTR id/transaction id/ref.NO :</h4>
              </label>
              <div className="imgs">
                <img src={phonepe} />
                <img src={googlepay} />
                <img src={Paytm} />
              </div>
              <input
                type="text"
                name="utr"
                id="utr"
                className="input"
                placeholder="enter according to your payment app"
              />
              <br />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: "20px" }}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="right">
            <img src={Scanner} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
