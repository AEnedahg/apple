import React from 'react'
import supportHero from '../../images/supportHero.png';
import Footer from "../Footer";
import { supportIcons } from './data';
import { supportHeroGrid } from './data';
import {Link} from 'react-router-dom';
import updateiOS from '../../images/updateiOS.png';
import getSupportHero from '../../images/getSupportHero.png';
import tradeApple from '../../images/tradeApple.png';
import accidents from '../../images/accidents.png';
import mySupport from '../../images/mySupport.png';
import giftCards from '../../images/gitfCard.png';
const Support = () => {
  return (
    <div className="overflow-x-hidden *:overflow-x-hidden">
      <div>
        <section
          className="bg-cover bg-center h-[540px] relative"
          style={{ backgroundImage: `url(${supportHero})` }}
        >
          <h3 className="text-white text-[48px] absolute left-1/2 -translate-x-1/2 top-[100px] text-center">
            Apple Support
          </h3>
        </section>
        <section className="grid grid-cols-12 grid-rows-12 mx-auto place-items-center p-[20px] lg:px-[100px]">
          {supportHeroGrid.map(({ id, img }) => {
            return (
              <div
                key={id}
                className="col-span-4 row-span-6 lg:col-span-2 lg:row-span-6 xl:col-span-2 xl:row-span-12"
              >
                <img src={img} alt="iphone-grid-image" />
              </div>
            );
          })}
        </section>
        <section className="grid grid-cols-12 grid-rows-12 place-items-center gap-[20px] mt-[50px]">
          {supportIcons.map(({ id, img, link }) => {
            return (
              <div
                key={id}
                className="col-span-12 row-span-4 lg:col-span-4 lg:row-span-12
              max-w-[327px] flex flex-col items-center gap-y-[16px]"
              >
                <img src={img} alt="support-icon" />
                <Link
                  to="/support"
                  className="text-[15px] text-[#0070C9] text-center mt-[18px]"
                >
                  {link}
                </Link>
              </div>
            );
          })}
        </section>
        <section className="mt-[50px] lg:flex lg:max-w-[817px] lg:mx-auto">
          <div className="flex justify-center">
            <img
              src={updateiOS}
              alt="update iOS"
              className="max-w-[400px] mx-auto block"
            />
          </div>
          <div className=" max-w-[409px] mx-auto mt-[50px] lg:mt-0">
            <h1 className="text-[40px] text-[#333333]">Update to iOS 16</h1>
            <p className="text-[22px] font-light text-[#333333]">
              Explore all-new personalization features, privacy and security
              enhancements, and more ways to communicate seamlessly.
            </p>
            <div className="mt-[30px]">
              <Link to="/support" className="text-[15px] text-[#0070C9]">
                Learn how to get the latest 
              </Link>
            </div>
          </div>
        </section>
        <section
          style={{ backgroundImage: `url(${getSupportHero})` }}
          className="bg-cover bg-center h-[450px] relative mt-[50px]"
        >
          <div className="absolute top-1/2 left-1/2 -translate-1/2 max-w-[343px] lg:left-[400px]">
            <h1 className="text-white text-[40px]">Get Support</h1>
            <p className="text-white text-[17px] mt-[12px]">
              Choose a product and we'll find you the best solution.
            </p>
            <div className="mt-[19px] flex gap-y-[19px] flex-col">
              <Link to="/support" className="text-[15px] text-[#66BBFF]">
                Start now
              </Link>
              <Link to="/support" className="text-[15px] text-[#66BBFF]">
                Download the Apple Support app
              </Link>
            </div>
          </div>
        </section>
        <section className="mt-[50px] lg:flex lg:max-w-[817px] lg:mx-auto">
          <div className=" max-w-[409px] mx-auto mt-[50px] lg:mt-0">
            <h1 className="text-[40px] text-[#333333]">Trade in with Apple</h1>
            <p className="text-[22px] font-light text-[#333333]">
              Turn an eligible device into credit towards a new one, or recycle
              it for free. Apple Trade In is good for you and the planet.
            </p>
            <div className="mt-[30px]">
              <Link to="/support" className="text-[15px] text-[#0070C9]">
                Learn more
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={tradeApple}
              alt="tradeApple"
              className="max-w-[400px] mx-auto block"
            />
          </div>
        </section>
        <section className="mt-[50px] lg:flex lg:max-w-[817px] lg:mx-auto">
          <div className="flex justify-center">
            <img
              src={accidents}
              alt="accidents"
              className="max-w-[400px] mx-auto block max-h-[209px]"
            />
          </div>
          <div className=" max-w-[409px] mx-auto mt-[50px] lg:mt-0">
            <h1 className="text-[40px] text-[#333333]">
              Accidents happen. AppleCare+ covers them.
            </h1>
            <p className="text-[22px] font-light text-[#333333]">
              Get unlimited repairs for accidental damage protection, 24/7
              priority access to Apple experts, and more.
            </p>
            <div className="mt-[30px]">
              <Link to="/support" className="text-[15px] text-[#0070C9]">
                Learn more about AppleCare+
              </Link>
            </div>
          </div>
        </section>
        <section className="mt-[50px] lg:flex lg:max-w-[817px] lg:mx-auto">
          <div className=" max-w-[409px] mx-auto mt-[50px] lg:mt-0">
            <h1 className="text-[40px] text-[#333333]">My Support</h1>
            <p className="text-[22px] font-light text-[#333333]">
              Get up to date information about your Apple products in one place
              including repairs, tech support cases, and much more.
            </p>
            <div className="mt-[30px]">
              <Link to="/support" className="text-[15px] text-[#0070C9]">
                Sign in to My Support
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={mySupport}
              alt="mySupport"
              className="max-w-[400px] mx-auto block"
            />
          </div>
        </section>
        <section className="mt-[50px] max-w-[796px] mx-auto">
          <h4 className="text-center text-[#333333] text-[24px] font-medium">
            Safe and reliable repairs
          </h4>
          <p className="text-center text-[#333333] text-[17px] mt-[15px] mb-[23px]">
            At Apple, every product we make is built to last. We design durable,
            easy-to-use devices with innovative features that customers depend
            on, all while protecting their privacy and data. Customers should
            have access to safe, reliable, and secure repairs with genuine Apple
            parts if they need them.
          </p>
          <p className="text-center text-[#333333] text-[17px] ">
            Learn more about Apple's approach to expanding access to safe and
            reliable repairs.{" "}
            <span className="!text-[#0070C9]">View (PDF)</span>
          </p>
        </section>
        <section className="mt-[50px] max-w-[796px] mx-auto">
          <h4 className="text-center text-[#333333] text-[24px] font-medium">
            Beware of counterfeit parts
          </h4>
          <p className="text-center text-[#333333] text-[17px] mt-[15px] mb-[23px]">
            Some counterfeit and third party power adapters and batteries may
            not be designed properly and could result in safety issues. To
            ensure you receive a genuine Apple battery during a battery
            replacement, we recommend visiting an{" "}
            <span className="!text-[#0070C9]">Apple Store</span> or
            <span className="!text-[#0070C9]">
              Apple Authorized Service Provider
            </span>
            . If you need a replacement adapter to charge your Apple device, we
            recommend getting an Apple power adapter.
          </p>
          <p className="text-center text-[#333333] text-[17px] ">
            Also non-genuine replacement displays may have compromised visual
            quality and may fail to work correctly. Apple-certified screen
            repairs are performed by trusted experts who use genuine Apple
            parts.
          </p>
        </section>
        <section className="mt-[50px] flex flex-col lg:flex-row max-w-[796px] mx-auto gap-x-[20px] gap-y-[20px]">
          <div className="lg:w-1/3 flex justify-center">
            <img src={giftCards} alt="giftCards" className="max-w-[240px]" />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-[#333333] text-[32px]">
              Be aware of gift card scams
            </h2>
            <div className="mt-[30px]">
              <Link to="/support" className="text-[15px] text-[#0070C9]">
                Learn more
              </Link>
            </div>
          </div>
        </section>
        <section className="max-w-[796px] mx-auto mt-[50px] px-[20px] mb-[50px]">
          <h4 className="text-[#333333] text-[24px]">Apple Service Programs</h4>
          <div className="mt-[16px] *:text-[17px] *:text-[#0070C9] *:block flex flex-col gap-y-[18px]">
            <a href="#">
              Apple Watch Series 6 Service Program for Blank Screen Issue
            </a>
            <a href="#">
              iPhone 12 and iPhone 12 Pro Service Program for No Sound Issues
            </a>
            <a href="#">
              iPhone 11 Display Module Replacement Program for Touch Issues
            </a>
            <a href="#">15-inch MacBook Pro Battery Recall Program</a>
            <a href="#">
              Apple Three-Prong AC Wall Plug Adapter Recall Program
            </a>
            <a href="#">See all programs</a>
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

export default Support