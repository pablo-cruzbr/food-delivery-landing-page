import React from 'react';
import Navbar from './TempNavbar';
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className='home-container'>
     <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
           Sua Comida Favorita Entregue Quente e Fresca
          </h1>
          <p className="primary-text">
            Nossos chefs cuidam de todo o preparo, como descascar, picar e marinar, para que você possa desfrutar de uma refeição saudável e feita na hora.
          </p>
          <button className="secondary-button">
            Peça Agora <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>

 
    </div>
  )
}

export default Home
