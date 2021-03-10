import React from 'react'
import { Button } from '../Button'
import '../../styles/Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">Join the adventure newsletter 
                    to receive our best game deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" 
                        placeholder="Your Email" className="footer-input"/>
                        <Button route="/" buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/">How it works</Link>
                        <Link to="/">Testemonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">ToS</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact us</h2>
                        <Link to="/">How it works</Link>
                        <Link to="/">Testemonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">ToS</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/">How it works</Link>
                        <Link to="/">Testemonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">ToS</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            GMS <i className="fab fa-accusoft"/>
                        </Link>
                    </div>
                    <small className="website-rights">GMS 2021</small>
                    <div className="social-icons">
                        <Link 
                        className="social-icon-link facebook" 
                        to="/" 
                        target="_blank"
                        aria-label="Facebook">
                            <i className="fab fa-facebook-f"/>
                        </Link>
                        <Link 
                        className="social-icon-link instagram" 
                        to="/" 
                        target="_blank"
                        aria-label="Instagram">
                            <i className="fab fa-instagram"/>
                        </Link>
                        <Link 
                        className="social-icon-link twitter" 
                        to="/" 
                        target="_blank"
                        aria-label="Twitter">
                            <i className="fab fa-twitter"/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
