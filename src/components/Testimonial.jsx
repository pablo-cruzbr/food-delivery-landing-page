import React from 'react';
import {AiFillStar} from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem unde asperiores vero obcaecati laudantium quo dicta in illum quibusdam.
        </p>
      </div>

      <div className="testimonial-section-bottom">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vero magnam eligendi? Quas sequi similique natus vitae perspiciatis.</p>

      <div className="textimonials-stars-container">
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
      </div>
      <h2>Pablo Cruz</h2>
      </div>
    </div>
  )
}

export default Testimonial
