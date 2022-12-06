import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className="footer section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget">
                  <h4 className="text-capitalize mb-4">Company</h4>
                  <ul className="list-unstyled footer-menu lh-35">
                    <li><Link to=''>Privacy Policy</Link></li>
                    <li><Link to=''>Terms &amp; Conditions</Link></li>
                    <li><Link to=''>Support</Link></li>
                    <li><Link  to=''>FAQ</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="widget">
                  <h4 className="text-capitalize mb-4">Quick Links</h4>
                  <ul className="list-unstyled footer-menu lh-35">
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/blog'>Blogs</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 mx-auto">
                <div className="widget">
                  <h4 className="text-capitalize mb-4">Subscribe Us</h4>
                  <p>Subscribe to get latest news article and resources </p>
                  <form action="#" className="sub-form">
                    <input type="text" className="form-control mb-3" placeholder="Subscribe Now ..." />
                    <Link to='/contact' className="btn btn-main btn-small">subscribe</Link>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget">
                  <div className="logo mb-4">
                    <h3>EC<span>S.</span></h3>
                  </div>
                  <h6><a href="mailto:info@excellencecodesolution.com">info@excellencecodesolution.com</a></h6>
                  <a href="tel:+92 320-4702032"><span className="color-three h4">+92 320-4702032</span></a>
                </div>
              </div>
            </div>
            <div className="footer-btm pt-4">
              <div className="row">
                <div className="col-lg-6">
                  <div className="copyright">
                    Copyright © 2020, Designed &amp; Developed by <a href="https://www.linkedin.com/in/zebimalik/" target='_blank'>JAHANZAIB MALIK</a>
                  </div>
                </div>
                <div className="col-lg-6 text-left text-lg-right">
                  <ul className="list-inline footer-socials">
                    <li className="list-inline-item"><a href="https://www.facebook.com/themefisher"><i className="fab fa-facebook-f mr-2" />Facebook</a></li>
                    <li className="list-inline-item"><a href="https://twitter.com/themefisher"><i className="fab fa-twitter mr-2" />Twitter</a></li>
                    <li className="list-inline-item"><a href="https://www.pinterest.com/themefisher/"><i className="fab fa-pinterest-p mr-2 " />Pinterest</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
  )
}

export default Footer