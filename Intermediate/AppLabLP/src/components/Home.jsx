import React from "react";
import "../styles/home.scss";
import { Link } from "react-router-dom";
import img from "../assets/illustrations/arrow-right.png";
import img1 from "../assets/illustrations/mobile.png";
import Features from "./Features.jsx";
import Pricing from "./Pricing.jsx";

const Home = () => {
  return (
    <>
      <main>
        <section className="home" id="home">
          <div className="bg-holder"></div>

          <div className="container">
            <div className="items">
              <div className="col">
                <span className="badge">
                  <img className="img-badge" src={img} alt="" />
                  #1 Editiors Choice App of 2020
                </span>
                <h1 className="title">
                  Best app for your <br />
                  modern lifestyle
                </h1>
                <p className="para">
                  Increase productivity with a simple to-do app. app for
                  <br />
                  managing your personal budgets.
                </p>
                <Link className="btn" to="/" role="button">
                  Try for free
                </Link>
                <Link className="btn-link" to="/" role="button">
                  Watch demo video
                </Link>
              </div>
              <div className="image-block">
                <img className="img-fluid" src={img1} alt="" />
              </div>
            </div>
          </div>
        </section>
        <Features />
        <Pricing />
        <div id="testimonials" style={{ height: "100vh" }}>
          Testimonials
        </div>
        <div id="faq" style={{ height: "100vh" }}>
          FAQ
        </div>
      </main>
    </>
  );
};

export default Home;
