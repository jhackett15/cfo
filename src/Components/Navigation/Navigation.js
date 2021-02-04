import React from 'react';
import Tachyons from 'tachyons/css/tachyons.min.css'
import { Link } from 'react-router-dom';
import logo from './logo.png'



const Navigation = () => {
return (

      <nav className="dt w-100 center fixed z-5 db" style={{maxWidth:'100%',backgroundColor:"coral"}}> 
      <img src={logo} className="flex f5 pl5 w5" alt="Dan Hackett"/>
        <div className="dtc v-mid tr pa3">
          <div className='dib'>
            <Link to='/thebasics'
            className="f6 fw4 hover-blue no-underline dn dib-ns pv2 ph3">The Basics
            </Link>
          </div>
          <div className='dib'>
            <Link to='/services'
            className="f6 fw4 hover-blue no-underline dn dib-ns pv2 ph3">Services
            </Link>
          </div>
          <div className='dib'>
            <Link to='/about'
            className="f6 fw4 hover-blue no-underline dn dib-ns pv2 ph3">About
            </Link>
          </div>
          <div className='dib'>
            <Link to='/blog'
            className="f6 fw4 hover-blue no-underline dn dib-ns pv2 ph3">Blog
            </Link>
          </div>
         <div className='dib'>
            <Link to='/contact'
            className="f6 fw4 hover-blue no-underline dn dib-ns pv2 ph3">Contact
            </Link>
          </div>
          <div className='dib'>
            <Link to='/signin'
            className="f6 fw4 hover-blue no-underline dn dib-ns pv2 ph3">Sign In
            </Link>
          </div>

        </div>
      </nav> 
      
);
}

export default Navigation;