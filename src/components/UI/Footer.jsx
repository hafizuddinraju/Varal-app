import React from "react";
import "../../styles/footer.css";
import logo from "../../assets/img/dumble.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="1500">
      <div className="footer-data-items">
      Varaluae 2021 C All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
