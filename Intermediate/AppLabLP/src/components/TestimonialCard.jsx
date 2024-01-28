// TestimonialCard.jsx

import React from "react";
import client1 from "../assets/gallery/user.png"; // Import the image

const TestimonialCard = ({ content, clientImage, clientName, clientRole }) => {
  return (
    <div className="carousel-item">
      <div className="card-details">
        <div className="col-12">
          {/* Rating Stars */}
          <div className="star-icons">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="bi bi-star-fill"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#FFCC00"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
              </svg>
            ))}
          </div>

          {/* Testimonial Content */}
          <h5>User friendly &amp; Customizable</h5>
          <p className="mb-0 text-center text-md-start">{content}</p>
        </div>

        {/* Client Information */}
        <div className="client-info">
          <div className="client">
            <img className="client-img" src={clientImage} alt="" />
            <div className="client-details">
              <h5 className="mb-0 fw-bold">{clientName}</h5>
              <p className="fw-normal mb-0">{clientRole}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
