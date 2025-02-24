import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from 'motion/react';
const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className="bg-black h-[60px] w-[100vw] z-[20] relative flex justify-between items-center px-[30px]
    lg:px-[90px] lg:h-[140px] lg:py-[30px]
    "
    >
      <Link to="/">
        <FaApple style={{ color: "white", fontSize: "28px" }} />
      </Link>
      <div className="hidden lg:flex gap-x-[40px] *:text-white *:font-(--font-sf-pro) relative z-[40] *:hover:border-b-1 *:hover:border-from-font
      transition-all duration-300
      ">
        <Link
          to="/store"
        >
          Store
        </Link>
        <Link to="/iphone">
          iPhone
        </Link>
        <Link to="/appstore">
          App Store
        </Link>
        <Link to="/tv">
          TV
        </Link>
        <Link to="/accessories">
          Accessories
        </Link>
        <Link to="/support">
          Support
        </Link>
      </div>
      {!showMenu ? (
        <GiHamburgerMenu
          style={{ color: "white", fontSize: "28px", cursor: "pointer" }}
          onClick={toggleMenu}
          className="lg:hidden"
        />
      ) : (
        <IoMdClose
          style={{
            color: "black",
            fontSize: "28px",
            cursor: "pointer",
            zIndex: 50,
            position: "absolute",
            top: "20px",
            right: "30px",
          }}
          onClick={toggleMenu}
        />
      )}

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100vw", transition: { duration: 0.5 } }}
            exit={{ width: 0, transition: { duration: 0.5 } }}
            className="bg-white w-[100vw] h-[1200px] flex flex-col items-center pt-[100px] gap-y-[20px]
                     text-black text-[28px] absolute top-0 left-0 z-[30] lg:hidden"
          >
            <Link to="/" onClick={toggleMenu}>
              <FaApple style={{ color: "black", fontSize: "28px" }} />
            </Link>
            <Link to="/store" onClick={toggleMenu}>
              Store
            </Link>
            <Link to="/iphone" onClick={toggleMenu}>
              iPhone
            </Link>
            <Link to="/appstore" onClick={toggleMenu}>
              App Store
            </Link>
            <Link to="/tv" onClick={toggleMenu}>
              TV
            </Link>
            <Link to="/accessories" onClick={toggleMenu}>
              Accessories
            </Link>
            <Link to="/support" onClick={toggleMenu}>
              Support
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
