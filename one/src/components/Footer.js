import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-sections'>
                {/* address */}
            </div>
            <div className='footer-sections'>
                {/* quick links */}
                <h3 className='title'>Quick Link</h3>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/shop"}>Shop</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className='footer-sections'>
                {/* form */}

            </div>
            <div className='footer-sections'>
                {/* map */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27570.591399238085!2d75.88017746051152!3d22.714459501107065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2d9d102c081%3A0x3db0868f2f1c5e1e!2sScheme%20No%20140%2C%20Indore%2C%20Madhya%20Pradesh%20452016!5e1!3m2!1sen!2sin!4v1757523542732!5m2!1sen!2sin"
                    className='map'
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location"
                ></iframe>
            </div>
        </div>
    )
}
