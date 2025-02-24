import React from 'react';
import { Link } from 'react-router-dom';

import { heroGrid } from './data';
import { heroGridTwo } from './data';
import { carousel } from './data';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../Footer";

const Home = () => {
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 3000,
   };
  return (
    <div>
      <div
        className="bg-[url('https://res.cloudinary.com/dmrr92p4s/image/upload/v1737770720/apple/home/cbl3mpn1snnmzdcd8rap.png')]
      bg-cover w-[100vw] h-[600px] bg-no-repeat bg-bottom
    "
      ></div>
      <div
        className="bg-[url('https://res.cloudinary.com/dmrr92p4s/image/upload/v1737777809/apple/home/g4cnp4ashxtqw3mlbd9f.png')]
      bg-cover w-[100vw] h-[600px] bg-no-repeat bg-top z-1 relative
    "
      >
        <h4
          className="font-bold text-[24px] lg:text-[32px] text-[#DED2B9] tracking-[-0.6px] absolute lg:top-[13%] lg:left-[20%] left-[5%]
        text-center"
        >
          Will <br className="lg:hidden" />
          Ferrell
        </h4>
        <h4
          className="font-bold text-[24px] lg:text-[32px] text-[#DED2B9] tracking-[-0.6px] absolute lg:top-[13%] lg:right-[15%] right-[5%]
        text-center"
        >
          Ryan <br className="lg:hidden" />
          Reynolds
        </h4>
        <p
          className="absolute left-[50%] -translate-x-1/2 bottom-[60px] text-[#F5F5F7] text-center
        text-[20px] lg:text-[28px]
        "
        >
          A new musical comedy based on a holiday classic.
        </p>
        <p
          className="absolute left-[50%] -translate-x-1/2 bottom-[30px] text-[#F5F5F7] text-center
        text-[20px] lg:text-[28px]
        "
        >
          Now streaming
        </p>
      </div>
      <div
        className="bg-[url('https://res.cloudinary.com/dmrr92p4s/image/upload/v1737781283/apple/home/fuja2zarzojyghmnyn9l.png')]
      bg-cover w-[100vw] h-[1000px] bg-no-repeat bg-top z-1 relative
    "
      >
        <h1
          className="text-[30px] lg:text-[56px] tracking-[-0.28px] font-bold text-[#1D1D1F] absolute left-[50%] -translate-x-1/2
        top-[30px] "
        >
          iPhone 14
        </h1>
        <p
          className="text-[16px] lg:text-[28px] text-[#1D1D1F] absolute left-[50%] -translate-x-1/2
        top-[80px] lg:top-[100px]"
        >
          Big and bigger.
        </p>
        <div
          className="*:text-[16px] *:text-[#0066CC] text-[16px] lg:text-[21px] absolute left-[50%] -translate-x-1/2
        top-[120px] flex text-center gap-x-[5px] lg:top-[140px]"
        >
          <Link to="/iphone">Learn more</Link>
          <Link to="/store">Buy</Link>
        </div>
      </div>
      <div className="grid grid-cols-12 grid-rows-12 h-[1800px] lg:h-[1200px] w-[100vw] p-[10px]">
        {heroGrid.map((item) => {
          return (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.img})` }}
              className="bg-cover bg-center col-span-12 row-span-3 lg:col-span-6 lg:row-span-6 text-center flex flex-col items-center
                pt-[30px]
                "
            >
              {item.icon && <img src={item.icon} alt={item.text} />}
              <h6 className={item.titleCSS}>{item.title}</h6>
              <p className={item.textCSS}>{item.text}</p>
              <div className="flex gap-x-[10px] *:lg:text-[17px] *:text-[14px] *:text-[#2997FF]">
                <Link to={item.destiOne}>{item.linkOne}</Link>
                <Link to={item.destiTwo}>{item.linkTwo}</Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-12 grid-rows-12 h-[1200px] lg:h-[600px] w-[100vw] p-[10px]">
        {heroGridTwo.map(
          ({
            id,
            img,
            icon,
            text,
            textCSS,
            linkOne,
            destiOne,
            linkTwo,
            destiTwo,
          }) => {
            return (
              <div
                key={id}
                style={{ backgroundImage: `url(${img})` }}
                className="bg-cover bg-center col-span-12 row-span-6 lg:col-span-6 lg:row-span-12 text-center flex flex-col items-center
                pt-[30px]
                "
              >
                <img src={icon} alt={text} />
                <p className={textCSS}>{text}</p>
                <div className="flex gap-x-[10px] *:lg:text-[17px] *:text-[14px] *:text-[#2997FF]">
                  <Link to={destiOne}>{linkOne}</Link>
                  <Link to={destiTwo}>{linkTwo}</Link>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div
        className="carousel-container w-[100vw] h-[600px] mx-auto lg:h-[800px]"
      >
        <Slider {...settings}>
          {carousel.map(({ id, img, text, textCSS, button, desti }) => (
            <div key={id} className="relative">
              <div
                className={`h-[400px] lg:h-[100vh] bg-center bg-cover w-full ${
                  id === 3 ? "lg:bg-top" : "lg:bg-center"
                }`}
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundPosition: id === 5 ? "10% center" : "center center",
                }}
              >
                <div
                  className={`absolute bottom-4 left-1 lg:bottom-[40px] lg:left-[40px] flex lg:flex-row gap-[10px] lg:gap-[40px] items-center
                  ${id === 3 || id === 4 || id === 5 ? "flex-col" : "flex-row"}
                  `}
                >
                  <Link to={desti}>
                    <button className="py-[8px] px-[8px] lg:px-[22px] rounded-[980px] text-[#1D1D1F] text-[10px] lg:text-[14px] bg-white">
                      {button}
                    </button>
                  </Link>
                  <p className={textCSS}>{text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Footer
        classB="text-[12px] text-bold leading-[0.12px] text-[#1D1D1F]"
        classDiv="*:text-[#424245] *:text-[12px]"
      />
    </div>
  );
}

export default Home;