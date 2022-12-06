import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    
      {/* Header Start */}
       {/* Header Start */}
       <header className="navigation">
        <div className="header-top ">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-2 col-md-4">
                <div className="header-top-socials text-center text-lg-left text-md-left ">
                  <Link to="https://www.facebook.com/themefisher" aria-label="facebook"><i className="fab fa-facebook-f" /></Link>
                  <Link to="https://twitter.com/themefisher" aria-label="twitter"><i className="fab fa-twitter" /></Link>
                  <Link to="https://github.com/themefisher/" aria-label="github"><i className="fab fa-github" /></Link>
                </div>
              </div>
              <div className="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
                <div className="header-top-info mb-2 mb-md-0">
                  <Link href="tel:+92 320-4702032">Call Us : <span>+92 320-4702032</span></Link>
                  <Link href="mailto:info@excellencecodesolution.com"><i className="fas fa-envelope mr-2" /><span>info@excellencecodesolution.com</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="navbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg px-0 py-4">
                  <Link className="navbar-brand" to='/'>
                    EC<span>S.</span>
                  </Link>
                  <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-bars" />
                  </button>
                  <div className="collapse navbar-collapse text-center" id="navbarsExample09">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <Link className="nav-link" to='/'>Home</Link>
                      </li>
                      <li className="nav-item @@about">
                        <Link className="nav-link " to='/about'>About</Link>
                      </li>
                      <li className="nav-item @@service"><Link className="nav-link" to='/services'>Services</Link></li>
                      <li className="nav-item @@project"><Link className="nav-link" to='/portfolio'>Portfolio</Link></li>
                      <li className="nav-item @@blog">
                        <Link className="nav-link " to='/blog'>Blog</Link>
                      </li>
                      <li className="nav-item @@contact"><Link className="nav-link" to='/contact'>Contact</Link></li>
                    </ul>
                    <div className="my-2 my-md-0 ml-lg-4 text-center">
                      <Link href="contact.html" className="btn btn-solid-border btn-round-full">Get a Quote</Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header Close */}
    </>
  )
}

export default Header