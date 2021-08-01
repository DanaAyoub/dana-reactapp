import React from 'react';
import './Footer.scss';
import { FaFacebookF, FaYoutube, FaPinterest, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer__bar'>
                <a href="/about-maybelline" className='help' title="about-maybelline">about-maybelline</a>
                <a href="/faq" className='help' title="FAQ/Contact Us">FAQ/Contact Us</a>
                <a href="/sitemap" className='help' title="SiteMap">SiteMap</a>
                <a href="/signup" className='help' title="Sign up">Sign up</a>
            </div>
            <div className='Footer__contant'>
                <a href="https://www.facebook.com/maybelline" class="icon icon-facebook" target="_blank" rel='noreferrer' aria-label="Facebook">
                    <FaFacebookF /> Facebook
                </a>
                <a href="https://twitter.com/maybelline" class="icon icon-twitter" target="_blank" rel='noreferrer' aria-label="Twitter">
                    <FaTwitter /> Twitter
                </a>
                <a href="https://www.pinterest.com/Maybelline/" class="icon icon-pinterest" target="_blank" rel='noreferrer' aria-label="Pinterest">
                    <FaPinterest />Pinterest
                </a>
                <a href="https://instagram.com/maybelline/" class="icon icon-instagram" target="_blank" rel='noreferrer' aria-label="Instagram">
                    <FaInstagram />  Instagram
                </a>
                <a href="https://www.youtube.com/user/maybellinenewyork" class="icon icon-youtube" target="_blank" rel='noreferrer' aria-label="Youtube">
                    <FaYoutube />   Youtube
                </a>
            </div>
            <h5 className='Footer_copyright'> Copyright © 2021 Maybelline New York.</h5>
        </div>
    );
}

export default Footer;