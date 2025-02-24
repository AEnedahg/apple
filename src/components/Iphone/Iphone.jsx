import React from 'react'
import { Link } from 'react-router-dom';
import { phoneGrid } from './data';
import iphoneFourteen from '../../images/iphone14.svg';
import bigAndBigger from '../../images/big-and-bigger.svg';
import iphoneHero from '../../images/iphoneHero.png';
import iphoneFourteenPro from '../../images/iphone14Pro.svg';
import proBeyond from '../../images/proBeyond.svg';
import iphoneSectionTwo from '../../images/iphoneSectionTwo.png';
import iphoneSectionThree from '../../images/iphoneSectionThree.png';
import iphonese from '../../images/iphonese.svg';
import love from '../../images/love.svg';
import iphoneSectionFour from '../../images/iphoneSectionFour.png';
import {iphones} from './data';
import giveWowImage from '../../images/give-wow-image.png';
import giveWowIcon from '../../images/give-wow-icon.svg';
import { ways } from './data';
import trade from '../../images/trade.png';
import daily from '../../images/daily.png';
import tradeDailyBottom from '../../images/trade-daily-bottom.png';
import accessoriesPouch from '../../images/accessories-pouch.png';
import accessoriesAirTag from '../../images/accessories-air-tag.png';
import accessoriesHeadphones from '../../images/accessories-headphone.png';
import {anotherGrid} from './data';
import what from '../../images/what-makes-it-iphone.png';
import simple from '../../images/simple.png';
import one from '../../images/one.png';
import oneIcon from '../../images/one-icon.svg';
import tvIcon from '../../images/tv-icon.svg';
import musicIcon from '../../images/music-icon.svg';
import tv from '../../images/tv.png';
import music from '../../images/music.png';
import news from '../../images/news.png';
import newsIcon from '../../images/news-icon.svg';
import arcade from '../../images/arcade.svg';
import arcadeIcon from '../../images/arcade-icon.svg';
import fitness from '../../images/fitness.png';
import fitnessIcon from '../../images/fitness-icon.svg';
import gift from '../../images/gift.png';
import giftIcon from '../../images/gift-icon.svg';
import researchApp from '../../images/research-app.png';
import Footer from '../Footer';
const Iphone = () => {
  return (
    <div className="lg:pb-[70px]">
      <section className="grid grid-cols-12 grid-rows-12 mx-auto place-items-center p-[20px] lg:px-[100px]">
        {phoneGrid.map(({ id, img }) => {
          return (
            <div
              key={id}
              className="col-span-3 row-span-6 lg:col-span-2 lg:row-span-6 xl:col-span-1 xl:row-span-12"
            >
              <img src={img} alt="iphone-grid-image" />
            </div>
          );
        })}
      </section>
      <section className="mt-[100px]">
        <div className="flex flex-col items-center">
          <p className="text-[17px] text-[#6E6E73] mb-[12px]">New</p>
          <img src={iphoneFourteen} alt="iphone14" className="mb-[16px]" />
          <img src={bigAndBigger} alt="bigAndBigger" className="mb-[29px]" />
          <p className="text-[21px] text-[#1D1D1F] text-center mb-[31px]">
            From $33.29/mo. for 24 mo. or $799 before trade-in1
          </p>
          <div className="flex gap-x-[28px] items-center mb-[50px]">
            <Link to="/store">
              <button className="text-white py-[8px] px-[16px] bg-[#0071E3] rounded-[980px]">
                Buy
              </button>
            </Link>
            <Link className="text-[21px] text-[#0066CC]" to="/store">
              Learn more
            </Link>
          </div>
          <img src={iphoneHero} alt="iphoneHero" />
        </div>
      </section>
      <section className="bg-black p-[20px] flex flex-col items-center lg:px-[100px]">
        <p className="text-[#86868B] text-[17px] mb-[12px]">New</p>
        <img src={iphoneFourteenPro} alt="iphone14Pro" className="mb-[16px]" />
        <img src={proBeyond} alt="proBeyond" className="mb-[29px]" />
        <p className="text-[21px] text-[#F5F5F7] mb-[31px] text-center">
          From $41.62/mo. for 24 mo. or $999 before trade-in1
        </p>
        <div className="flex gap-x-[28px] items-center mb-[50px]">
          <Link to="/store">
            <button className="text-white py-[8px] px-[16px] bg-[#0071E3] rounded-[980px]">
              Buy
            </button>
          </Link>
          <Link className="text-[21px] text-[#0066CC]" to="/store">
            Learn more
          </Link>
        </div>
        <img src={iphoneSectionTwo} alt="iphoneSectionTwo" />
      </section>
      <section className="p-[20px] flex flex-col lg:px-[100px] lg:flex-row-reverse">
        <img src={iphoneSectionThree} alt="iphoneSectionThree" />
        <div className="flex flex-col items-center mt-[50px] lg:my-auto lg:mx-auto">
          <img src={iphonese} alt="iphonese" className="mb-[13px]" />
          <img src={love} alt="love" className="mb-[25px]" />
          <p className="text-[21px] text-[#1D1D1F] mb-[26px] text-center">
            From $17.87/mo. for 24 mo. or $429 before trade-in1
          </p>
          <div className="flex gap-x-[28px] items-center mb-[50px]">
            <Link to="/store">
              <button className="text-white py-[8px] px-[16px] bg-[#0071E3] rounded-[980px]">
                Buy
              </button>
            </Link>
            <Link className="text-[21px] text-[#0066CC]" to="/store">
              Learn more
            </Link>
          </div>
        </div>
      </section>
      <section
        className="h-[600px] bg-cover bg-right"
        style={{ backgroundImage: `url(${iphoneSectionFour})` }}
      >
        <div className="flex flex-col justify-center items-center h-full lg:items-start lg:ml-[100px]">
          <p className="text-white font-bold text-[18px] lg:text-[24px] mb-[20px] lg:text-left">
            A Guided Tour of
          </p>
          <h1
            className="font-bold text-[36px] lg:text-[48px] text-white w-[297px] text-center mb-[30px]
            lg:text-left lg:w-[400px]
          "
          >
            iPhone 14 & iPhone 14 Pro
          </h1>
          <button className="text-black bg-white py-[8px] px-[16px] rounded-[980px]">
            Watch the film
          </button>
        </div>
      </section>
      <section className="flex flex-col mt-[100px]">
        <h1 className="text-[30px] lg:text-[48px] font-bold text-[#1D1D1F] text-center">
          Which iPhone is right for you?
        </h1>
        <div className="flex flex-col items-center mt-[50px] gap-y-[40px] p-[20px] lg:flex-row lg:px-[100px] lg:justify-between">
          {iphones.map(
            ({
              id,
              img,
              text,
              textStyles,
              colors,
              title,
              titleStyles,
              textTwo,
              textTwoStyles,
              textThree,
              textThreeStyles,
            }) => {
              return (
                <div key={id}>
                  <img src={img} alt="iphone-pic" className="mb-[20px]" />
                  <div className="flex flex-col items-center">
                    <img
                      src={colors}
                      alt="iphone-colors"
                      className="mb-[10px]"
                    />
                    <p className={textStyles}>{text}</p>
                    <h5 className={titleStyles}>{title}</h5>
                    <p className={textTwoStyles}>{textTwo}</p>
                    <p className={textThreeStyles}>{textThree}</p>
                  </div>
                  <div className="flex flex-col gap-y-[20px] mt-[40px] items-center">
                    <Link to="/store">
                      <button className="text-white bg-[#0071E3] px-[11px] py-[5px] rounded-[980px]">
                        Buy
                      </button>
                    </Link>
                    <Link to="/support" className="text-[#0066CC] text-[14px]">
                      Learn more
                    </Link>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
      <section
        className="flex flex-col mt-[100px] pt-[100px] pb-[100px] bg-[#01012A] lg:flex-row-reverse lg:justify-between
      lg:px-[100px]
      "
      >
        <img src={giveWowImage} alt="give wow image" />
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
      <section className="flex flex-col mt-[100px] px-[20px]">
        <h1 className="text-[30px] lg:text-[56px] text-[#1D1D1F] text-center font-bold">
          Ways to Buy iPhone
        </h1>
        <p className="text-[24px] text-[#1D1D1F] text-center mt-[30px]">
          Special carrier deals at Apple
        </p>
        <h1 className="text-[30px] lg:text-[56px] text-[#1D1D1F] text-center font-bold mt-[30px]">
          Save up to $1000 on the newest iPhone after trade-in.6
        </h1>
        <div className="grid grid-cols-12 grid-rows-12 mt-[70px] lg:gap-y-[20px]">
          {ways.map(({ id, img, text, textStyles }) => {
            return (
              <div
                key={id}
                className="flex flex-col items-center gap-y-[30px] col-span-12 row-span-3 lg:col-span-6 lg:row-span-6 xl:col-span-3 
                  xl:row-span-12 lg:w-[300px]"
              >
                <img src={img} alt="ways-img" />
                <p className={textStyles}>{text}</p>
              </div>
            );
          })}
        </div>
        <Link to="/store" className="text-center mt-[30px]">
          <button className="text-white px-[31px] py-[18px] rounded-[980px] bg-[#0071E3]">
            Find your deal
          </button>
        </Link>
        <p className="text-[17px] text-[#1D1D1F] text-center mt-[30px]">
          Our Specialists can help you shop — online or in store.
          <Link to="/support" className="!text-[#0066CC]">
            Connect with an iPhone Specialist
          </Link>
        </p>
      </section>
      <section className="mt-[50px] grid grid-cols-12 grid-rows-12 gap-y-[30px]">
        <div
          className="py-[40px] px-[20px] col-span-12 row-span-4 shadow-md flex flex-col items-center xl:col-span-6 xl:row-span-12
        xl:gap-x-[20px] xl:mx-[50px]
        "
        >
          <h1 className="text-[30px] lg:text-[48px] text-[#1D1D1F] text-center font-bold mb-[30px] max-w-[550px]">
            Trade in your smartphone for credit.
          </h1>
          <p className="lg:text-[21px] text-[17px] text-[#1D1D1F] text-center mb-[30px] max-w-[550px]">
            With Apple Trade In, you can get credit toward a new iPhone when you
            trade in an eligible smartphone.7 It's good for you and the planet.
          </p>
          <div className="flex justify-center mb-[40px]">
            <Link className="text-[21px] text-[#0066CC]" to="/store">
              Learn more
            </Link>
          </div>
          <img className="mx-auto" src={trade} alt="trade-img" />
        </div>
        <div
          className="py-[40px] px-[20px] col-span-12 row-span-4 shadow-md flex flex-col items-center xl:col-span-6 xl:row-span-12
        xl:gap-x-[20px] xl:mx-[50px]
        "
        >
          <h1 className="text-[30px] lg:text-[48px] text-[#1D1D1F] text-center font-bold mb-[30px] max-w-[550px]">
            Get 3% Daily Cash back with Apple Card. Get 3% Daily Cash
          </h1>
          <p className="lg:text-[21px] text-[17px] text-[#1D1D1F] text-center mb-[30px] max-w-[550px]">
            And pay for your new iPhone over 24 months, interest-free when you
            choose to check out with Apple Card Monthly Installments.*
          </p>
          <div className="flex justify-center mb-[40px]">
            <Link className="text-[21px] text-[#0066CC]" to="/store">
              Learn more
            </Link>
          </div>
          <img src={daily} alt="daily-img" />
        </div>
        <div
          className="col-span-12 row-span-4 bg-left bg-cover h-[600px] lg:row-span-6 flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${tradeDailyBottom})`,
          }}
        >
          <h1 className="text-[30px] text-[#1D1D1F] font-bold text-center max-w-[450px] mb-[30px]">
            Why Apple is the best place to buy iPhone.
          </h1>
          <p className="text-[17px] text-w[#1D1D1F] text-center max-w-[450px]">
            You can choose a payment option that works for you, pay less with a
            trade-in, connect your new iPhone to your carrier, and get set up
            quickly. You can also chat with a Specialist anytime.
          </p>
          <div className="flex justify-center mt-[20px]">
            <Link className="text-[21px] text-[#0066CC]" to="/store">
              Learn more
            </Link>
          </div>
        </div>
      </section>
      <section className="mt-0 lg:mt-[100px] xl:px-[100px]">
        <h1 className="text-[30px] lg:text-[56px] text-[#1D1D1F] text-center font-bold mb-[30px] max-w-[550px] mx-auto lg:mb-[50px]">
          Featured accessories
        </h1>
        <div className="flex flex-col gap-y-[50px] xl:flex-row xl:justify-between">
          <div className="flex flex-col items-center xl:justify-center">
            <h3 className="text-[24px] lg:text-[30px] text-[#1D1D1F] text-center font-bold mb-[10px]">
              MagSafe
            </h3>
            <p className="max-w-[300px] text-[17px] lg:text-[21px] text-[#1D1D1F] text-center">
              Snap on a magnetic case, wallet, or both. And get faster wireless
              charging.
            </p>
            <div className="flex justify-center mt-[20px]">
              <Link className="text-[21px] text-[#0066CC]" to="/accessories">
                Shop MagSafe accessories
              </Link>
            </div>
          </div>
          <img src={accessoriesPouch} alt="accessories-pouch" />
        </div>
        <div className="mt-[10px] lg:mt-0 flex flex-col gap-y-[50px] xl:flex-row xl:justify-between">
          <img src={accessoriesAirTag} alt="acessories-air-tag" />
          <div className="flex flex-col items-center xl:justify-center mt-[40px]">
            <h3 className="text-[24px] lg:text-[30px] text-[#1D1D1F] text-center font-bold mb-[10px]">
              AirTag
            </h3>
            <p className="max-w-[300px] text-[17px] lg:text-[21px] text-[#1D1D1F] text-center">
              Attach one to your keys. Put another in your backpack. If they’re
              misplaced, just use the Find My app.
            </p>
            <div className="flex justify-center mt-[20px] gap-x-[40px]">
              <Link className="text-[21px] text-[#0066CC]" to="/store">
                Buy
              </Link>
              <Link className="text-[21px] text-[#0066CC]" to="/support">
                Learn more
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[30px]">
          <h1 className="text-[20px] lg:text-[48px] font-bold text-center mx-auto text-[#1D1D1F] w-[300px] mb-[40px]">
            Magic runs in the family.
          </h1>
          <img src={accessoriesHeadphones} alt="accessories-headphones" />
        </div>
        <div className="flex justify-center mt-[40px]">
          <Link className="text-[21px] text-[#0066CC]" to="/support">
            Shop all iPhone accessories 
          </Link>
        </div>
      </section>
      <section className="grid grid-cols-12 grid-rows-12 mt-[100px] gap-y-[35px]">
        {anotherGrid.map(({ id, img, bold, boldStyles, text, textStyles }) => {
          return (
            <div
              key={id}
              className="col-span-12 row-span-4 flex flex-col items-center gap-y-[20px] max-w-[370px] mx-auto xl:col-span-4
                xl:row-span-12
                "
            >
              <img className="w-[51px]" src={img} alt="icon" />
              <p className={boldStyles}>{bold}</p>
              <p className={textStyles}>{text}</p>
              <div className="flex justify-center">
                <Link className="text-[21px] text-[#0066CC]" to="/store">
                  Learn more
                </Link>
              </div>
            </div>
          );
        })}
      </section>
      <section className="mt-[100px]">
        <h1 className="text-[30px] lg:text-[56px] text-[#1D1D1F] text-center font-bold mb-[30px] mx-auto lg:mb-[100px]">
          What makes an iPhone an iPhone?
        </h1>
        <div
          className="h-[600px] bg-cover bg-center"
          style={{ backgroundImage: `url(${what})` }}
        ></div>
      </section>
      <section className="mt-[100px] max-w-[675px] mx-auto">
        <h1 className="max-w-[675px] text-[30px] lg:text-[56px] text-[#1D1D1F] text-center font-bold mb-[30px] mx-auto">
          Switching to iPhone is super simple.
        </h1>
        <div className="flex justify-center">
          <Link className="text-[21px] text-[#0066CC] mb-[50px]" to="/store">
            Learn more
          </Link>
        </div>
        <img src={simple} alt="simple" />
      </section>
      <section className="mt-[100px] lg:px-[20px]">
        <h1 className="text-[30px] lg:text-[56px] text-[#1D1D1F] text-center font-bold mb-[30px] mx-auto lg:mb-[100px]">
          What makes an iPhone an iPhone?
        </h1>
        <div className="grid grid-cols-12 grid-rows-12 xl:pr-[100px] gap-y-[30px] gap-x-[30px]">
          <div className="col-span-12 row-span-4 mt-[70px] flex flex-col 2xl:flex-row">
            <img src={one} alt="one" className="mx-auto" />
            <div className="mt-[30px] lg:flex lg:flex-col lg:justify-center lg:items-center">
              <img src={oneIcon} alt="one-icon" className="w-[200px] mx-auto" />
              <h5 className="font-bold text-[28px] text-[#1D1D1F] text-center mt-[30px] mx-auto w-[300px] max-w-[405px]">
                Bundle up to six Apple services. And enjoy more for less.
              </h5>
              <div className="flex justify-center mt-[20px] gap-x-[50px]">
                <Link className="text-[21px] text-[#0066CC]" to="/store">
                  Try it free8
                </Link>
                <Link className="text-[21px] text-[#0066CC]" to="/support">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-black col-span-12 row-span-4 lg:col-span-6 py-[60px]">
            <img src={tvIcon} alt="tv-icon" className="mb-[30px] mx-auto" />
            <p className="max-w-[284px] text-white text-[17px] lg:text-[21px] mb-[30px] text-center mx-auto">
              Get 3 months of Apple TV+ free when you buy an iPhone.9
            </p>
            <div className="flex justify-center mt-[20px] gap-x-[50px] mb-[80px]">
              <Link className="text-[21px] text-[#0066CC]" to="/store">
                Try it free
              </Link>
              <Link className="text-[21px] text-[#0066CC]" to="/support">
                Learn more
              </Link>
            </div>
            <img src={tv} alt="tv" className="mx-auto" />
          </div>
          <div className="col-span-12 row-span-4 lg:col-span-6 py-[60px]">
            <img
              src={musicIcon}
              alt="music-icon"
              className="mb-[30px] mx-auto"
            />
            <p className="max-w-[284px] text-[#1D1D1F] text-[17px] lg:text-[21px] mb-[30px] text-center mx-auto">
              Over 100 million songs. <br />
              Start listening for free today.
            </p>
            <div className="flex justify-center mt-[20px] gap-x-[50px] mb-[80px] lg:mb-[120px]">
              <Link className="text-[21px] text-[#0066CC]" to="/store">
                Try it free10
              </Link>
              <Link className="text-[21px] text-[#0066CC]" to="/support">
                Learn more
              </Link>
            </div>
            <img src={music} alt="music" className="mx-auto" />
          </div>
          <div
            className="col-span-12 row-span-4 lg:col-span-6 py-[60px] bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${news})` }}
          >
            <img src={newsIcon} alt="news-icon" className="mb-[30px] mx-auto" />
            <p className="max-w-[284px] text-white text-[17px] lg:text-[21px] mb-[30px] text-center mx-auto">
              Hundreds of magazines and <br />
              leading newspapers. One subscription.
            </p>
            <div className="flex justify-center mt-[20px] gap-x-[50px] mb-[80px] lg:mb-[120px]">
              <Link className="text-[21px] text-white" to="/store">
                Try it free11
              </Link>
              <Link className="text-[21px] text-white" to="/support">
                Learn more
              </Link>
            </div>
          </div>
          <div
            className="col-span-12 row-span-4 lg:col-span-6 py-[60px] bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${arcade})` }}
          >
            <img
              src={arcadeIcon}
              alt="arcade-icon"
              className="mb-[30px] mx-auto"
            />
            <p className="max-w-[284px] text-[#1D1D1F] text-[17px] lg:text-[21px] mb-[30px] text-center mx-auto">
              Get 3 months of Apple Arcade free
              <br />
              when you buy an iPhone.
            </p>
            <div className="flex justify-center mt-[20px] gap-x-[50px] mb-[80px] lg:mb-[120px]">
              <Link className="text-[21px] text-[#0066CC]" to="/store">
                Try it free12
              </Link>
              <Link className="text-[21px] text-[#0066CC]" to="/support">
                Learn more
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 grid-rows-12">
          <div className="col-span-12 row-span-6 lg:col-span-6 py-[60px]">
            <img
              src={fitnessIcon}
              alt="fitness-icon"
              className="mb-[30px] mx-auto"
            />
            <p className="max-w-[284px] text-[#1D1D1F] text-[17px] lg:text-[21px] mb-[30px] text-center mx-auto">
              Fitness for everyone.
              <br />
              Now all you need is iPhone.
            </p>
            <div className="flex justify-center mt-[20px] gap-x-[50px] mb-[80px] lg:mb-[120px]">
              <Link className="text-[21px] text-[#0066CC]" to="/support">
                Learn more
              </Link>
              <Link className="text-[21px] text-[#0066CC]" to="/store">
                Try it free13
              </Link>
            </div>
            <img src={fitness} alt="fitness" className="mx-auto" />
          </div>
          <div className="col-span-12 row-span-6 lg:col-span-6 py-[60px]">
            <img src={giftIcon} alt="gift-icon" className="mb-[30px] mx-auto" />
            <p className="max-w-[284px] text-[#1D1D1F] text-[17px] lg:text-[21px] mb-[30px] text-center mx-auto">
              For everything and everyone.
            </p>
            <div className="flex justify-center mt-[20px] gap-x-[50px] mb-[80px] lg:mb-[120px]">
              <Link className="text-[21px] text-[#0066CC]" to="/support">
                Learn more
              </Link>
              <Link className="text-[21px] text-[#0066CC]" to="/store">
                Buy
              </Link>
            </div>
            <img src={gift} alt="gift" className="mx-auto" />
          </div>
          <div className="col-span-12 row-span-6 px-[10px]">
            <div className="mb-[50px]">
              <h1 className="text-[30px] lg:text-[48px] font-bold text-[#1D1D1F] mb-[10px] text-center">
                Introducing the Apple
              </h1>
              <h1 className="text-[30px] lg:text-[48px] font-bold text-[#1D1D1F] text-center">
                Research app.
              </h1>
              <p className="text-[17px] lg:text-[21px] text-[#1D1D1F] mt-[30px] text-center">
                The future of health research is you.
              </p>
              <div className="flex justify-center mt-[20px]">
                <Link className="text-[21px] text-[#0066CC]" to="/support">
                  Learn more
                </Link>
              </div>
            </div>
            <img src={researchApp} alt="researchApp" className="mx-auto" />
          </div>
        </div>
      </section>
      <Footer
        classB="text-[12px] text-bold leading-[0.12px] text-[#1D1D1F]"
        classDiv="*:text-[#424245] *:text-[12px]"
      />
    </div>
  );
}

export default Iphone