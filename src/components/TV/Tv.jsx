import React from 'react'
import {tvHeroGrid} from './data';
import tvHeroTwo from '../../images/tv-hero-two.png';
import tvHeroThree from '../../images/tv-hero-three.png';
import { Link } from 'react-router-dom';
import homePod from '../../images/home-pod.png';
import tv4k from '../../images/tv4k.png';
import tvAndRemote from '../../images/tv-and-remote.png';
import foundation from '../../images/foundation.png';
import homeIcon from '../../images/home-icon.svg';
import {smartHomeGrid} from './data';
import {accessoriesGrid} from './data';
import giveWowImageTwo from '../../images/give-wow-image-2.png';
import giveWowIcon from '../../images/give-wow-icon.svg';
import Footer from '../Footer';
const Tv = () => {
  return (
    <div>
      <div className="lg:px-[90px]">
        <section className="grid grid-cols-12 grid-rows-12 mx-auto place-items-center p-[20px] lg:px-[100px] gap-[10px]">
          {tvHeroGrid.map(({ id, img }) => {
            return (
              <div
                key={id}
                className="col-span-3 row-span-6 flex items-center justify-center w-[58px] h-[75px] lg:col-span-2 lg:row-span-12"
              >
                <img src={img} alt="tv-grid-image" />
              </div>
            );
          })}
        </section>
        <p className="text-white text-center py-[17px] text-[14px] bg-[#0071E3]">
          MLS Season Pass. Stream every Major League Soccer match. Coming soon.*
          Notify me 
        </p>
        <div
          style={{ backgroundImage: `url(${tvHeroTwo})` }}
          className="bg-center w-full bg-cover h-[268px]"
        ></div>
        <section className="px-[20px]">
          <div
            style={{ backgroundImage: `url(${tvHeroThree})` }}
            className="bg-cover bg-center w-full h-[369px]"
          ></div>
          <h1 className="text-[48px] lg:text-[96px] text-center font-bold text-[#1D1D1F]">
            The future hits home.
          </h1>
          <p className="mt-[10px] text-[17px] lg:text-[24px] font-bold text-[#86868B] text-center mx-auto max-w-[985px]">
            Simply connect your favorite devices and transform your house into a
            remarkably smart, convenient, and entertaining home. Control lights,
            locks, and thermostats with your iPhone — or just your voice. Play
            any song, in any room, from anywhere. And elevate movie night with
            theater-like picture and sound. All with the security and privacy of
            Apple.
          </p>
          <small className="mt-[12px] font-bold text-[#86868B] text-center block">
            Stream Luck on the Apple TV app
          </small>
        </section>
        <section className="grid grid-cols-12 grid-rows-12 mt-[50px]">
          <div className="pt-[63px] col-span-12 lg:col-span-6 row-span-6 lg:row-span-12">
            <h4 className="text-[21px] font-bold text-[#1D1D1F] text-center">
              HomePod mini
            </h4>
            <h2 className="text-[36px] font-bold text-[#1D1D1F] max-w-[347px] mx-auto text-center">
              Room-filling sound in every room.
            </h2>
            <p className="mt-[17px] text-[21px] text-center text-[#1D1D1F]">
              $99
            </p>
            <div className="flex gap-x-[28px] items-center mb-[50px] mt-[16px] justify-center">
              <Link to="/store">
                <button className="text-white py-[8px] px-[16px] bg-[#0071E3] rounded-[980px]">
                  Buy
                </button>
              </Link>
              <Link className="text-[21px] text-[#0066CC]" to="/store">
                Learn more
              </Link>
            </div>
            <img src={homePod} alt="home-pod" />
          </div>
          <div className="pt-[63px] col-span-12 lg:col-span-6 row-span-6 lg:row-span-12">
            <p className="text-[12px] text-[#BF4800] text-center">New</p>
            <img
              src={tv4k}
              alt="tv4k"
              className="mx-auto w-[81px] h-[25px] mt-[7px]"
            />
            <h2 className="text-[36px] font-bold text-[#1D1D1F] max-w-[415px] mx-auto text-center">
              The Apple experience. Cinematic in every sense.
            </h2>
            <p className="mt-[17px] text-[21px] text-center text-[#1D1D1F]">
              Starting at $129
            </p>
            <div className="flex gap-x-[28px] items-center mb-[50px] mt-[16px] justify-center">
              <Link to="/store">
                <button className="text-white py-[8px] px-[16px] bg-[#0071E3] rounded-[980px]">
                  Buy
                </button>
              </Link>
              <Link className="text-[21px] text-[#0066CC]" to="/store">
                Learn more
              </Link>
            </div>
            <img src={tvAndRemote} alt="tv-and-remote" />
          </div>
        </section>
        <section className="flex flex-col lg:flex-row gap-y-[40px]">
          <img src={foundation} alt="foundation" className="lg:w-2/3" />
          <div className="flex flex-col items-center justify-center lg:w-1/3 my-auto">
            <img src={homeIcon} alt="home-icon" />
            <p className="text-[21px] text-[#1D1D1F] font-bold mt-[7px]">
              Home
            </p>
            <h4 className="text-[36px] font-bold text-[#1D1D1F] max-w-[327px] mx-auto text-center mt-[6px]">
              The foundation for a smarter home.
            </h4>
            <Link
              className="text-[21px] text-[#0066CC] text-center mt-[14px]"
              to="/store"
            >
              Learn more
            </Link>
          </div>
        </section>
        <section className="mt-[50px]">
          <h1 className="text-[40px] lg:text-[64px] text-center text-[#1D1D1F] max-w-[897px] mx-auto font-bold">
            Every reason to turn your house into a smart home.
          </h1>
          <div className="mt-[30px] grid grid-cols-12 grid-rows-12 place-items-center">
            {smartHomeGrid.map(({ id, text, img, link }) => {
              return (
                <div
                  key={id}
                  className="col-span-12 row-span-6 lg:col-span-4 lg:row-span-12 pt-[34px] flex flex-col items-center
                justify-between max-w-[380px] h-full"
                >
                  <h4 className="max-w-[266px] mx-auto text-[#1D1D1F] font-bold text-[24px] text-center">
                    {text}
                  </h4>
                  <Link
                    className="text-[21px] text-[#0066CC] text-center mt-[14px] mb-[52px]"
                    to="/store"
                  >
                    {link}
                  </Link>
                  <img src={img} alt="smart-home-grid-img" />
                </div>
              );
            })}
          </div>
        </section>
        <section className="mt-[50px]">
          <h1 className="text-[40px] lg:text-[64px] text-center text-[#1D1D1F] max-w-[897px] mx-auto font-bold">
            Accessories. Around your home and across your devices.
          </h1>
          <div className="mt-[30px] grid grid-cols-12 grid-rows-12 place-items-center">
            {accessoriesGrid.map(({ id, text, img, title, link, name }) => {
              return (
                <div
                  key={id}
                  className="col-span-12 row-span-6 lg:col-span-4 lg:row-span-12 pt-[34px] flex flex-col items-center
                justify-between max-w-[380px] h-full"
                >
                  <h6 className="text-[#1D1D1F] font-bold text-[24px] text-center">
                    {title}
                  </h6>
                  <p className="text-center text-[17px] text-[#6E6E73] max-w-[294px] mx-auto">
                    {text}
                  </p>
                  <Link
                    className="text-[17px] text-[#0066CC] text-center mt-[14px] mb-[52px]"
                    to="/accessories"
                  >
                    {link}
                  </Link>
                  <img src={img} alt="accessories-grid-img" />
                  <small className="text-[14px] text-[#6E6E73] text-center">
                    {name}
                  </small>
                </div>
              );
            })}
          </div>
        </section>
        <section
          className="flex flex-col mt-[100px] pt-[100px] pb-[100px] bg-[#01012A] lg:flex-row-reverse lg:justify-between
      lg:px-[100px] mb-[100px]
      "
        >
          <img
            src={giveWowImageTwo}
            alt="give wow image two"
            className="lg:size-[555px]"
          />
          <div className="flex flex-col items-center mt-[40px] lg:justify-center">
            <img src={giveWowIcon} alt="give wow icon" />
            <h1 className="lg:text-[90px] text-[40px] text-white font-bold mt-[30px] lg:text-center">
              Give WOW.
            </h1>
            <Link to="/store" className="text-[21px] text-[#2997FF] mt-[30px]">
              Shop the Holiday Gift Guide 
            </Link>
          </div>
        </section>
      </div>
      <Footer
        classB="text-[12px] text-bold leading-[0.12px] text-[#1D1D1F]"
        classDiv="*:text-[#424245] *:text-[12px]"
      />
    </div>
  );
}

export default Tv