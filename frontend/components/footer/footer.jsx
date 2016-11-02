import React from 'react';
import { Link } from 'react-router';

const Footer = () => (
  <div className="footer-box">
    <ul>
      Connect with me on:
      <li><Link to="https://github.com/amandamfielding"><img src="http://res.cloudinary.com/dbsxgncvx/image/upload/v1478062389/github-logo_koria9.png"/></Link></li>
      <li><Link to="https://www.linkedin.com/in/amandamfielding"><img src="http://res.cloudinary.com/dbsxgncvx/image/upload/v1478062390/linked_in_logo_fqwkrm.png"/></Link></li>
    </ul>
  </div>
);

export default Footer;
