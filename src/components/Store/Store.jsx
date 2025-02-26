import React from 'react'

import {additional} from './data';
import { grid } from './data';
import { gridTwo } from './data';
import { gridThree } from './data';
import { iPhones } from './data';
import van from '../../images/van.svg';
import boxOne from '../../images/box-1.svg';
import boxTwo from '../../images/box-2.svg';
import card from '../../images/card.svg';
import holidayAirTag from '../../images/store-card-40-holiday-airtag-202211.png';
import giftBiggest from '../../images/gift-biggest.png';
import {gifts} from './data';
import {experience} from './data';
import {specialStores} from './data';

import Footer from '../Footer';
const Store = () => {
  return (
    <div className="overflow-x-hidden *:overflow-x-hidden">
      <div className="lg:px-[100px] lg:pb-[70px]">
        <section className="lg:mt-[77px] w-full h-auto">
          <div className="flex flex-col lg:flex-row lg:gap-x-[100px]">
            <div className="*:text-[40px] lg:*:text-[48px] p-[20px] *:font-bold lg:max-w-[626px]">
              <h1 className="text-[#1D1D1F]">
                Store.
                <span className="text-[#6E6E73]">
                  The best way to buy the products you love.
                </span>
              </h1>
            </div>
            <div className="mt-[35px] p-[20px] flex flex-col gap-y-[21px]">
              {additional.map(({ id, img, title, link, desti }) => {
                return (
                  <div key={id} className="flex gap-x-[40px]">
                    <img src={img} alt={title} className="h-[50px] w-[50px]" />
                    <div className="flex flex-col">
                      <p className="text-[14px] text-[#1D1D1F]">{title}</p>
                      <a href={desti} className="text-[14px] text-[#0066CC]">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-12 grid-rows-12 mt-[40px] lg:gap-y-[20px]">
            {grid.map(({ id, img, text, textCSS }) => {
              return (
                <div
                  key={id}
                  className="col-span-12 row-span-2 lg:col-span-3 lg:row-span-4 flex flex-col items-center gap-y-[10px]"
                >
                  <img src={img} alt="store-grid" />
                  <p className={textCSS}>{text}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="w-full h-auto pt-[100px] px-[20px]">
          <div className="*:text-[28px] *:font-bold">
            <h3 className="text-[#1D1D1F]">
              The latest.
              <span className="text-[#6E6E73]">
                Take a look at what's new, right now.
              </span>
            </h3>
          </div>
          <div className="flex flex-col items-center gap-y-[30px] lg:flex-row lg:gap-x-[50px] lg:mt-[24px]">
            {gridTwo.map(
              ({
                id,
                subTitle,
                img,
                subTitleCSS,
                title,
                titleCSS,
                text,
                textCSS,
              }) => {
                return (
                  <div
                    key={id}
                    className=" bg-cover bg-center bg-no-repeat w-[280px] h-[700px] p-[30px] w-full lg:h-[500px]
                    lg:bg-contain
                  "
                    style={{ backgroundImage: `url(${img})` }}
                  >
                    <div className="flex flex-col gap-y-[10px] text-center lg:text-left">
                      <p className={subTitleCSS}>{subTitle}</p>
                      <h4 className={titleCSS}>{title}</h4>
                      <p className={textCSS}>{text}</p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </section>
        <section className="px-[20px] mt-[100px]">
          <div className="*:text-[20px] *:lg:text-[28px] *:font-bold mb-[24px]">
            <h4 className="text-[#1D1D1F]">
              The holidays are here.{" "}
              <span className="text-[#6E6E73]">
                And so is the best way to shop.
              </span>
            </h4>
          </div>
          <div className="flex flex-col gap-y-[30px] items-center lg:flex-row lg:gap-x-[30px]">
            {gridThree.map(
              ({
                id,
                subTitle,
                subTitleCSS,
                title,
                titleCSS,
                text,
                textCSS,
                img,
              }) => {
                return (
                  <div
                    key={id}
                    style={{ backgroundImage: `url(${img})` }}
                    className={`w-full h-[700px] bg-cover bg-center p-[30px] flex flex-col gap-y-[10px]
                   ${id === 1 ? "bg-left" : "bg-center"}`}
                  >
                    <div className="text-center lg:text-left flex flex-col gap-y-[10px]">
                      <p className={subTitleCSS}>{subTitle}</p>
                      <h3 className={titleCSS}>{title}</h3>
                      <p className={textCSS}>{text}</p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </section>
        <section className="mt-[100px] px-[20px]">
          <h3 className="text-[20px] text-[#1D1D1F] font-bold">
            The Apple Store difference.{" "}
            <span className="!text-[#6E6E73]">
              Even more reasons to shop with us.
            </span>
          </h3>
          <div className="grid grid-cols-12 grid-rows-12 gap-y-[20px] place-items-center mx-auto mt-[30px]">
            <div
              className="rounded-[18px] shadow-md w-[312px] p-[20px] col-span-12 row-span-4 lg:col-span-6 lg:row-span-6 xl:col-span-4
          xl:row-span-6
          "
            >
              <img src={van} alt="van-icon" />
              <p className="text-[#1D1D1F] text-[24px] font-bold">
                Enjoy <span className="!text-[#68CC45]">two-hour delivery</span>{" "}
                from an Apple Store,{" "}
                <span className="!text-[#68CC45]">free delivery</span>, or{" "}
                <span className="!text-[#68CC45]">easy pickup.</span>
              </p>
            </div>
            <div
              className="rounded-[18px] shadow-md w-[312px] p-[20px] col-span-12 row-span-4 lg:col-span-6 lg:row-span-6 xl:col-span-4
          xl:row-span-6
          "
            >
              <img src={boxOne} alt="box-one-icon" />
              <p className="text-[#1D1D1F] text-[24px] font-bold">
                Free <span className="!text-[#FF0053]">extended returns</span>{" "}
                between now and 1/8/23.°
              </p>
            </div>
            <div
              className="rounded-[18px] shadow-md w-[312px] p-[20px] col-span-12 row-span-4 lg:col-span-6 lg:row-span-6 xl:col-span-4
          xl:row-span-6
          "
            >
              <img src={boxTwo} alt="box-two-icon" />
              <p className="text-[#1D1D1F] text-[24px] font-bold">
                <span className="!text-[#AC39FF]">
                  Trade in your current device.
                </span>{" "}
                Get credit toward a new one.
              </p>
            </div>
            <div
              className="rounded-[18px] shadow-md w-[312px] p-[20px] col-span-12 row-span-4 lg:col-span-6 lg:row-span-6 xl:col-span-4
          xl:row-span-6
          "
            >
              <img src={card} alt="card-icon" />
              <p className="text-[#1D1D1F] text-[24px] font-bold">
                Pay in full or{" "}
                <span className="!text-[#68CC45]">pay over time.</span> Your
                choice.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-[100px] px-[20px]">
          <h3 className="text-[20px] text-[#1D1D1F] font-bold">
            Accessories.
            <span className="!text-[#6E6E73]">
              Put the finishing touch on their favorite gift.
            </span>
          </h3>
          <div className="mt-[20px] grid grid-cols-12 grid-rows-12 place-items-center mx-auto lg:gap-y-[20px]">
            <div
              className="bg-cover bg-center bg-no-repeat col-span-12 row-span-3 w-[300px] h-[500px] p-[30px] rounded-[18px]
            flex flex-col gap-y-[10px] lg:col-span-6 lg:row-span-6
            xl:col-span-4 xl:row-span-6
            "
              style={{ backgroundImage: `url(${holidayAirTag})` }}
            >
              <h6 className="text-[12px] font-bold text-[#F5F5F7]">
                HOLIDAY ACCESSORIES
              </h6>
              <h5 className="text-[20px] font-bold text-white">
                Get all the trimmings.
              </h5>
              <p className="text-[#FFFFFF] text-[17px]">
                Shop accessories for their favorite products.
              </p>
            </div>
            {iPhones.map(
              ({
                id,
                img,
                colors,
                newText,
                newStyle,
                title,
                titleStyle,
                price,
                priceStyle,
              }) => {
                return (
                  <div
                    key={id}
                    className="col-span-12 row-span-3 w-[300px] h-[500px] p-[30px] shadow-md lg:col-span-6 lg:row-span-6
                xl:col-span-4 xl:row-span-6
                "
                  >
                    <div className="flex flex-col mt-[41px]">
                      <img src={img} alt="item-image" />
                      <img src={colors} alt="colors" />
                    </div>
                    <div>
                      <p className={newStyle}>{newText}</p>
                      <h4 className={titleStyle}>{title}</h4>
                      <p className={priceStyle}>{price}</p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </section>
        <section className="mt-[100px] px-[20px]">
          <h3 className="text-[20px] text-[#1D1D1F] font-bold">
            Paired up Gifts.{" "}
            <span className="!text-[#6E6E73]">
              Accessories that perfectly connect with their favorites.
            </span>
          </h3>
          <div className="mt-[20px] grid grid-cols-12 grid-rows-12 place-items-center mx-auto gap-y-[20px] lg:gap-y-[20px]">
            <div
              className="bg-cover bg-left bg-no-repeat col-span-12 row-span-3 w-full max-w-[400px] h-[500px] p-[30px] rounded-[18px]
            flex flex-col gap-y-[10px] lg:col-span-6 lg:row-span-6 shadow-md
            xl:col-span-4 xl:row-span-6
            "
              style={{ backgroundImage: `url(${giftBiggest})` }}
            >
              <h1 className="text-[28px] text-[#1D1D1F] font-bold">
                Better Together.
              </h1>
            </div>
            {gifts.map(
              ({
                id,
                img,
                title,
                titleStyles,
                price,
                priceStyle,
                colors,
                text,
                textStyle,
              }) => {
                return (
                  <div
                    key={id}
                    className="col-span-12 row-span-3 w-[300px] h-[500px] p-[30px] shadow-md lg:col-span-6 lg:row-span-6
                xl:col-span-4 xl:row-span-6 flex flex-col rounded-[18px]"
                  >
                    <img src={img} alt="gift-img" />
                    {colors && <img src={colors} alt="colors" />}
                    {text && <p className={textStyle}>{text}</p>}
                    <div className="mt-auto w-full">
                      <h4 className={titleStyles}>{title}</h4>
                      <p className={priceStyle}>{price}</p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </section>
        <section className="mt-[100px] px-[20px]">
          <h3 className="text-[20px] text-[#1D1D1F] font-bold">
            The Apple experience.{" "}
            <span className="!text-[#6E6E73]">
              Do even more with Apple products and services.
            </span>
          </h3>
          <div className="grid grid-cols-12 grid-rows-12 place-items-center mx-auto mt-[20px] gap-y-[20px] lg:gap-y-[20px] lg:gap-x-[20px]">
            {experience.map(
              ({
                id,
                img,
                subTitle,
                subTitleStyles,
                title,
                titleStyles,
                text,
                textStyles,
              }) => {
                return (
                  <div
                    key={id}
                    className="bg-no-repeat bg-cover bg-center row-span-4 col-span-12 w-full max-w-[400px] h-[500px] p-[10px]
                  lg:col-span-4 lg:row-span-12 shadow-md rounded-[18px]
                  "
                    style={{ backgroundImage: `url(${img})` }}
                  >
                    {subTitle && <p className={subTitleStyles}>{subTitle}</p>}
                    <h3 className={titleStyles}>{title}</h3>
                    {text && <p className={textStyles}>{text}</p>}
                  </div>
                );
              }
            )}
          </div>
        </section>
        <section className="mt-[100px] px-[20px]">
          <h3 className="text-[20px] text-[#1D1D1F] font-bold">
            Special stores.{" "}
            <span className="!text-[#6E6E73]">
              Exclusive savings for businesses, school, and more.
            </span>
          </h3>
          <div className="grid grid-cols-12 grid-rows-12 place-items-center mx-auto mt-[20px] gap-y-[20px] lg:gap-y-[20px] lg:gap-x-[20px]">
            {specialStores.map(
              ({ id, subTitle, subTitleStyles, img, title, titleStyles }) => {
                return (
                  <div
                    key={id}
                    className="bg-no-repeat bg-cover bg-center row-span-4 col-span-12 w-full max-w-[400px] h-[500px] p-[30px]
                  lg:col-span-4 lg:row-span-12 shadow-md rounded-[18px]
                  "
                    style={{ backgroundImage: `url(${img})` }}
                  >
                    <p className={subTitleStyles}>{subTitle}</p>
                    <h3 className={titleStyles}>{title}</h3>
                  </div>
                );
              }
            )}
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

export default Store