import React from "react";
import "../styles/home.scss";
import img from "../assets/illustrations/arrow-right.png";
import img1 from "../assets/illustrations/mobile.png";

const Home = () => {
  return (
    <>
      <main>
        <section className="home" id="home">
          <div className="bg-holder"></div>

          <div className="container">
            <div className="items">
              <div className="col">
                <span class="badge">
                  <img
                    class="img-badge"
                    src={img}
                    alt=""
                  />
                  #1 Editiors Choice App of 2020
                </span>
                <h1 className="mb-4 display-3 fw-bold lh-sm">
                  Best app for your <br class="d-block d-lg-none d-xl-block" />
                  modern lifestyle
                </h1>
                <p className="mt-3 mb-4 fs-1">
                  Increase productivity with a simple to-do app. app for{" "}
                  <br class="d-none d-lg-block" />
                  managing your personal budgets.
                </p>
                <a
                  class="btn btn-lg btn-primary rounded-pill hover-top"
                  href="#"
                  role="button"
                >
                  Try for free
                </a>
                <a class="btn btn-link ps-md-4" href="#" role="button">
                  {" "}
                  Watch demo video
                </a>
              </div>
              <div className="image-block">
                <img className="img-fluid" src={img1} alt="" />
              </div>
            </div>
          </div>
        </section>

        <div id="features" style={{ height: "100vh" }}>
          Features
        </div>
        <div id="pricing" style={{ height: "100vh" }}>
          {" "}
          Pricing
        </div>
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
