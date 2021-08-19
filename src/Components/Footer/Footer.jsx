import React from 'react';
import { FaFacebookF, FaYoutube, FaPinterest, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {

    return (
        <div className='Footer'>
            <a className='Footer__bar'
                href="help">
                Help</a>
            <a className='Footer__bar'
                href="private">
                Private Policy</a>
            <a className='Footer__bar'
                href="use">
                Terms of Use</a>
            <a className='Footer__bar'
                href="setting">
                Settings</a>
            <a className='Footer__bar'
                href="language">
                Language</a>
            <div className='Footer__contant'>
                <a href="https://www.facebook.com/maybelline"
                    className="Footer__icon"
                    target="_blank">
                    <FaFacebookF />
                    Facebook
                </a>
                <a href="https://twitter.com/maybelline"
                    className="Footer__icon"
                    target="_blank">
                    <FaTwitter />
                    Twitter
                </a>
                <a href="https://www.pinterest.com/Maybelline/"
                    className="Footer__icon"
                    target="_blank">
                    <FaPinterest />
                    Pinterest
                </a>
                <a href="https://instagram.com/maybelline/"
                    className="Footer__icon"
                    target="_blank">
                    <FaInstagram />
                    Instagram
                </a>
                <a href="https://www.youtube.com/user/maybellinenewyork"
                    className="Footer__icon"
                    target="_blank">
                    <FaYoutube />
                    Youtube
                </a>
            </div>
            <h5 className='Footer__copyright'>
                Copyright © 2021 Maybelline New York.
            </h5>
        </div>
    );
}

export default Footer;