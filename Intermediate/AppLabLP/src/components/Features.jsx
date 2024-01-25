import React from "react";
import "../styles/features.scss";
import company1 from "../assets/gallery/company-1.png";
import company2 from "../assets/gallery/company-2.png";
import company3 from "../assets/gallery/company-3.png";
import company4 from "../assets/gallery/company-4.png";
import feature1 from "../assets/illustrations/feature-bg.png"
import item1 from "../assets/illustrations/fast-performance.png"
import item2 from "../assets/illustrations/prototype.png"
import item3 from "../assets/illustrations/vector.png"


const Features = () => {
  return (
    <>
      <section className="companies">
        <div className="container">
          <div className="row">
            <div className="details">
              <p className="para">Trusted by companies like</p>
            </div>
          </div>
          <div className="companies-img">
            <div className="company">
              <img src={company1} alt="" />
            </div>
            <div className="company">
              <img src={company2} alt="" />
            </div>
            <div className="company">
              <img src={company3} alt="" />
            </div>
            <div className="company">
              <img src={company4} alt="" />
            </div>
            <div className="company">
              <img src={company1} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="features" id="features">
        <div className="container-lg">
          <div className="row">
            <div className="image-sec">
              <img
                className="img-fluid"
                src={feature1}
                alt=""
              />
            </div>
            <div className="details">
              <h6 className="heading">
                Awesome apps <br />
                features
              </h6>
              <p className="para">
                Increase productivity with a simple to-do app. app for{" "}
                <br />
                managing your personal budgets.
              </p>
              <div className="items">
                <div>
                  <img
                    className="img-fluid"
                    src={item1}
                    alt=""
                  />
                </div>
                <div className="info">
                  <h5 className="text-danger">Fast performance</h5>
                  <p>
                    Get your blood tests delivered at <br /> home collect a
                    sample from the <br /> news your blood tests
                  </p>
                </div>
              </div>
              <div className="items">
                <div>
                  <img
                    className="img-fluid"
                    src={item2}
                    alt=""
                  />
                </div>
                <div className="info">
                  <h5 className="text-primary">Prototyping</h5>
                  <p>
                    Get your blood tests delivered at <br /> home collect a
                    sample from the <br /> news your blood tests
                  </p>
                </div>
              </div>
              <div className="items">
                <div>
                  <img
                    className="img-fluid"
                    src={item3}
                    width="90"
                    alt=""
                  />
                </div>
                <div className="info">
                  <h5 className="text-success">Vector Editing</h5>
                  <p>
                    Get your blood tests delivered at <br /> home collect a
                    sample from the <br /> news your blood tests
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
