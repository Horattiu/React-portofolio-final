import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="quote-container">
        <p className="quote">Some inspirational quote</p>
        <p className="quote">-somebody</p>
        <hr />

        <p className="copyright">
          copyright @2022 by Oltean Horatiu.personal portofolio.
        </p>
        <p className="copyright">
          {' '}
          illustrations made by me.
        </p>
      </div>
      <div className="ill-container">
        <img src={require('./img/illustration.png')} className="illustration" />
      </div>
    </div>
  );
}

export default Footer;
