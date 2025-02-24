import React from 'react'

const Footer = ({classB, classDiv}) => {
  return (
    <footer
      className="bg-[#F5F5F7] w-[100vw] h-[1600px] flex flex-col lg:flex-row lg:h-[30vh] p-[15px] gap-y-[20px] lg:gap-x-[100px]
    lg:px-[100px] pt-[100px]
    "
    >
      <div>
        <b className={classB}>Shop and Learn</b>
        <div className={classDiv}>
          <p>Store</p>
          <p>Mac</p>
          <p>iPad</p>
          <p>iPhone</p>
          <p>Watch</p>
          <p>AirPods</p>
          <p>TV &amp; Home</p>
          <p>AirTag</p>
          <p>Accessories</p>
          <p>Gift Cards</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-[20px]">
        <div>
          <b className={classB}>Services</b>
          <div className={classDiv}>
            <p>Apple Music</p>
            <p>Apple TV+</p>
            <p>Apple Fitness+</p>
            <p>Apple News+</p>
            <p>Apple Arcarde</p>
            <p>iCloud</p>
            <p>Apple One</p>
            <p>Apple Card</p>
            <p>Apple Books</p>
            <p>Apple Podcast</p>
            <p>Apple Store</p>
          </div>
        </div>
        <div>
          <b className={classB}>Account</b>
          <div className={classDiv}>
            <p>Manage Your Apple ID</p>
            <p>Apple Store Account</p>
            <p>iCloud.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[20px]">
        <div>
          <b className={classB}>Apple Store</b>
          <div className={classDiv}>
            <p>Find a Store</p>
            <p>Genius Bar</p>
            <p>Today at Apple</p>
            <p>Apple Camp</p>
            <p>Apple Store App</p>
            <p>Refurbished and Clearance</p>
            <p>Financing</p>
            <p>Apple Trade In</p>
            <p>Order Status</p>
            <p>Shopping Help</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <b className={classB}>For Business</b>
          <div className={classDiv}>
            <p>Apple and Business</p>
            <p>Shop for Business</p>
          </div>
        </div>
        <div>
          <b className={classB}>For Education</b>
          <div className={classDiv}>
            <p>Apple and Education</p>
            <p>Shop for K-12</p>
            <p>Shop for College</p>
          </div>
        </div>
        <div>
          <b className={classB}>For Healthcare</b>
          <div className={classDiv}>
            <p>Apple in Healthcare</p>
            <p>Health on Apple Watch</p>
            <p>Health Records on iPhone</p>
          </div>
        </div>
        <div>
          <b className={classB}>For Government</b>
          <div className={classDiv}>
            <p>Shop for Government</p>
            <p>Shop for Veterans and Military</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[20px]">
        <div>
          <b className={classB}>Apple Values</b>
          <div className={classDiv}>
            <p>Accessibility</p>
            <p>Education</p>
            <p>Environment</p>
            <p>Inclusion and Diversity</p>
            <p>Privacy</p>
            <p>Racial Equity and Justice</p>
            <p>Supplier Responsibility</p>
          </div>
        </div>
        <div>
          <b className={classB}>About Apple</b>
          <div className={classDiv}>
            <p>Newsroom</p>
            <p>Apple Leadership</p>
            <p>Career Opportunities</p>
            <p>Investors</p>
            <p>Ethics & Compliance</p>
            <p>Events</p>
            <p>Contact Apple</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer