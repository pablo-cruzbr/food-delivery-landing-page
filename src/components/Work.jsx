import React from 'react';
import PickMeals from '../assets/pick-meals-image.png';
import ChooseMeals from '../assets/choose-image.png';
import DeliveryMeals from '../assets/delivery-image.png';


const Work = () => {
     const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
        },

        {
            image: ChooseMeals,
            title: "ChooseMeals",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
        },

        {
            image: DeliveryMeals,
            title: "Fast Delivery",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
        },

    ]
  return (
   <div className="work-section-wrapper">
    <div className="work-section-top">
        <p className="prismary-subheading">Trabalhos</p>
        <h1 className="primary-heading">Como funciona</h1>
        <p className="prismary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempora quasi animi quidem reprehenderit praesentium illo.</p>
        <div className="work-section-bottom">
            {workInfoData.map((data) => (
                <div className="work-section-info" key={data.title}>
                    <div className="info-boxes-img-container">
                        <img src={data.image}  alt=""/>
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    </div>
   </div>
  )
}

export default Work;
