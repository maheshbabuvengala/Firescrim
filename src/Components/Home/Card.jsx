import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div>
      <div className="container main">
        <div className="row wrap container">
          <div className="col-sm-4  box">
            <div className="row c"></div>
            <div className="row c">
              <div className="col">
                <h3 className="text-white p">Map: Bermuda</h3>
              </div>
            </div>
            <div className="row c">
              <div className="col">
                <h3 className="text-white p">Time:06:10 PM</h3>
              </div>
            </div>
            <div className="row c">
              <div className="col"></div>
              <div className="col-5">
                <button className="btn btn-md btn-danger btn-lg">
                  <Link to={"/payment"}>Register</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4  box">
            <div className="row c"></div>
            <div className="row c">
              <div className="col">
                <h3 className="text-white p">Map: Bermuda</h3>
              </div>
            </div>
            <div className="row c">
              <div className="col">
                <h3 className="text-white p">Time:06:10 PM</h3>
              </div>
            </div>
            <div className="row c">
              <div className="col"></div>
              <div className="col-5">
                <button className="btn btn-md btn-danger btn-lg">
                  Register
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4  box">
            <div className="row c"></div>
            <div className="row c">
              <div className="col">
                <h3 className="text-white p">Map: Bermuda</h3>
              </div>
            </div>
            <div className="row c">
              <div className="col">
                <h3 className="text-white p">Time:06:10 PM</h3>
              </div>
            </div>
            <div className="row c">
              <div className="col"></div>
              <div className="col-5">
                <button className="btn btn-md btn-danger btn-lg">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
