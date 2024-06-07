import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import Card from "./Card";
import Banner from "./Banner";
import Prices from "./Prices";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="content ">
      <Banner />
      <h1 className="container ">
        <span className="text-success">REGISTER </span>
        <span className="text-danger">NOW</span>
        <br />
        <p className="li"></p>
      </h1>
      <br />
      <Card />
      <br />
      <br />
      <h1 className="container ">
        <span className="text-danger">PRICES </span>
        <span className="text-success">LIST</span>
        <br />
        <p className="li"></p>
      </h1>
      <br />
      <Prices />
      <br />
      <br />
      <div className="container-fluid">
        <br />
        <h1 className="container  ">
          <span className="text-warning">IMP </span>

          <span className="text-success">LINKS</span>
          <br />
          <p className="li"></p>
        </h1>
        <br />
        <div className="container">
          <div className="row container wrap">
            <div className="col-sm-4">
              <h5>
                Instagram <FaSquareInstagram />
              </h5>
            </div>
            <div className="col-sm-4">
              <h5>
                Telegram <BsTelegram />
              </h5>
            </div>
            <div className="col-sm-4">
              <h5>
                Whatsapp <IoLogoWhatsapp />
              </h5>
            </div>
            <div className="col-sm-4">
              <Link className="link " to={"/contact_us"}>
                Contact Us
              </Link>
            </div>
            <div className="col-sm-4">
              <Link className="link " to={"/terms_&_conditions"}>
                Terms & Conditions
              </Link>
            </div>
            <div className="col-sm-4">
              <Link className="link " to={"/privacy_policy"}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Home;
