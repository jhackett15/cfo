import React from 'react';
import Tachyons from 'tachyons/css/tachyons.min.css'

const Footer = () => {
return (
 <footer className="pv4 ph3 ph5-m ph6-l bg-light-blue mid-gray">
 <div className='tc mt3'>
    <div className='contact-foot dib ph2 f8'>Email:</div>
      <span>dhackett@dfsdf@gmail.com</span>
    <div className='contact-foot dib ph2 f8'>Phone:</div>
      <span>+1 343-343-34344</span>
    <div className='contact-foot dib ph2 f8'>HQ:</div>
      <span>Cincinnati, OH</span>
 </div>
  <div className="tc mt3">
    <a href="/thebasics/" title="Language" className="f8 dib ph2 link mid-gray dim">The Basics</a>
    <a href="/services/"  title="Terms" className="f8 dib ph2 link mid-gray dim">Services</a>
    <a href="/about/" title="Language" className="f8 dib ph2 link mid-gray dim">About</a>
    <a href="/blog/"    title="Terms" className="f8 dib ph2 link mid-gray dim">Blog</a>
    <a href="/privacy/"  title="Privacy" className="f8 dib ph2 link mid-gray dim">Privacy</a>
  </div>
<br></br>
  <div className="f8 db tc">© 2020 <b className="ttu">Executive Pro Tem LLC</b>., All Rights Reserved</div>
</footer>


);
}
export default Footer;

