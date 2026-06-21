import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">SAVEUR</div>
          <div className="right">
            <p>12 Harbor View Lane, Downtown District</p>
            <p>Open: 12:00 PM - 11:00 PM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Crafted with care for food lovers everywhere</p>
          </div>
          <div className="right">
            <p>© {new Date().getFullYear()} Saveur. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;