import React from 'react';
import { FaFacebookF, FaYoutube, FaPinterest, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {

    return (
        <div className='Footer'>
            <a className='Footer__bar' href="help">Help</a>
            <a className='Footer__bar' href="private">Private Policy</a>
            <a className='Footer__bar' href="use">Terms of Use</a>
            <a className='Footer__bar' href="setting">Settings</a>
            <a className='Footer__bar' href="language">Language</a>
            <div className='Footer__contant'>
                <a href="https://www.facebook.com/maybelline" class="Footer__icon" target="_blank" rel='noreferrer' aria-label="Facebook">
                    <FaFacebookF /> Facebook
                </a>
                <a href="https://twitter.com/maybelline" class="Footer__icon" target="_blank" rel='noreferrer' aria-label="Twitter">
                    <FaTwitter /> Twitter
                </a>
                <a href="https://www.pinterest.com/Maybelline/" class="Footer__icon" target="_blank" rel='noreferrer' aria-label="Pinterest">
                    <FaPinterest />Pinterest
                </a>
                <a href="https://instagram.com/maybelline/" class="Footer__icon" target="_blank" rel='noreferrer' aria-label="Instagram">
                    <FaInstagram />  Instagram
                </a>
                <a href="https://www.youtube.com/user/maybellinenewyork" class="Footer__icon" target="_blank" rel='noreferrer' aria-label="Youtube">
                    <FaYoutube />   Youtube
                </a>
            </div>
            <h5 className='Footer_copyright'> Copyright © 2021 Maybelline New York.</h5>
        </div>
    );
}

export default Footer;