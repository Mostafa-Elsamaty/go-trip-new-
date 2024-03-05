import { faBehance, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import logo from '../../imag/logo2_footer.png'
import footerBg from '../../imag/footer_bg.jpg'
import './Footer.css'

const Footer = () => {
  return (
   <Fragment>
        <div className='footer'style={{backgroundImage:`url(${footerBg})`}} > 
            <div className='container' >
                <div className="row footer-title">
                    <ul className='col-lg-3 col-md-6 col-sm-12 footer-list'>
                    <li className='footer-logo'>
                        <img src={logo} alt="Footer Logo" />
                    </li>
                    <li  >Lorem iaspsum doldfor sit amvset,<br />
                        consectetur adipisicing cvelit csed do <br /> eiusmod tempor
                        incididucvccnt ut <br/> labovre.
                    </li>
                    </ul>
                    <ul className='col-lg-3 col-md-6 col-sm-12 footer-list'>
                    <li className='active'>Quick Links</li>
                    <li>About</li>
                    <li>Offers & Discounts</li>
                    <li>Get Coupon</li>
                    <li>Contact Us</li>
                    </ul>
                    <ul className='col-lg-3 col-md-6 col-sm-12 footer-list'>
                    <li className='active'>New Products</li>
                    <li>Woman Cloth</li>
                    <li>Fashion Accessories</li>
                    <li>Man Accessories</li>
                    <li>Rubber made Toys</li>
                    </ul>
                    <ul className='col-lg-3 col-md-6 col-sm-12 footer-list'>
                    <li className='active'>Support</li>
                    <li>Frequently Asked Questions</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Report a Payment Issue</li>
                    </ul>
                </div>
                <div className="row">
                    <div className="Copyright col-lg-6 col-md-6 col-ms-12">
                        <p>
                            Copyright ©2024 All rights reserved | This template is made with 
                            <span><FontAwesomeIcon  icon={faHeart} /></span> by <span>Colorlib</span>
                        </p>
                       
                    </div>
                    <div className="footer-icons col-lg-6 col-md-6 col-ms-12">
                        <FontAwesomeIcon icon={faFacebook} className='footer-icon' />
                        <FontAwesomeIcon icon={faTwitter} className='footer-icon' />
                        <FontAwesomeIcon icon={faBehance}  className='footer-icon' />
                        <FontAwesomeIcon icon={faGlobe}  className='footer-icon' />
                        
                    </div>
                </div>
        </div>
    </div>
   </Fragment>
  )
}

export default Footer