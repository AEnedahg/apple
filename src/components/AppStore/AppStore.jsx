import React from 'react'
import appStoreHero from '../../images/appstore-hero.svg';
import appstoreIcon from '../../images/appstore-icon.svg';
import discoveryOne from '../../images/discovery-1.png';
import discoveryTwo from '../../images/discovery-2.png';
import moreDiscovery from '../../images/more-discovery.png';
import plus from '../../images/plus.svg';
import search from '../../images/search.svg';
import details from '../../images/details.png';
import privacy from '../../images/privacy.svg';
import privacyTwo from '../../images/privacy-two.png';
import appleLock from '../../images/apple-lock.svg';
import adhere from '../../images/adhere.svg';
import family from '../../images/family.svg';
import surprise from '../../images/surprise.svg';
import unlock from '../../images/unlock.svg';
import advantage from '../../images/advantage.png';
import instantlyGrid from '../../images/instantly-grid.png';
import purchase from '../../images/purchase.svg';
import problem from '../../images/problem.svg';
import refund from '../../images/refund.png';
import currency from '../../images/currency.svg';
import {newsGrid} from './data';
import Footer from '../Footer';
const AppStore = () => {
  return (
    <div>
      <section className="pb-[100px]">
        <img src={appStoreHero} alt="appstore-hero" />
        <div className="flex flex-col items-center px-[10px]">
          <img
            src={appstoreIcon}
            alt="appstore-icon"
            className="w-[46px] h-[46px] lg:w-[146px] lg:h-[146px] mt-[30px]"
          />
          <p className="text-[12px] text-[#1D1D1F]">App Store</p>
          <h1 className="text-[28px] lg:text-[80px] text-[#1D1D1F] font-bold text-center mt-[40px] max-w-[980px]">
            The apps you love.
            <br />
            From a place you can trust. The apps you love.
          </h1>
          <p className="lg:text-[32px] text-[17px] text-[#1D1D1F] text-center mt-[40px] max-w-[885px]">
            For over a decade, the App Store has proved to be a safe and trusted
            place to discover and download apps. But the App Store is more than
            just a storefront — it's an innovative destination focused on
            bringing you amazing experiences. And a big part of those
            experiences is ensuring that the apps we offer are held to the
            highest standards for privacy, security, and content. Because we
            offer nearly two million apps — and we want you to feel good about
            using every single one of them.
          </p>
        </div>
      </section>
      <section className="px-[10px]">
        <h1 className="text-[28px] lg:text-[64px] text-center font-bold">
          Designed for discovery.
        </h1>
        <div className="grid grid-cols-12 grid-cols-12 mt-[50px] max-w-[1020px] mx-auto gap-y-[30px] lg:*:rounded-[18px]">
          <div className="col-span-12 row-span-4 flex flex-col lg:flex-row gap-y-[20px]">
            <h2 className="text-[#1D1D1F] font-bold text-[40px] lg:text-[48px] lg:w-1/2">
              Stories and collections that inform, help, and inspire. Updated
              daily.
            </h2>
            <img src={discoveryOne} alt="discovery-one" className="" />
          </div>
          <div className="col-span-12 row-span-6 flex flex-col lg:flex-row gap-y-[20px] gap-x-[60px]">
            <div className="bg-[#0071E3] flex items-end px-[40px]">
              <h2 className="lg:text-[64px] text-[40px] text-[#F5F5F7] font-bold mt-[200px] mb-[40px] max-w-[348px]">
                Over 20K stories and counting.
              </h2>
            </div>
            <div className="pl-[10px] flex flex-col gap-y-[47px]">
              <h2 className="text-[40px] lg:text-[48px] font-bold text-[#1D1D1F] max-w-[348px]">
                Curated by experts. Handpicked for you.
              </h2>
              <img src={discoveryTwo} alt="discovery-two" />
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${moreDiscovery})` }}
            className="col-span-12 row-span-2 bg-center bg-cover bg-no-repeat h-[300px]"
          ></div>
        </div>
      </section>
      <section className="mt-[20px] grid grid-cols-12 grid-cols-12 mt-[50px] max-w-[1020px] mx-auto gap-[20px] lg:*:rounded-[18px]">
        <div className="pl-[10px] col-span-12 row-span-2 relative">
          <p
            className="text-[#6E6E73] w-[49px] h-[24px] border-1 border-solid border-[#6E6E73] rounded-[12px] flex justify-center 
          items-center mb-[30px]"
          >
            New
          </p>
          <h1 className="text-[30px] text-[#1D1D1F] lg:text-[48px] font-bold">
            Explore in-app events like movie premieres, gaming competitions, and
            livestreams.
          </h1>
          <img
            src={plus}
            alt="plus"
            className="absolute right-[20px] bottom-0 w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"
          />
        </div>
        <div className="p-[20px] col-span-12 row-span-4 lg:col-span-6">
          <div className="flex justify-center items-center mt-[92px]">
            <img src={search} alt="search" />
          </div>
          <h2 className="text-[40px] text-[#1D1D1F] lg:text-[48px] font-bold mt-[60px] max-w-[348px]">
            Discover amazing apps with a rich search experience.
          </h2>
        </div>
        <div className="flex items-end col-span-12 row-span-4 bg-black lg:col-span-6 p-[20px] lg:pl-[40px]">
          <h2 className="text-[40px] text-[#F5F5F7] lg:text-[48px] font-bold mt-[380px] max-w-[240px]">
            1.8M apps available worldwide.
          </h2>
        </div>
        <div className="flex items-end col-span-12 row-span-4 bg-black lg:col-span-6 p-[20px] lg:pl-[40px]">
          <h2 className="text-[40px] text-[#F5F5F7] lg:text-[48px] font-bold mt-[380px] max-w-[240px]">
            175 storefronts in over 40 languages.
          </h2>
        </div>
        <div className="flex items-end col-span-12 row-span-4 bg-[#0071E3] lg:col-span-6 p-[20px] lg:pl-[40px]">
          <h2 className="text-[40px] text-[#F5F5F7] lg:text-[48px] font-bold mt-[380px] max-w-[240px]">
            Over 150 expert editors worldwide.
          </h2>
        </div>
        <div className="flex flex-col col-span-12 row-span-2 relative lg:flex-row">
          <img src={details} alt="details" className="lg:w-2/3" />
          <div className="flex items-center justify-center py-[220px] px-[40px] lg:basis-1/2">
            <h3 className="lg:text-[48px] text-[30px] text-[#1D1D1F] font-bold max-w-[348px]">
              Get the details on every app.
            </h3>
          </div>
          <img
            src={plus}
            alt="plus"
            className="absolute right-[40px] bottom-[40px] w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"
          />
        </div>
      </section>
      <section className="mt-[50px] max-w-[1020px] mx-auto">
        <div className="px-[20px] *:text-[28px] *:lg:text-[64px] *:text-center *:font-bold *:text-[#1D1D1F] mb-[50px]">
          <h1>Privacy and security.</h1>
          <h1>Built into everything we do.</h1>
        </div>
        <div className="grid grid-cols-12 grid-rows-12 gap-[20px] lg:*:rounded-[18px]">
          <div className="col-span-12 row-span-4 flex flex-col lg:flex-row">
            <div className="py-[100px] lg:py-[220px] px-[40px] lg:w-1/2">
              <h2 className="lg:text-[48px] text-[28px] text-[#1D1D1F] font-bold text-center lg:text-left max-w-[398px] mx-auto">
                Security for every app. At every level.
              </h2>
            </div>
            <img src={privacy} alt="privacy" className="lg:w-1/2" />
          </div>
          <div className="flex items-end col-span-12 row-span-4 bg-[#0071E3] lg:col-span-6 p-[20px] lg:pl-[40px]">
            <h2 className="text-[40px] text-[#F5F5F7] lg:text-[48px] font-bold max-w-[400px]">
              100% of apps are automatically screened for known malware.
            </h2>
          </div>
          <div className="flex items-end col-span-12 row-span-4 bg-[#1D1D1F] lg:col-span-6 p-[20px] lg:pl-[40px]">
            <h2 className="text-[40px] text-[#F5F5F7] lg:text-[36px] font-bold lg:max-w-[400px] mt-[60px] max-w-[348px]">
              Over 16K apps use Apple health technologies like HealthKit,
              CareKit, and ResearchKit designed to protect patient privacy.
            </h2>
          </div>
          <div className="col-span-12 row-span-4 flex flex-col lg:flex-row">
            <img src={privacyTwo} alt="privacyTwo" className="lg:w-1/2" />
            <div className="py-[100px] lg:py-[220px] px-[40px] lg:w-1/2">
              <h2 className="lg:text-[48px] text-[28px] text-[#1D1D1F] font-bold text-center lg:text-left max-w-[398px] mx-auto">
                You choose what data to share. And with whom.
              </h2>
            </div>
          </div>
          <div className="flex items-end col-span-12 row-span-4 bg-[#1D1D1F] lg:col-span-6 p-[20px] lg:pl-[40px]">
            <h2 className="text-[40px] text-[#F5F5F7] lg:text-[48px] font-bold lg:max-w-[246px] mt-[60px] max-w-[348px]">
              Over 215K submissions rejected last year for violating privacy
              guidelines.
            </h2>
          </div>
          <div className="flex flex-col items-center col-span-12 row-span-4 bg-white lg:col-span-6 p-[20px] lg:pl-[40px]">
            <img src={appleLock} alt="apple-lock" />
            <h3 className="lg:text-[48px] text-[28px] text-[#1D1D1F] font-bold text-center lg:text-left max-w-[398px] mx-auto mt-[40px] max-w-[348px]">
              Apps can't pull your data from other apps.
            </h3>
          </div>
        </div>
      </section>
      <section className="mt-[50px] max-w-[1020px] mx-auto">
        <div className="px-[20px] *:text-[28px] *:lg:text-[64px] *:text-center *:font-bold *:text-[#1D1D1F] mb-[50px]">
          <h1>Dedicated to trust and safety.</h1>
        </div>
        <div className="grid grid-cols-12 grid-rows-12 gap-[20px] lg:*:rounded-[18px]">
          <div className="col-span-12 row-span-4 lg:col-span-6">
            <h2 className="mt-[57px] ml-[20px] lg:mt-[57px] lg:ml-[60px] text-[40px] text-[#1D1D1F] lg:text-[48px] font-bold">
              Apps must adhere to our guidelines.
            </h2>
            <img src={adhere} alt="adhere" className="mt-[47px]" />
          </div>
          <div className="col-span-12 row-span-4 lg:col-span-6 bg-[#1D1D1F]">
            <h1 className="text-[#F5F5F7] font-bold lg:text-[64px] text-[40px] lg:mt-[62px] lg:ml-[60px] lg:mb-[56px] m-[20px] max-w-[348px]">
              Every week, over 500 dedicated experts around the world review
              over 100K apps.
            </h1>
          </div>
          <div className="col-span-12 row-span-4 lg:col-span-6 bg-[#0071E3]">
            <h3 className="text-[#F5F5F7] mt-[295px] mb-[57px] lg:ml-[60px] ml-[20px] font-bold text-[40px] lg:text-[48px] max-w-[357px]">
              Over 1M submissions rejected for objectionable, harmful, unsafe,
              or illegal content.
            </h3>
          </div>
          <div className="col-span-12 row-span-4 lg:col-span-6 bg-white">
            <img
              src={family}
              alt="family"
              className="my-[90px] mx-[20px] lg:mx-[50px] w-[280px] mx-auto"
            />
            <h3 className="text-[#1D1D1F] mt-[295px] lg:ml-[60px] ml-[20px] font-bold text-[40px] lg:text-[48px] max-w-[289px]">
              You should never have to worry about inappropriate content.
            </h3>
          </div>
          <div className="col-span-12 row-span-4 lg:col-span-6 bg-white">
            <h3 className="text-[#1D1D1F] mt-[57px] lg:ml-[60px] ml-[20px] font-bold text-[40px] lg:text-[48px] max-w-[260px]">
              No surprise purchases.
            </h3>
            <img
              src={surprise}
              alt="surprise"
              className="mt-[124px] mx-[20px] lg:mx-[50px] w-[360px] mx-auto"
            />
          </div>
          <div className="col-span-12 row-span-4 lg:col-span-6 bg-[#1D1D1F]">
            <h1 className="text-[#F5F5F7] font-bold lg:text-[64px] text-[40px] lg:mt-[62px] lg:ml-[60px] lg:mb-[56px] m-[20px] max-w-[348px]">
              Every day, moderators review worldwide App Store charts for
              quality and accuracy.
            </h1>
          </div>
          <div className="col-span-12 row-span-4 lg:col-span-6 bg-[#1D1D1F]">
            <h1 className="text-[#F5F5F7] font-bold text-[40px] lg:text-[48px] lg:mt-[347px] lg:ml-[60px] lg:mb-[56px] m-[20px] max-w-[384px]">
              In 2020, we removed over 80M user reviews that were considered
              spam.
            </h1>
          </div>
          <div className="col-span-12 row-span-4 lg:col-span-6 bg-[#0071E3]">
            <h3 className="text-[#F5F5F7] mt-[243px] mb-[57px] lg:ml-[60px] ml-[20px] font-bold text-[40px] lg:text-[48px] max-w-[357px]">
              We have removed over 2.3M apps because they haven't been updated
              or don't work on our latest OS releases.
            </h3>
          </div>
        </div>
      </section>
      <section className="mt-[50px] max-w-[1020px] mx-auto">
        <div className="px-[20px] *:text-[28px] *:lg:text-[64px] *:text-center *:font-bold *:text-[#1D1D1F] mb-[50px]">
          <h1>
            Hardware and software. Powering amazing experiences together by
            design.
          </h1>
        </div>
        <div className="grid grid-cols-12 grid-rows-12">
          <div className="col-span-12 row-span-6 flex flex-col lg:flex-row">
            <div className="flex justify-center items-center mb-[40px] lg:w-1/2">
              <h4 className="text-[#1D1D1F] text-[40px] lg:text-[48px] font-bold max-w-[353px] text-center lg:text-left">
                Apps help unlock the full potential of your Apple devices.
              </h4>
            </div>
            <img src={unlock} alt="unlock" className="lg:w-1/2" />
          </div>
          <div className="col-span-12 row-span-6 flex flex-col lg:flex-row">
            <div className="flex justify-center items-center mb-[40px] lg:w-1/2">
              <h4 className="text-[#1D1D1F] text-[40px] lg:text-[48px] font-bold max-w-[353px] text-center lg:text-left">
                We help app developers take advantage of our latest hardware
                technologies.
              </h4>
            </div>
            <img src={advantage} alt="advantage" className="lg:w-1/2" />
          </div>
        </div>
      </section>
      <section className="mt-[50px] max-w-[1020px] mx-auto">
        <div className="grid grid-cols-12 grid-rows-12 lg:*:rounded-[18px]">
          <div className="col-span-12 row-span-3">
            <div className="px-[20px] *:text-[28px] *:lg:text-[64px] *:text-center *:font-bold *:text-[#1D1D1F] mb-[50px]">
              <h1>Download with confidence.</h1>
            </div>
            <div
              style={{ backgroundImage: `url(${instantlyGrid})` }}
              className="bg-center bg-cover w-full h-[283px]"
            ></div>
            <h2 className="text-[#1D1D1F] font-bold text-[40px] lg:text-[48px] mx-[20px] lg:ml-[60px] mt-[92px] mb-[57px]">
              Make any app yours. Instantly.
            </h2>
          </div>
          <div className="col-span-12 row-span-3 lg:col-span-6 bg-[#0071E3]">
            <h3 className="text-[#F5F5F7] mt-[243px] mb-[57px] lg:ml-[60px] ml-[20px] font-bold text-[40px] lg:text-[48px] max-w-[357px]">
              Over 900K apps have secure payment technologies like Apple Pay and
              StoreKit for goods and services.
            </h3>
          </div>
          <div className="col-span-12 row-span-3 lg:col-span-6 flex flex-col">
            <div className="flex justify-center items-center">
              <img src={purchase} alt="purchase" className="my-[152px]" />
            </div>
            <h3 className="text-[#1D1D1F] lg:ml-[60px] ml-[20px] font-bold text-[40px] lg:text-[48px] max-w-[344px]">
              Purchase safely and securely.
            </h3>
          </div>
          <div className="col-span-12 row-span-3 lg:col-span-6 flex flex-col">
            <div className="flex justify-center items-center">
              <img src={problem} alt="problem" className="my-[103px]" />
            </div>
            <h3 className="text-[#1D1D1F] lg:ml-[60px] ml-[20px] font-bold text-[40px] lg:text-[48px] max-w-[309px]">
              Problem with an app? Easily report it from the App Store.
            </h3>
          </div>
          <div className="col-span-12 row-span-3 lg:col-span-6 flex flex-col">
            <h3 className="text-[#1D1D1F] lg:ml-[60px] ml-[20px] font-bold text-[40px] lg:text-[48px] max-w-[330px]">
              Need a refund? AppleCare has your back.
            </h3>
            <div className="flex justify-center items-center">
              <img src={refund} alt="refund" className="mt-[47px]" />
            </div>
          </div>
          <div className="col-span-12 row-span-3 lg:col-span-6 bg-[#1D1D1F]">
            <h1 className="text-[#F5F5F7] font-bold text-[40px] lg:text-[48px] lg:mt-[243px] lg:ml-[60px] lg:mb-[56px] m-[20px] max-w-[384px]">
              More than 4B apps distributed each day from data centers running
              on 100% renewable energy.
            </h1>
          </div>
          <div className="col-span-12 row-span-3 lg:col-span-6 flex flex-col">
            <div className="flex justify-center items-center">
              <img src={currency} alt="currency" className="my-[113px]" />
            </div>
            <h3 className="text-[#1D1D1F] lg:ml-[60px] ml-[20px] font-bold text-[40px] lg:text-[48px] max-w-[309px]">
              Over 195 local payment methods and 45 currencies supported.
            </h3>
          </div>
        </div>
      </section>
      <section className="mt-[50px] max-w-[1020px] mx-auto mb-[50px]">
        <div className="px-[20px] *:text-[28px] *:lg:text-[64px] *:text-center *:font-bold *:text-[#1D1D1F] mb-[50px]">
          <h1>News about the App Store.</h1>
        </div>
        <div className="grid grid-cols-12 grid-rows-12">
          {newsGrid.map(({ id, img, text, date, dateStyle }) => {
            return (
              <div key={id} className="col-span-12 lg:col-span-6 row-span-12">
                <img src={img} alt={text} />
                <div className="my-[24px] ml-[18px]">
                  <p className="font-bold text-[21px] text-[#1D1D1F]">{text}</p>
                  <small className={dateStyle}>{date}</small>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer
        classB="text-[12px] text-bold leading-[0.12px] text-[#1D1D1F]"
        classDiv="*:text-[#424245] *:text-[12px]"
      />
    </div>
  );
}

export default AppStore