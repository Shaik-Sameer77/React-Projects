import React from "react";
import TestimonialCard from "./TestimonialCard";
import "../styles/testimonials.scss";
import img from "../assets/illustrations/testimonial.png";
import client1 from "../assets/gallery/user.png";
import client2 from "../assets/gallery/user-1.png";
import client3 from "../assets/gallery/user-2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";



const Testimonials = () => {
  const testimonials = [
    {
      content:
        "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
      clientImage: client1,
      clientName: "Zoltan Nemeth",
      clientRole: "CEO of Pixer Lab",
    },
    {
      content:
        "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
      clientImage: client2,
      clientName: "Jhon Doe",
      clientRole: "Web Developer",
    },
    {
      content:
        "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
      clientImage: client3,
      clientName: "Viezh Robert",
      clientRole: "UI/UX Designer",
    },
  ];

  return (
    <section className="testimonial" id="testimonials">
      <div className="container-lg">
        <div className="row">
          <div className="image">
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="details">
            <h6 className="h6">
              Meet Client Satisfaction <br />
              by using product
            </h6>
            <p className="para">
              The rise of mobile devices transforms the way we consume.Elevant
              channels such as Facebook.
            </p>
            <div className="carousel">
              <div className="carousel-inner">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper"
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <TestimonialCard key={index} {...testimonial} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
