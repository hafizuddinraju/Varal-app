import React, { useEffect, useRef } from "react";
import logo from "../../assets/photos/logo.png";
import "../../styles/header.css";

const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#services",
    display: "Services",
  },
 
  {
    path: "#pricing-plan",
    display: "Pricing",
  },
  {
    path: "#about-us",
    display: "About Us",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleClick = e => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          {/* ======= LOGO ========= */}
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
           
          </div>

          {/* ========== navigation menu ========== */}

          

          {/* =========== nav right ============ */}
          <div className="nav__right">
          <ul className="menu">
              {nav__links.map((item, index) => (
                <li key={index} className="nav__item">
                  <a onClick={handleClick} href={item.path}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
            <button className="register__btn">Start a Company</button>
            <span className="mobile__menu">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
