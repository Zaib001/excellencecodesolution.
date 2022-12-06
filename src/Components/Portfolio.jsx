import React from 'react'

const Portfolio = () => {
  return (
    <div>
         <div>
        <section className="page-title bg-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center">
                  <span className="text-white">Latest works</span>
                  <h1 className="text-capitalize mb-4 text-lg">Portfolio</h1>
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="index.html" className="text-white">Home</a></li>
                    <li className="list-inline-item"><span className="text-white">/</span></li>
                    <li className="list-inline-item text-white-50">Latest works</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section portfolio start */}
        <section className="section portfolio pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <div className="section-title">
                  <span className="h6 color-three">Our works</span>
                  <h2 className="mt-3 content-title">We have done lots of works, lets check some</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row portfolio-gallery">
              <div className="col-lg-4 col-md-6">
                <div className="portflio-item position-relative mb-4">
                  <a href="images/portfolio/1.jpg" className="popup-gallery">
                    <img src="images/portfolio/1.jpg" alt="portfolio" className="img-fluid w-100" />
                    <i className="ti-plus overlay-item color-three" />
                    <div className="portfolio-item-content">
                      <h3 className="mb-0 text-white">Project california</h3>
                      <p className="text-white-50">Web Development</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="portflio-item position-relative mb-4">
                  <a href="images/portfolio/2.jpg" className="popup-gallery">
                    <img src="images/portfolio/2.jpg" alt="portfolio" className="img-fluid w-100" />
                    <i className="ti-plus overlay-item" />
                    <div className="portfolio-item-content">
                      <h3 className="mb-0 text-white">Project california</h3>
                      <p className="text-white-50">Web Development</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="portflio-item position-relative mb-4">
                  <a href="images/portfolio/3.jpg" className="popup-gallery">
                    <img src="images/portfolio/3.jpg" alt="portfolio" className="img-fluid w-100" />
                    <i className="ti-plus overlay-item" />
                    <div className="portfolio-item-content">
                      <h3 className="mb-0 text-white">Project california</h3>
                      <p className="text-white-50">Web Development</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="portflio-item position-relative mb-4">
                  <a href="images/portfolio/4.jpg" className="popup-gallery">
                    <img src="images/portfolio/4.jpg" alt="portfolio" className="img-fluid w-100" />
                    <i className="ti-plus overlay-item" />
                    <div className="portfolio-item-content">
                      <h3 className="mb-0 text-white">Project california</h3>
                      <p className="text-white-50">Web Development</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="portflio-item position-relative  mb-4">
                  <a href="images/portfolio/5.jpg" className="popup-gallery">
                    <img src="images/portfolio/5.jpg" alt="portfolio" className="img-fluid w-100" />
                    <i className="ti-plus overlay-item" />
                    <div className="portfolio-item-content">
                      <h3 className="mb-0 text-white">Project california</h3>
                      <p className="text-white-50">Web Development</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="portflio-item position-relative mb-4">
                  <a href="images/portfolio/6.jpg" className="popup-gallery">
                    <img src="images/portfolio/6.jpg" alt="portfolio" className="img-fluid w-100" />
                    <i className="ti-plus overlay-item" />
                    <div className="portfolio-item-content">
                      <h3 className="mb-0 text-white">Project california</h3>
                      <p className="text-white-50">Web Development</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section portfolio END */}
      </div>
    </div>
  )
}

export default Portfolio