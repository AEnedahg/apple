import React from 'react'
import Footer from '../Footer';
import accessoriesHero from '../../images/accessories-hero.png';
import {holidayGifts} from './data';
import {Link} from 'react-router-dom';
import giveWowImageThree from '../../images/give-wow-image-3.png';
import giveWowIcon from '../../images/give-wow-icon.svg';
import { iphoneAccessories } from './data';
import { ipadAccessories } from './data';
import { watchBands } from './data';
import { airTags } from './data';
import { sound } from './data';
const Accessories = () => {
  return (
    <div>
      <div>
        <section className="flex flex-col lg:flex-row gap-x-[50px] bg-[#F5F5F7] lg:px-[90px] gap-y-[50px]">
          <div className="mt-[100px]">
            <h3 className="max-w-[242px] font-bold text-[48px] text-[#1D1D1F] text-center lg:text-left mx-auto">
              Mix. Match. MagSafe.
            </h3>
            <p className="text-[21px] text-[#1D1D1F] mt-[16px] text-center lg:text-left max-w-[278px] mx-auto">
              Snap on a case, wallet, wireless charger, or battery pack.
            </p>
          </div>
          <img src={accessoriesHero} alt="accessories-hero" />
        </section>
        <section className="lg:px-[90px] mt-[50px]">
          <h5 className="text-[40px] text-[#1D1D1F] text-center font-bold">
            Holiday Gifts
          </h5>
          <div className="grid grid-cols-12 grid-rows-12 gap-[20px] mt-[50px] place-items-center">
            {holidayGifts.map(({ id, img, free, title, price }) => {
              return (
                <div
                  key={id}
                  className="col-span-12 row-span-4 lg:col-span-4 lg:row-span-12 max-w-[357px]
                    flex flex-col items-center bg-[#F2F2F2] rounded-[18px] px-[40px] py-[63px] h-full"
                >
                  <img src={img} alt={title} />
                  {free && (
                    <small className="text-[12px] text-[#BF4800] mt-[19px]">
                      {free}
                    </small>
                  )}
                  <p className="text-[14px] font-bold text-[#1D1D1F] mt-[9px]">
                    {title}
                  </p>
                  <small className="mt-[36px] text-[14px] text-[#1D1D1F]">
                    {price}
                  </small>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-[30px]">
            <Link className="text-[17px] text-[#0066CC]" to="/store">
              Shop holiday gifts
            </Link>
          </div>
        </section>
        <section
          className="flex flex-col mt-[100px] pt-[100px] pb-[100px] bg-[#01012A] lg:flex-row-reverse lg:justify-between
      lg:px-[100px] mb-[100px]
      "
        >
          <img
            src={giveWowImageThree}
            alt="give wow image three"
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
        <section className="lg:px-[90px] mt-[50px]">
          <h5 className="text-[40px] text-[#1D1D1F] text-center font-bold">
            Featured iPhone Accessories
          </h5>
          <div className="grid grid-cols-12 grid-rows-12 gap-[20px] mt-[50px] place-items-center">
            {iphoneAccessories.map(
              ({ id, img, newText, title, price, colors }) => {
                return (
                  <div
                    key={id}
                    className="col-span-12 row-span-4 lg:col-span-4 lg:row-span-12 max-w-[357px]
                    flex flex-col items-center bg-[#F2F2F2] rounded-[18px] px-[40px] py-[63px] h-full"
                  >
                    <img src={img} alt={title} />
                    {newText && (
                      <small className="text-[12px] text-[#BF4800] mt-[19px]">
                        {newText}
                      </small>
                    )}
                    <p className="text-[14px] font-bold text-[#1D1D1F] mt-[9px] text-center">
                      {title}
                    </p>
                    <small className="mt-[36px] text-[14px] text-[#1D1D1F]">
                      {price}
                    </small>
                    {colors && (
                      <img src={colors} alt="colors" className="mt-[19px]" />
                    )}
                  </div>
                );
              }
            )}
          </div>
          <div className="text-center mt-[30px]">
            <Link className="text-[17px] text-[#0066CC]" to="/store">
              Shop all iPhone accessories
            </Link>
          </div>
        </section>
        <section className="lg:px-[90px] mt-[50px]">
          <h5 className="text-[40px] text-[#1D1D1F] text-center font-bold">
            Featured iPhone Accessories
          </h5>
          <div className="grid grid-cols-12 grid-rows-12 gap-[20px] mt-[50px] place-items-center">
            {ipadAccessories.map(({ id, img, newText, title, price }) => {
              return (
                <div
                  key={id}
                  className="col-span-12 row-span-4 lg:col-span-4 lg:row-span-12 max-w-[357px]
                    flex flex-col items-center bg-[#F2F2F2] rounded-[18px] px-[40px] py-[63px] h-full"
                >
                  <img src={img} alt={title} />
                  {newText && (
                    <small className="text-[12px] text-[#BF4800] mt-[19px]">
                      {newText}
                    </small>
                  )}
                  <p className="text-[14px] font-bold text-[#1D1D1F] mt-[9px] text-center">
                    {title}
                  </p>
                  <small className="mt-[36px] text-[14px] text-[#1D1D1F]">
                    {price}
                  </small>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-[30px]">
            <Link className="text-[17px] text-[#0066CC]" to="/store">
              Shop all iPad accessories
            </Link>
          </div>
        </section>
        <section className="lg:px-[90px] mt-[50px]">
          <h5 className="text-[40px] text-[#1D1D1F] text-center font-bold">
            Apple Watch Bands
          </h5>
          <div className="grid grid-cols-12 grid-rows-12 gap-[20px] mt-[50px] place-items-center">
            {watchBands.map(({ id, img, newText, title, price, colors }) => {
              return (
                <div
                  key={id}
                  className="col-span-12 row-span-4 lg:col-span-4 lg:row-span-12 max-w-[357px]
                    flex flex-col items-center bg-[#F2F2F2] rounded-[18px] px-[40px] py-[63px] h-full"
                >
                  <img src={img} alt={title} />
                  {newText && (
                    <small className="text-[12px] text-[#BF4800] mt-[19px]">
                      {newText}
                    </small>
                  )}
                  <p className="text-[14px] font-bold text-[#1D1D1F] mt-[9px] text-center">
                    {title}
                  </p>
                  <small className="mt-[36px] text-[14px] text-[#1D1D1F]">
                    {price}
                  </small>
                  {colors && (
                    <img src={colors} alt="colors" className="mt-[19px]" />
                  )}
                </div>
              );
            })}
          </div>
          <div className="text-center mt-[30px]">
            <Link className="text-[17px] text-[#0066CC]" to="/store">
              Shop all bands
            </Link>
          </div>
        </section>
        <section className="lg:px-[90px] mt-[50px]">
          <h5 className="text-[40px] text-[#1D1D1F] text-center font-bold">
            AirTag
          </h5>
          <div className="grid grid-cols-12 grid-rows-12 gap-[20px] mt-[50px] place-items-center">
            {airTags.map(({ id, img, free, title, price, colors }) => {
              return (
                <div
                  key={id}
                  className="col-span-12 row-span-4 lg:col-span-4 lg:row-span-12 max-w-[357px]
                    flex flex-col items-center bg-[#F2F2F2] rounded-[18px] px-[40px] py-[63px] h-full"
                >
                  <img src={img} alt={title} />
                  {free && (
                    <small className="text-[12px] text-[#BF4800] mt-[19px]">
                      {free}
                    </small>
                  )}
                  <p className="text-[14px] font-bold text-[#1D1D1F] mt-[9px]">
                    {title}
                  </p>
                  <small className="mt-[36px] text-[14px] text-[#1D1D1F]">
                    {price}
                  </small>
                  {colors && (
                    <img
                      src={colors}
                      alt="colorsairtagkey"
                      className="mt-[19px]"
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="text-center mt-[30px]">
            <Link className="text-[17px] text-[#0066CC]" to="/store">
              Shop AirTag
            </Link>
          </div>
        </section>
        <section className="lg:px-[90px] mt-[50px] mb-[50px]">
          <h5 className="text-[40px] text-[#1D1D1F] text-center font-bold">
            Sound Essentials
          </h5>
          <div className="grid grid-cols-12 grid-rows-12 gap-[20px] mt-[50px] place-items-center">
            {sound.map(({ id, img, free, newText, title, price, colors }) => {
              return (
                <div
                  key={id}
                  className="col-span-12 row-span-4 lg:col-span-4 lg:row-span-12 max-w-[357px]
                    flex flex-col items-center bg-[#F2F2F2] rounded-[18px] px-[40px] py-[63px] h-full"
                >
                  <img src={img} alt={title} />
                  {free && (
                    <small className="text-[12px] text-[#BF4800] mt-[19px]">
                      {free}
                    </small>
                  )}
                  {newText && (
                    <small className="text-[12px] text-[#BF4800] mt-[19px]">
                      {newText}
                    </small>
                  )}
                  <p className="text-[14px] font-bold text-[#1D1D1F] mt-[9px]">
                    {title}
                  </p>
                  <small className="mt-[36px] text-[14px] text-[#1D1D1F]">
                    {price}
                  </small>
                  {colors && (
                    <img src={colors} alt="colors" className="mt-[19px]" />
                  )}
                </div>
              );
            })}
          </div>
          <div className="text-center mt-[30px]">
            <Link className="text-[17px] text-[#0066CC]" to="/store">
              Shop Headphones and Speakers
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

export default Accessories