// Pricing.jsx

import React,{useState} from "react";
import "../styles/pricing.scss";
import { Switch } from 'antd';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const onChange = (checked) => {
    setIsYearly(checked);
  };
  return (
    <>
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="row heading">
            <div className="info">
              <h6>Get awesome features, without extra charges</h6>
              <p>
                The rise of mobile devices transforms the way we consume
                information entirely and the world's most relevant channels such
                as Facebook.
              </p>
            </div>
          </div>
          <div className="row cards">
          <div className="pack">
              <div className="pack-info toggle-container">
                <label
                  className={`subscribe ${!isYearly ? "active" : ""}`}
                  onClick={() => setIsYearly(false)}
                >
                  Monthly
                </label>
                <Switch
                  className="switch"
                  defaultChecked={isYearly}
                  onChange={onChange}
                  style={isYearly?{backgroundColor:"#2500f9"}:""}
                />
                <label
                  className={`subscribe ${isYearly ? "active" : ""}`}
                  onClick={() => setIsYearly(true)}
                >
                  Yearly
                </label>
              </div>
            </div>
            <div className="cards-block">
              <div className="card shadow-lg mb-4 border-0">
                <div className="card-header border-bottom-0 pt-7 pb-5">
                  <div className="d-flex justify-content-center">
                    <h1 className="fw-bold">$0</h1>
                    <span className="d-flex align-items-center">/month</span>
                  </div>
                  <h5 className="fw-bold text-center">Business Class</h5>
                  <span className="text-700 text-center d-block">
                    For small teams or office
                  </span>
                </div>
                <div className="card-body mx-auto">
                  <ul className="list-unstyled mb-4">
                    <li className="text-700 py-2 text-secondary">
                      Darg &amp; Drop Builder
                    </li>
                    <li className="text-700 py-2 text-secondary">
                      1,000's of Templates
                    </li>
                    <li className="text-700 py-2 text-secondary">
                      Blog Support Tools
                    </li>
                    <li className="text-700 py-2 text-secondary">
                      eCommerce Store{" "}
                    </li>
                  </ul>
                  <a
                    className="btn btn-lg btn-primary rounded-pill mb-3"
                    href="#"
                  >
                    Start free trial
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card shadow-lg mb-4">
                <div className="card-header border-bottom-0 pt-7 pb-5">
                  <div className="d-flex justify-content-center">
                    <h1 className="fw-bold">$99</h1>
                    <span className="d-flex align-items-center">/month</span>
                  </div>
                  <h5 className="fw-bold text-center">Pro Master</h5>
                  <span className="text-700 text-center d-block">
                    For small teams or office
                  </span>
                </div>
                <div className="card-body mx-auto">
                  <ul className="list-unstyled mb-4">
                    <li className="text-700 py-2 text-secondary">
                      Darg &amp; Drop Builder
                    </li>
                    <li className="text-700 py-2 text-secondary">
                      1,000's of Templates
                    </li>
                    <li className="text-700 py-2 text-secondary">
                      Blog Support Tools
                    </li>
                    <li className="text-700 py-2 text-secondary">
                      eCommerce Store{" "}
                    </li>
                  </ul>
                  <div className="d-flex flex-column">
                    {" "}
                    <a
                      className="btn btn-lg btn-primary rounded-pill mb-3"
                      href="#"
                    >
                      Start free trial
                    </a>
                    <a href="#">Or Start 14 days trail</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
